import { type configDefaults, defineConfig } from 'vitest/config';

const isTurbo = process.env['INIT_CWD'];
const exclude = ['**/node_modules/**'];

const coverage: (typeof configDefaults)['coverage'] = {
  provider: 'v8',
};

export default defineConfig(() => {
  if (isTurbo) {
    return {
      resolve: {
        tsconfigPaths: true,
      },
      test: {
        environment: isTurbo.includes('juk-web') ? 'happy-dom' : 'node',
        exclude,
        coverage,
      },
    };
  }

  return {
    resolve: {
      tsconfigPaths: true,
    },
    test: {
      coverage,
      projects: [
        {
          test: {
            name: 'DOM',
            include: ['packages/juk-web/**/*.test.ts'],
            exclude,
            environment: 'happy-dom',
          },
        },
        {
          test: {
            name: 'NODE',
            include: ['packages/**/*.test.ts'],
            exclude: ['packages/juk-web/**/*.test.ts', ...exclude],
            environment: 'node',
          },
        },
      ],
    },
  };
});
