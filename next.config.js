// next.config.js

const nextConfig = {
    webpack(config, options) {
      config.module.rules.push({
        test: /\.pdf$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
            },
          },
        ],
      });
  
      return config;
    },
  };
  
  module.exports = nextConfig;
  