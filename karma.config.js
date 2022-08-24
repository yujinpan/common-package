const path = require('path');

module.exports = (config) => {
  config.set({
    frameworks: ['jasmine'],

    // single file test
    // files: ['src/module/*.spec.+(js|ts)'],
    files: ['src/**/*.spec.+(js|ts)'],

    preprocessors: {
      'src/**/*.+(js|ts)': ['webpack', 'sourcemap'],
    },

    browsers: ['Chrome'],
    singleRun: true,

    webpack: {
      mode: 'development',
      resolve: {
        alias: {
          '@': path.resolve(__dirname, './src'),
        },
        extensions: ['.ts', '.js'],
      },
      devtool: 'inline-source-map',
      module: {
        rules: [
          {
            test: /\.(js|ts)$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
            },
          },
          {
            exclude: /\.(js|ts)$/,
            loader: 'null-loader',
          },
        ],
      },
    },

    plugins: [
      'karma-webpack',
      'karma-sourcemap-loader',
      'karma-jasmine',
      'karma-chrome-launcher',
    ],
  });
};
