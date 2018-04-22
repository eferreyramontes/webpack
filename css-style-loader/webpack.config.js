const path = require('path');

// Debemos configurar un entry point y un output

module.exports = {
    entry: path.resolve(__dirname, 'index.js'),
    output: {
    	path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
    	rules: [
    		// Aquí van los loaders
    		{
    			test: /\.css$/, // Qué tipo de archivos vamos a leer
    			use: [
            'style-loader',
    				'css-loader',
    			]// Qué loader se va a encargar de la extensión del archivo
    		}
    	]
    }
}
