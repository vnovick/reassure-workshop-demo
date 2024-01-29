module.exports = {
  root: true,
  extends: '@react-native',
  //This might be helpful for reassure
  rules: {
    'jest/expect-expect': [
      'error',
      {
        assertFunctionNames: [
          'expect',
          'measureRenders',
          'measurePerformance',
          'measureFunction',
        ],
      },
    ],
  },
};
