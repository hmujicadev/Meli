# React TypeScript Meli Challenge SSR

![node.js@16](https://img.shields.io/badge/node.js-16-339933?style=for-the-badge&logo=nodedotjs) ![typescript@4](https://img.shields.io/badge/typescript-4-3178C6?style=for-the-badge&logo=typescript) ![reactjs@18](https://img.shields.io/badge/Reactjs-18-61DAFB?style=for-the-badge&logo=react) ![webpack@5](https://img.shields.io/badge/webpack-5-8dd6f9?style=for-the-badge&logo=webpack) ![html@5](https://img.shields.io/badge/html-5-E34F26?style=for-the-badge&logo=html5) ![sass@1.5](https://img.shields.io/badge/sass-1.5-CC6699?style=for-the-badge&logo=sass)


**Challenge SSR Meli**

Este proyecto, fue desarrollado con el fin de ser evaluado como parte de un proceso de postulación a mercado libre

---

## Que se usó

Core:

- **React** 18+
- **webpack** 5+ (con soporte para **SWC** en SSR o modo statico)
- **TypeScript** 

SSR:

- **Express** (incluyendo helmet para el SEO)

State:

- **Redux-Toolkit** 4+

Router:

- **React Router**

API:

- **RTK Query**

Styles:

- **(S)CSS modules**

Linters:

- **ESLint**
- **Stylelint**

Tests:

- **Jest** 29+
- **React Testing Library**
- opción de testear redux

Además:

- API request caching (RTK Query)
- Hot reload
- Webpack Bundle Analyzer

## Como usar

### Inicio Rápido (SSR con hot reload)

1. Clonar repo:

   `git clone https://github.com/hmujicadev/Meli`

2. Instalar paquetes:

   `npm i`

3. Correr projecto en modo desarrollo:

   `npm start`

4. Abre tu Navegador en:

   `http://localhost:8080/`

### Build y correr servidor (SSR)

1. Build para produccion `"dist"`:

    `npm run build`

    o Webpack Bundle Analyzer report server:

    `npm run build:report`

2. Correr servidor:

    `npm run run`

3. Puedes testear el servidor localmente:

    `http://localhost:3000/`

### Modo estatico desarrollo con hot reload

- Corriendo el siguiente comando se abrira automaticamente el navegador:

  `npm run start:static`

### Generar version estatica para produción

- Con el siguiente comando se obtiene una version estatica para produccion en `"dist"`:

  `npm run build:static`

  o para analizar el build y generar el reporte:

  `npm run build:static:report`


Todos los paquetes fueron fijados a la ultima version funcional probada para evitar incompatibilidades al instalar
