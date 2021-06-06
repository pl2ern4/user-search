const path = require('path');

module.exports = {
    webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.module.rules.push({
        test: /\.scss$/i,
        exclude: /node_modules/,
        use:[
          "css-loader",
          {
            loader: "sass-loader",
        options:{
          sassOptions: {
            includePaths: [path.join(__dirname, 'styles')],
          }
        }

          }
        ]
        
      })
      return config;
    },
  }