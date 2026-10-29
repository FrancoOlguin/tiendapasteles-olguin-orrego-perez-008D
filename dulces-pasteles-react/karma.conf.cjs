module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', 'webpack'],
    files: [
      'src/**/*.test.jsx'
    ],
    preprocessors: {
      'src/**/*.test.jsx': ['webpack'],
      'src/**/*.test.js': ['webpack'],
      'src/**/*.spec.js': ['webpack']
    },
    webpack: {
      mode: 'development',
      module: {
        rules: [
          {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env', '@babel/preset-react']
              }
            }
          }
        ]
      },
      resolve: {
        extensions: ['.js', '.jsx']
      }
    },
    // Quitamos los navegadores visuales para que Karma no intente abrir Edge ni Chrome
    browsers: [], 
     singleRun: true,
    concurrency: Infinity
  });
};