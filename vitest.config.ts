import { defineConfig } from 'vitest/config';

const isTurbo = process.env['INIT_CWD'];

export default defineConfig(() => {
  if (isTurbo) {
    return {
      resolve: {
        tsconfigPaths: true,
      },
      test: {
        environment: isTurbo.includes('juk-web') ? 'happy-dom' : 'node',
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
            name: 'dom',
            include: ['packages/juk-web/**/*.test.ts'],
            environment: 'happy-dom',
          },
        },
        {
          test: {
            name: 'node',
            include: ['packages/**/*.test.ts'],
            exclude: ['packages/juk-web/**/*.test.ts'],
            environment: 'node',
          },
        },
      ],
    },
  };
});
