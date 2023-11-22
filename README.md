# Ecommerce con React Milton Petitfour

Ecommerce creado con React, curso de Coderhouse

## Introducción

Este proyecto consta de un Ecommerce ficticio, creado enteramente con React y conocimientos básicos de manejo del mismo. El proyecto pertenece al curso de React de Coderhouse, en la carrera de desarrollador Full Stack. Al ser mi primera experiencia con React, intenté agregar navegabilidad y secillez al sitio, haciendo una experiencia agradable a cualquier visitante del mismo.

## Para instalar el proyecto

```sh
$ git clone https://github.com/miltonriver/segundaPreentregaMiltonPetitfour.git
$ cd ecommercemiltonpetitfour
$ npm install
$ node apprun dev
```

## Tecnologías / Librerías

- [Create-React-App](https://create-react-app.dev/)
- [Firebase](https://firebase.google.com/?hl=es-419)
- [sweetalert2](https://sweetalert2.github.io/)

## Flujo del sitio

Al momento de ingresar al sitio podemos visualizar una barra de navegación en la parte superior, compuesta por botones de las distintas categorías que integran el sitio en la parte izquierda, además en la parte derecha de la barra se encuentra un ícono del carrito de compras con un número a su lado indicando la cantidad de ítems agregados al mismo, este ícono también funciona como link al mismo.
La ruta principal tiene un listado de todos los productos del ecommerce con el nombre, una imagen, precio y un botón para ver el detalle del producto, estos se encuentran ordenados aleatoriamente.
Volviendo a la barra de navegación, Ingresando a cada botón de la parte izquierda de la misma, se produce un filtrado de productos por categoría, esto muestra las diferentes categorías que componen el sitio y una ventana mas minimizada de los productos que nos interesen.
Al ingresar en el botón "Ver detalle" de la parte baja de cada componente, se visualiza la imagen del mismo, su categoría, el stock disponible, precio e información del producto con una descripción más detallada del mismo, además de un contador para poder agregar la cantidad deseada de dicho producto al carrito de compras, siempre respetando como máximo el stock disponible.
Una vez agregado el producto al carrito, se actualiza el valor en la barra de navegación y se desmonta el contador por un botón de terminar compra, para ir a una vista previa del producto agregado al carrito o bien se puede seguir navegando por la tienda y repetir el proceso para agregar otros productos.
Una vez definida los productos y la cantidad de los mismos a comprar, se puede ingresar al carrito tanto a través del botón "Terminar compra" dentro del detalle del producto como haciendo click en el ícono del carrito de la barra de navegación, se pasa a la vista del carrito con el o los productos agregados con el detalle de la cantidad de productos agregados, el precio unitario de cada producto, el subtotal por producto, y al final el precio total a abonar en caso de realizar toda la compra. Se incluye, además, un botón para eliminar el producto del carrito (no importa cuantas unidades del mismo se hayan agregado), con un ícono de cesto de basura, que elimina el producto completo del carrito, previo una notificación de advertencia y confirmación, de la eliminación del producto del carrito. Además, cuenta con un botón en la parte inferior para eliminar todos los productos del carrito “Limpiar carrito” y debajo de todo el botón "Checkout" que nos conducirá al formulario de contacto para confirmar la compra.
El formulario consta de tres campos a completar: nombre y apellido, correo electrónico y número telefónico, y posee una lógica que únicamente genera la orden de compra si los tres campos están completos, de no ser así emite una notificación de advertencia hasta que todos los campos estén completos; también tiene una lógica que solo permite ingresar números en el campo correspondiente al número telefónico, una vez cumplidos todos los requisitos, se crea la orden con el botón "Generar orden" en la parte baja del formulario.
Si la cantidad de productos comprados no excede el stock disponible de alguno de los productos, se genera una orden de compra con un id que se muestra por pantalla, con ese id se podría ingresar a la base de datos “orders” y verificar los productos comprados. También luego de generada la orden el sistema descuenta los productos comprados del stock de productos existente en la base de datos “products” de Firebase y también actualiza el stock en la pantalla principal.

## Resumen del funcionamiento de la página

![Muestra de funcionamiento de la página, simulandouna compra](docs/EjemploEcommerceReact.gif "Ejemplo de compra en el sitio")
