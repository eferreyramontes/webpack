const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

// Debemos configurar un entry point y un output

module.exports = {
    entry: {
      home: path.resolve(__dirname, 'src/js/home.js'),
      prices: path.resolve(__dirname, 'src/js/prices.js'),
      contact: path.resolve(__dirname, 'src/js/contact.js'),
    },
    output: {
    	path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name].js'
    },
    module: {
    	rules: [
    		// Aquí van los loaders
    		{
    			test: /\.css$/, // Qué tipo de archivos vamos a leer
    			use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: "css-loader"
          })
    		}
    	]
    },
    plugins: [
      // Aquí van los plugins
      new ExtractTextPlugin("css/[name].css") // manera dinámica.
    ]
}
