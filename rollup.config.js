import fs from 'fs';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import terser from '@rollup/plugin-terser';
import del from 'rollup-plugin-delete';
import typescript from '@rollup/plugin-typescript';
import { dts } from 'rollup-plugin-dts';

const pkg = JSON.parse(fs.readFileSync('./package.json', 'utf8'));

export default [
  // JavaScript bundle (CJS + ESM)
  {
    input: 'src/index.ts',
    output: [
      { file: pkg.main, format: 'cjs' },
      { file: pkg.module, format: 'esm' },
    ],
    plugins: [
      del({ targets: ['dist/*'], runOnce: true }),
      peerDepsExternal(),
      resolve(),
      commonjs(),
      typescript({ tsconfig: './tsconfig.json', declaration: false }),
      terser(),
    ],
    external: Object.keys(pkg.peerDependencies || {}),
  },

  // Type Declarations
  {
    input: 'src/index.ts',
    output: [{ file: pkg.types, format: 'es' }],
    plugins: [dts()],
  },

  // CLI Build
  {
    input: 'bin/index.ts',
    output: [
      {
        file: pkg.bin['js-utils-kit'],
        format: 'esm',
        banner: '#!/usr/bin/env node',
      },
    ],
    plugins: [
      peerDepsExternal(),
      resolve(),
      commonjs(),
      typescript({
        tsconfig: './tsconfig.json',
        declaration: false,
      }),
      terser(),
    ],
    external: ['commander', 'ora'],
  },
];
