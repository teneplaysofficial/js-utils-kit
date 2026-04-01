import { defineConfig } from 'vitest/config';

const isTurbo = process.env['INIT_CWD'];

export default defineConfig(() => {
  if (isTurbo) {
    return {
      test: {
        environment: isTurbo.includes('juk-web') ? 'happy-dom' : 'node',
      },
    };
  }

  return {
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
