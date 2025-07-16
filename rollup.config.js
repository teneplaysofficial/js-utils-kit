import fs from 'fs';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import terser from '@rollup/plugin-terser';
import del from 'rollup-plugin-delete';
import typescript from '@rollup/plugin-typescript';
import { dts } from 'rollup-plugin-dts';

const pkg = JSON.parse(fs.readFileSync('./package.json', 'utf8'));
const SRC_DIR = 'src';
const DIST_DIR = 'dist';

const subfolders = fs
  .readdirSync(SRC_DIR, { withFileTypes: true })
  .filter((d) => d.isDirectory())
  .map((d) => d.name);

const inputMap = {
  index: `${SRC_DIR}/index.ts`,
  ...Object.fromEntries(subfolders.map((f) => [f, `${SRC_DIR}/${f}/index.ts`])),
};

const external = [
  ...Object.keys(pkg.peerDependencies || {}),
  ...Object.keys(pkg.dependencies || {}),
];

const sharedPlugins = [
  peerDepsExternal(),
  resolve({ preferBuiltins: true, browser: true }),
  commonjs(),
  terser(),
  typescript({ tsconfig: './tsconfig.json', declaration: false }),
];

export default [
  // ESM
  {
    input: inputMap,
    output: {
      dir: DIST_DIR,
      format: 'esm',
      entryFileNames: (chunk) =>
        chunk.name === 'index' ? 'index.js' : `${chunk.name}/index.js`,
    },
    plugins: [del({ targets: `${DIST_DIR}`, runOnce: true }), ...sharedPlugins],
    external,
  },

  // CJS
  {
    input: inputMap,
    output: {
      dir: DIST_DIR,
      format: 'cjs',
      entryFileNames: (chunk) =>
        chunk.name === 'index' ? 'index.cjs' : `${chunk.name}/index.cjs`,
      exports: 'named',
    },
    plugins: [...sharedPlugins],
    external,
  },

  // Declarations
  {
    input: inputMap,
    output: {
      dir: DIST_DIR,
      format: 'esm',
      entryFileNames: (chunk) =>
        chunk.name === 'index' ? 'index.d.ts' : `${chunk.name}/index.d.ts`,
    },
    plugins: [dts()],
  },

  // CLI (optional)
  pkg.bin?.['js-utils-kit'] && {
    input: 'bin/index.ts',
    output: {
      file: pkg.bin['js-utils-kit'],
      format: 'esm',
      banner: '#!/usr/bin/env node',
    },
    plugins: [...sharedPlugins],
    external: ['commander', 'ora'],
  },
].filter(Boolean);
