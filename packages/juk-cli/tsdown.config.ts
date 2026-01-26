import { defineConfig } from 'tsdown';
import pkg from './package.json' with { type: 'json' };

const now = new Date();
const buildDate = `${String(now.getDate()).padStart(2, '0')}-${String(now.getMonth() + 1).padStart(2, '0')}-${now.getFullYear()}`;

export default defineConfig([
  {
    entry: './src/index.ts',
    format: 'esm',
    minify: true,
    banner: `#!/usr/bin/env node
/*!
 * ${pkg.displayName} v${pkg.version}
 * ${pkg.description}
 *
 * Copyright (c) ${buildDate} ${pkg.author.name}
 * Homepage: ${pkg.homepage}
 * Repository: ${pkg.repository.url}
 * License: ${pkg.license}
 *
 * This software is provided "as-is", without any express or implied warranty.
 */`,
  },
]);
