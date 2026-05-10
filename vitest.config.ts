import { defineConfig } from 'vitest/config';

const isTurbo = process.env['INIT_CWD'];
const exclude = ['**/node_modules/**'];

export default defineConfig(() => {
  if (isTurbo) {
    return {
      resolve: {
        tsconfigPaths: true,
      },
      test: {
        environment: isTurbo.includes('juk-web') ? 'happy-dom' : 'node',
        exclude,
      },
    };
  }

  return {
    resolve: {
      tsconfigPaths: true,
    },
    test: {
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
