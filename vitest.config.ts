import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'jsdom',
    globals: true,      // enables jest-like globals (e.g. describe, test, expect)
    setupFiles: './src/setupTests.ts', // optional, for setup like jest-dom
    include: ['src/**/*.{test,spec}.{js,ts,jsx,tsx}']
  },
});