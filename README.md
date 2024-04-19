# ecwid

DEMO: [https://basic-shop.stsft.me/](https://basic-shop.stsft.me/)

This template should help get you started developing with Vue 3 in Vite.

## Test task for TypeScript/Vue.js developer in Ecwid

## Goal
Write an application that contains three pages:
- A page with a list of categories and products
- product page
- shopping cart page

### Data
Store data must be accessed using [Ecwid REST API](https://api-docs.ecwid.com/reference/rest-api)

The easiest way is to use a demo store. It's access info is like this:
- StoreID: 58958138
- Token: public_7BxbJGWyDaZfSQqjVS5Ftr4jzXkS43UD

### Page «products and categories list»
The page contains a list of products and categories in any convenient format: grid, list table.

Category page content:
- category name
- category image

Product page content:
- product name
- product price
- product image
- buy button

#### Opening category details
When you click on a category, the app takes you to a page with subcategories and products belonging to that category.

#### Opening product details
When you click on a product, the app goes to the Product Details page.

### «Product details» page
The page contains details about the product:
- product name
- product description
- product image
- product price
- buy button

### «Buy» button
The button adds an item to the "cart"
Shopping cart - any local storage with a list of added items.

### «Cart» icon
All pages display a cart icon with the number of items added to it. When you click on the icon, the application goes to the "Shopping cart" page

### «Cart» page
The page contains a list of added items and the "Place order" button.
Any item in the list can be deleted by clicking on the "Delete" button.

### Page navigation
The page state is displayed in the url. When you navigate to a url, the page that belongs to that url is displayed.

### «Place order» button
When you click on the button, a text congratulating you on your purchase is shown.

## Technologies
- Typescript
- VueJS
- HTML/CSS

## Design
Pages should look nice and readable. You can use any CSS framework.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
