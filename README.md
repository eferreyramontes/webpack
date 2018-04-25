Webpack
=======

#¿Qué podemos hacer con Webpack?

Qué es Webpack, para qué sirve y por qué deberías tomar este curso.

**WP** es un Module Bundler for Modern JS Applications, es decir un empaquetador de módulos para el desarrollo de aplicaciones modernas en JavaScript.

**¿Por qué usar Webpack?**

* Aunque hay otras alternativas **WP** es un la forma mas sofisticada para cargar y transformar módulos. WP trae todas las formas de importación de módulos, en resumen trae lo mejor de todos los mundos.

* **Entrypoints** - múltiples puntos de entrada a tus aplicaciones - archivos iniciales, tienes uno por cada pagina que vayas a usar.

* Puedes tener multiples entrypoints.

* **OUTPUT**. Si bien le decimos cual es el archivo fuente, debemos decirle que hacer con eso y donde ponerlo, porque no queremos mezclar los archivos finales que lee el navegador con los archivos fuente.

* **Loaders**. Nos ayudan a cargar todo tipo de formato de archivos. Ej: coffescript, jsx,

* **Plugins**. nos ayudan a extender las caracteristicas de WP, por ejemplo comprimir archivos, dividir nuestros modulos en chunks, etc.

>> **WP** es developer experience.

## Instalación

```bash
npm init
```

```bash
npm install webpack --save-dev
```

```bash
npm list webpack
```

## Creando el primer bundle

Ya con Webpack instalado, vamos a crear nuestro primer bundle, y para esto necesitamos tener un entrypoint.
En este vídeo vamos a ver el paso a paso de cómo obtenerlo.

```bash
webpack index.js bundle.js
```
 Deberemos colcar este comando en el package.json como uno de los scripts y luego corremos la tarea:

```bash
npm run build
```

## Creando un webpack.config

* En esta parte del curso vamos a extender un poco más la configuración de WP.
* También vamos a crear un nuevo archivo llamado webpack.config.js.
* En este nuevo archivo que acabamos de crear vamos a definir el entry y el output de la aplicación.

# Creando estilos

Usamos los loaders css-loader y style-loader.

# Plugins

Para poner los archivos de css como un archivo externo, necesitamos usar un pluigin llamado extract-text-webpack-plugin.

# Iniciando un servidor de desarrollo - Webpack DevServer

https://webpack.js.org/configuration/dev-server/
https://github.com/webpack/webpack-dev-server

# Soporte ECMA script
Vamos a utilizar un nuevo loader; Babel-loader

https://github.com/babel/babel-loader
