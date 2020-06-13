module.exports = {
  setupFiles: ['<rootDir>/tests/jest.setup.js'],
  transformIgnorePatterns: ['/node_modules/(?!vuetify)'],
  preset: '@vue/cli-plugin-unit-jest/presets/typescript-and-babel',
};
