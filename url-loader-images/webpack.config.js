const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

// Debemos configurar un entry point y un output

module.exports = {
    entry: {
      index: path.resolve(__dirname, 'index.js'),
    },
    output: {
    	path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name].js'
    },
    module: {
    	rules: [
    		// Aquí van los loaders
        {
          test: /\.js$/, // Qué tipo de archivos vamos a leer
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['es2015']
            }
          },
        },
    		{
    			test: /\.css$/, // Qué tipo de archivos vamos a leer
    			use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: "css-loader"
          })
    		},
        {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 100000, // Hasta que límite de peso de archivo se puede usar
            }
          }
        ]
      }
    	]
    },
    plugins: [
      // Aquí van los plugins
      new ExtractTextPlugin("css/[name].css") // manera dinámica.
    ]
}
