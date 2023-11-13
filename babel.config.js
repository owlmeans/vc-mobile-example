module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          tests: ['./tests/'],
          "@components": "./src/components",
        }
      }
    ],
    ["@babel/plugin-transform-private-methods", { "loose": true }]
  ],
  env: {
    production: {
      plugins: ['react-native-paper/babel'],
    },
  },
};
