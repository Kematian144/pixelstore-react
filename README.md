# PixelStore - eCommerce de videojuegos con React

Proyecto de la Semana 8 (Desarrollo Frontend I, PFY2201): mejora de funcionalidades clave de un eCommerce usando React.

## Funcionalidades

- **useState**: estado del catalogo (`products`), del carrito (`cart`) y del panel del carrito (`isCartOpen`).
- **useEffect**: carga los productos desde `public/data/products.json` al iniciar y actualiza el estado.
- **Renderizado condicional**:
  - mensaje cuando el carrito esta vacio
  - el boton "Anadir al carrito" cambia a "En el carrito"
  - el boton "Pagar" solo aparece si hay productos
- Agregar y eliminar productos, contador y total del carrito.

## Estructura

```
src/
  components/
    Header.jsx        cabecera con boton del carrito
    Cart.jsx          panel del carrito
    ProductCard.jsx   tarjeta de producto
  App.jsx             estados, efectos y funciones del carrito
  App.css             estilos
  main.jsx            punto de entrada
public/data/
  products.json       datos de los productos
```

## Como ejecutarlo

```bash
npm install
npm run dev
```

## Publicar en GitHub Pages

1. En `vite.config.js`: `base: '/pixelstore-react/'`.
2. En `package.json`: `"homepage": "https://Kematian144.github.io/pixelstore-react"`.
3. Subir el codigo y desplegar:

```bash
git remote add origin https://github.com/Kematian144/pixelstore-react.git
git push -u origin main
npm run deploy
```

`npm run deploy` construye el proyecto y lo publica en la rama `gh-pages`.
