import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  verbose: true,
  collectCoverage: true,
  collectCoverageFrom: [
    '<rootDir>/client/src/**/*.{ts,tsx}',
    '<rootDir>/server/src/**/*.{ts,tsx}',
  ],
  testMatch: ['**/__tests__/**/*.spec.ts?(x)'],
  testPathIgnorePatterns: ['<rootDir>/node_modules/'],
};
export default config;
