const path = require('path');

// Debemos configurar un entry point y un output 

module.exports = {
    entry: path.resolve(__dirname, 'index.js'),
    output: {
    	path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    }
}