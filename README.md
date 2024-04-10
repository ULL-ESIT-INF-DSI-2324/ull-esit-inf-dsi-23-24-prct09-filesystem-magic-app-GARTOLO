[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/T5K9tzcv)

# Práctica 9 - Aplicación para coleccionistas de Cartas Magic

Guillermo Emmanuel González Méndez - alu0101466941

[![Coverage Status](https://coveralls.io/repos/github/ULL-ESIT-INF-DSI-2324/ull-esit-inf-dsi-23-24-prct09-filesystem-magic-app-GARTOLO/badge.svg?branch=main)](https://coveralls.io/github/ULL-ESIT-INF-DSI-2324/ull-esit-inf-dsi-23-24-prct09-filesystem-magic-app-GARTOLO?branch=main)

[![Tests](https://github.com/ULL-ESIT-INF-DSI-2324/ull-esit-inf-dsi-23-24-prct09-filesystem-magic-app-GARTOLO/actions/workflows/node.js.yml/badge.svg)](https://github.com/ULL-ESIT-INF-DSI-2324/ull-esit-inf-dsi-23-24-prct09-filesystem-magic-app-GARTOLO/actions/workflows/node.js.yml)

[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=ULL-ESIT-INF-DSI-2324_ull-esit-inf-dsi-23-24-prct09-filesystem-magic-app-GARTOLO&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=ULL-ESIT-INF-DSI-2324_ull-esit-inf-dsi-23-24-prct09-filesystem-magic-app-GARTOLO)

## Índice

- [Introducción](#introducción)
- [Objetivos](#objetivos)
- [Desarrollo de la práctica](#desarrollo-de-la-práctica)
- [Conclusiones](#conclusiones)
- [Bibliografía](#bibliografía)

## Introducción

En esta práctica se va a desarrollar una aplicación para coleccionistas de cartas Magic, que permita gestionar una colección de cartas. Para ello se utilizará el módulo `fs` de Node.js para leer y escribir en ficheros JSON. Se opera mediante la consola gracias a la librería `yargs` y se formateará la salida con `chalk`. Las operaciones que podremos utilizar son: Añadir, modificar, eliminar y mostrar una carta y mostrar todas las cartas de un usuario.

## Objetivos

- Utilizar el módulo `fs` de Node.js y su API síncrona para leer y escribir en ficheros JSON.
- Utilizar `yargs` para gestionar los argumentos de la línea de comandos.
- Utilizar `chalk` para formatear la salida de la consola.
- Crear una aplicación para coleccionistas de cartas Magic que permita gestionar una colección de cartas.

## Desarrollo de la práctica

Para el desarrollo de la práctica en primer lugar hemos definido las interfaces en el archivo `ICard.ts` que se encargará de definir las propiedades de una carta. Este archivo también incluye varios enums que se utilizarán para definir los colores, tipos y rarezas de las cartas. También diferenciamos entre cartas normales, cartas de criaturas y cartas de planeswalker. Las unimos todas en un único tipo `ICard`.

A continuación, en el archivo `magic-app.ts` contamos con el funcionamiento base de yargs, llamando a diferentes comandos que se encargarán de realizar las operaciones de añadir, modificar, eliminar y mostrar cartas. Para ello, hemos dividido en la carpeta `functions` los diferentes archivos cada una de las operaciones. Además, en esta carpeta hemos creado otras dos funciones `printCard` y `createICard` que se encargarán de imprimir una carta y de crear una carta respectivamente.

Dentro de cada comando, recibimos los argumentos necesarios para realizar la operación y llamamos a la función correspondiente, que encontramos en la carpeta fileManager.

- En el caso de añadir una carta, primero comprobamos si el usuario ya existe y si no, lo creamos. A continuación, añadimos la carta a la colección del usuario.
- Para modificar una carta, primero comprobamos si la carta existe y si es así, la modificamos.
- Para eliminar una carta, primero comprobamos si la carta existe y si es así, la eliminamos.
- Por último, para mostrar una carta, comprobamos si la carta existe y si es así, la mostramos.
- Para mostrar todas las cartas de un usuario, comprobamos si el usuario existe y si es así, mostramos todas las cartas de ese usuario.

Cada carta se guarda en un archivo diferente, con el ID de la carta como nombre del archivo, dentro de la subcarpeta de cada usuario en el directorio `CardsCollection`.

Tal y como se requería en la práctica, hemos hecho uso del paquete `chalk` para darle color a la salida de la consola. Los errores se mostrarán en rojo y los mensajes de éxito en verde, además de algún mensaje de información en azul.

- Como curiosidad, a partir de la [versión 21.7.0](https://nodejs.org/en/blog/release/v21.7.0) de Node.js, se ha añadido `styleText`, para añadir estilos a los textos de la consola, de forma nativa por lo que no es necesario instalar ningún paquete adicional. Estos cambios además serán incluidos en la versión 22 de mediados de abril, que será LTS.

Por último, hemos realizado tests para comprobar los errores de la función createCard, y hemos utilizado la librería `sinon` para leer los mensajes por consola de cada una de las funciones de la aplicación.

Sin embargo, realizando los tests de esta manera, pasaban adecuadamente en local, pero no en GitHub Actions, por lo que hemos comentado el archivo fileManager.spec.ts y, por tanto, no se ejecutarán estos tests y fallará la cobertura de tests, ya que no llegará al 75%.

## Conclusiones

En esta práctica hemos aprendido a utilizar el módulo `fs` de Node.js para leer y escribir en ficheros JSON, a utilizar `yargs` para gestionar los argumentos de la línea de comandos y a utilizar `chalk` para formatear la salida de la consola. Son módulos muy útiles y sencillos de utilizar que nos permiten realizar aplicaciones sencillas aunque en algunos casos, como en el de `fs`, mucho más escalables y complejas.

## Bibliografía

- [Chalk](https://www.npmjs.com/package/chalk)
- [Node FS](https://nodejs.org/docs/latest/api/fs.html)
