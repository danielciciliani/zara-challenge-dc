# MBST Zara Challenge

Proyecto desplegado en Vercel: [zara-mbst-dc.vercel.app](https://zara-mbst-dc.vercel.app/)

MBST es un prototipo de e-commerce de telefonos móviles, según los requerimientos de la prueba técnica. Es una Single Page Application (SPA) creada en React.

Los usuarios pueden navegar por una grilla de productos que se obtienen desde una API, pueden filtrarlos en la barra de búsqueda, acceder al detalle de los mismos y agregarlos al carrito.

## Requisitos

- Node.js 18
- npm

## Instalación
Pasos para instalar el proyecto localmente:

1. Clonar el repositorio

```bash
git clone https://github.com/danielciciliani/zara-challenge-dc.git
cd zara-challenge-dc.git

```
2. Instalar dependecias de la raiz
```bash
npm install

```

3. Instalar dependecias de frontend
```bash
cd client/
npm install

```

4. Instalar dependecias de backend
```bash
cd ../server/
npm install

```

5. Iniciar el fronted en modo **develop**
```bash
cd ../client/
npm run dev

```

Opcionalmente, se puede optar por iniciar el frontend en modo **production**

```bash
cd ../client/
npm run biuld
```

La aplicacion estará disponible en [http://localhost:5173/](http://localhost:5173/)

## Estructura del proyecto - frontend

```bash
client/
├── dist/                   
├── node_modules/           
├── public/                 
├── services/               # Archivos estáticos como logos
│   └── api.js              # Lógica para llamadas a APIs
├── src/
│   ├── components/         # Componentes
│   │   ├── AddToCart/
│   │   ├── BackToGrid/
│   │   ├── Cart/
│   │   ├── ColorSelector/
│   │   ├── ContinueShopping/
│   │   ├── PayButton/
│   │   ├── PhoneCard/
│   │   ├── PhoneDetail/
│   │   ├── PhoneGrid/
│   │   ├── SearchProducts/
│   │   ├── SimilarProducts/
│   │   ├── Specs/
│   │   ├── StorageSelector/
│   │   └── TopBar/
│   ├── context/            # Context API
│   │   └── CartContext/
│   │   └── PhoneContext/
│   ├── App.css
│   ├── App.jsx
│   ├── App.scss
│   ├── index.css
│   ├── index.scss
│   ├── main.jsx            # Fichero principal de react
├── .env                    # Variables de entorno
├── .gitignore
├── .prettierrc.json
├── eslint.config.js
├── index.html              
├── package.json
├── package-lock.json
├── prettierignore
├── README.md
└── vite.config.js          # Configuración de vite

```

## Explicación de la arquitectura

- **Componentes:** están organizados con estructura modular.
- **Contextos:** manejan el estado global de la app, agregados al carrito y detalles de teléfonos.
- **Servicios:** los servicios que se encargan de interactuar con la API externa, como la función `fetchProducts`.
- **Vistas principales:** `PhoneGrid`, `PhoneDetail`, y `Cart` se encuentran junto con los componentes.

## Arquitectura y flujo
1. **Grilla de teléfonos:** El usuario puede navegar por la lista de teléfonos disponibles, que son cargados desde la API. También puede filtrarlos en la barra de búsqueda por *nombre* o *marca.*
2. **Detalle de telefono:** Cuando el usuario hace click en uno de los telefonos de la grilla, se ve la vista de detalle con una *url* específica para ese modelo, y opciones de color y almacenamiento. También puede ver productos relacionados y clickar sobre cualquiera de ellos para verlo en detalle.
3. **Carrito:** el usuario puede acceder al carrito y ver el listado de productos que tiene agregados y el total a pagar.

## Testing
Se realizaron pruebas unitarias sobre algunos componentes utilizando Vitest y React Testing Library.
Estas pruebas, se encuentran dentro de las carpetas de los componentes `AddToCart`, `BackToGrid` y `TopBar`.

Para ejecutar las pruebas, usar el siguiente comando:
```bash
npx vitest
```

## Tecnologías utilizadas
- **React**: para construir la UI.
- **Vite**: para construccion rápida y *dev server*.
- **React Router**: para manejar las rutas de la SPA.
- **Vitest**: para realizar pruebas unitarias
- **Sass**: para los estilos de la aplicación.
- **Context API**: para el manejo del estado global.

## Decisiones de desarrollo y retos encontrados
- Agregué un *placeholder* por defecto, para que se muestre en caso de que la imagen del producto no se haya renderizado. Esta hecho en figma, con el logo de la APP.
- Detecté productos duplicados al cargar los datos de la API. Lo que resolvi filtrando productos únicos en la misma llamada, antes de renderizarlos.También había productos duplicados en algunos de los productos relacionados.
- Limité la llamada a la API a 30 productos y ahí filtré duplicados, dado que se pide mostrar 20 en la grilla. Lo hice de esta manera por si en un futuro la api devolviera muchos mas productos, cuando solo nos interesa mostrar 20 en la grilla.
- Desplegué la aplicacion en cercel como uno de los puntos opcionales.
- Utilice variables de *scss* como otro de los opcionales.
- Manejé los productos añadidos al carrito con estado global y `Local Storage` de manera que sean datos persistentes y no se pierdan al recargar el navegador o navegar en las diferentes rutas de la SPA.
- Agregué la carpeta server al proyecto por si hacía SSR, pero es algo que decidí no hacer dentro de los opcionales. Deje la carpeta, por si a futuro se puede realizar en el proyecto. 

## License

[MIT](https://choosealicense.com/licenses/mit/)