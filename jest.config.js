module.exports = {
  preset: '@testing-library/react-native',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?react-native|@react-native|@react-native-community|@react-navigation|react-redux)',
  ],
  setupFilesAfterEnv: [
    '<rootDir>/jest-setup.ts',
    './node_modules/react-native-gesture-handler/jestSetup.js',
  ],
};
