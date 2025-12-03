import { glob, readFile, writeFile } from 'node:fs/promises';
import { EOL } from 'node:os';
import { basename } from 'node:path';
import sylog from 'sylog';
import pkg from '../package.json' with { type: 'json' };

try {
  let safeExit = true;

  /**
   * @typedef {"-f"} CliFlags
   *
   *  @type {Set<CliFlags>}
   */
  const args = new Set(process.argv.slice(2));
  const corePath = 'packages/core/package.json';

  // Verify core contains all internal packages

  /**
   * @type {string[]}
   */
  const pkgNames = await Array.fromAsync(
    glob('packages/*', {
      exclude: ['*/core'],
    }),
  );
  const lib_names = pkgNames.map((p) => `@js-utils-kit/${basename(p)}`);
  const corePkg = JSON.parse(await readFile(corePath));
  const missing = lib_names.filter((l) => !Object.keys(corePkg.dependencies).includes(l));

  const engineIssues = [];

  for (const p of pkgNames) {
    const pkgPath = `${p}/package.json`;
    const pkgJson = JSON.parse(await readFile(pkgPath));
    if (JSON.stringify(pkgJson.engines) !== JSON.stringify(pkg.engines)) {
      engineIssues.push({ pkgPath, pkgJson });
    }
  }

  if (!args.has('-f')) {
    if (missing.length) {
      safeExit = false;
      sylog.warn('Missing packages in core:', missing.join(', '));
      sylog.info('Run with "-f" to automatically add missing packages');
    }

    if (engineIssues.length) {
      safeExit = false;
      sylog.warn(
        `Engine mismatch in ${engineIssues.map((d) => d.pkgPath.split(/[/\\]/)[1]).join(', ')}`,
      );
      sylog.info('Run with "-f" to automatically fix engines field in all packages');
    }
  }

  if (args.has('-f')) {
    await writeFile(
      corePath,
      JSON.stringify(
        {
          ...corePkg,
          dependencies: Object.fromEntries(
            Object.entries({
              ...corePkg.dependencies,
              ...Object.fromEntries(missing.map((n) => [n, 'workspace:*'])),
            }).sort(([a], [b]) => a.localeCompare(b)),
          ),
        },
        null,
        2,
      ) + EOL,
    );

    sylog.success('Core package.json updated successfully!');

    for (const { pkgPath, pkgJson } of engineIssues) {
      await writeFile(
        pkgPath,
        JSON.stringify(
          {
            ...pkgJson,
            engines: pkg.engines,
          },
          null,
          2,
        ) + EOL,
      );
      sylog.success(`Updated engines in ${pkgPath.split(/[/\\]/)[1]}`);
    }
  }

  process.exit(safeExit ? 0 : 1);
} catch (error) {
  sylog.error(error.message);
}
