module.exports = {
  testEnvironment: 'node',
  testEnvironmentOptions: {
    NODE_ENV: 'test',
  },
  restoreMocks: true,
  coveragePathIgnorePatterns: ['node_modules', 'dist/config', 'dist/app.js'],
  coverageReporters: ['text', 'lcov', 'clover', 'html'],
  globals: {
    'ts-jest': {
      diagnostics: false,
    },
  },
  // @faker-js/faker 10 ships ESM only; let ts-jest compile it to CommonJS.
  transform: { '\\.[tj]s$': ['ts-jest', { tsconfig: { allowJs: true } }] },
  transformIgnorePatterns: ['node_modules/(?!@faker-js/faker)'],
};
