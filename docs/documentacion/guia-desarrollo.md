[← Volver al README principal](../../README.md)

# Guía de Desarrollo, Mantenimiento y Pruebas

Esta guía resume cómo editar el código en `frontend/`, mantener actualizados los datos y generar una nueva versión de la carpeta `entrega/` para la revisión académica.

---

## 1. Requisitos previos (equipo de desarrollo)

- **Node.js** y **npm** instalados (probado con Node.js `v26.13.1` y npm `11.20.0`).
- **Visual Studio Code**.

---

## 2. Cómo abrir el proyecto en VS Code

1. Abra **Visual Studio Code**.
2. Vaya a **Archivo → Abrir carpeta...** y seleccione la carpeta raíz `Mr.Patitas`.
3. Abra la terminal integrada con `Ctrl + ñ` (o **Terminal → Nueva terminal**).
4. Si es la primera vez que abre el proyecto en ese equipo, instale las dependencias del frontend:

```powershell
npm --prefix frontend install
```

---

## 3. Cómo iniciar el modo de desarrollo con Vite

```powershell
npm --prefix frontend run dev
```

Vite levantará un servidor local (por lo general en `http://localhost:5173`) y recargará la página automáticamente cada vez que guarde cambios en `frontend/src/`. Use `Ctrl + C` para detenerlo.

---

## 4. Cómo modificar productos, categorías y navegación

### Modificar o agregar productos
Edite únicamente **`frontend/src/data/demoProducts.ts`**:
- Cambie nombres, descripciones, características, precios (`demoPriceCop`) o stock (`demoStock`) directamente sobre cada objeto de `DEMO_PRODUCTS`.
- Para añadir artículos nuevos (por ejemplo, al completar los 20 productos de `RF06`), agregue objetos al mismo arreglo.
- No hace falta tocar `ProductCard.tsx`, `Hero.tsx`, `CategoryStrip.tsx` ni `ProductCatalog.tsx`: los totales generales, por especie y por categoría se recalculan solos.

### Cambiar, renombrar o agregar categorías
Edite únicamente **`frontend/src/data/categories.ts`**:
- Cada categoría define `name`, `description`, `icon` (`'bowl'`, `'leash'`, `'bed'`, `'toy'`, `'hygiene'` o `'tag'`) y `accentClass`.
- Verifique que el campo `category` de cada producto en `demoProducts.ts` coincida con el `name` configurado en `categories.ts`.

### Cambiar enlaces de navegación o textos generales
Edite **`frontend/src/data/siteConfig.ts`** (`NAV_LINKS` y `SITE_CONFIG`), compartido por el encabezado y el pie de página.

---

## 5. Cómo reemplazar o agregar imágenes

1. Guarde el archivo (preferiblemente `.svg` liviano) dentro de **`frontend/src/assets/images/`**.
2. **Para reemplazar una ilustración existente sin cambiar código:** guarde el nuevo archivo con el mismo nombre (por ejemplo `alimento-gato.svg`).
3. **Para agregar una imagen nueva:**
   - Impórtela y expórtela en **`frontend/src/assets/images/index.ts`** dentro de `PRODUCT_IMAGES`.
   - Asígnela en `imageSrc` dentro de **`frontend/src/data/demoProducts.ts`** junto con un texto `imageAlt` descriptivo (`RNF03`).
4. **Importante:** no use enlaces de Internet (`https://...`) ni `fetch()`. Al importarlas como módulos locales, Vite las incrusta dentro de `entrega/MrPatitas.html` para que carguen sin conexión.

---

## 6. Cómo cambiar colores y tipografías

Los colores principales y la tipografía están centralizados en el bloque `@theme` de **`frontend/src/index.css`**:

| Token CSS | Valor actual | Uso |
| :--- | :---: | :--- |
| `--color-brand-primary` | `#d96b27` | Color principal de acento, logotipo y botones primarios |
| `--color-brand-primary-hover` | `#c2591a` | Color al pasar el cursor sobre botones primarios |
| `--color-brand-secondary` | `#1e4d4f` | Títulos, encabezados y fondo del pie de página |
| `--color-surface-canvas` | `#faf8f5` | Fondo general de la página |
| `--color-surface-muted` | `#f5f1eb` | Fondo de la sección del catálogo |
| `--color-hero-from` / `--color-hero-to` | `#fff9f2` / `#eef6f4` | Degradado de la sección de bienvenida |
| `--font-sans` | `'Segoe UI', system-ui, ...` | Tipografía del sistema (sin fuentes externas) |

Al cambiar estos valores se actualiza toda la página sin editar los componentes uno por uno.

---

## 7. Cómo compilar una nueva versión para entregar

```powershell
npm --prefix frontend run build
```

Este comando:
1. Revisa los tipos de TypeScript (`tsc -b`).
2. Compila todo en un único HTML con `vite-plugin-singlefile` dentro de `frontend/dist/index.html`.
3. Copia automáticamente ese archivo a **`entrega/MrPatitas.html`**.

---

## 8. Cómo probar la carpeta `entrega/` antes de enviarla

1. Haga doble clic en `entrega/iniciar_mr_patitas.bat` y confirme que el navegador abre mostrando los 6 productos y sus ilustraciones.
2. Copie la carpeta `entrega/` a otra ruta con espacios (por ejemplo `Escritorio\Prueba Entrega Mr Patitas\entrega`) y repita la ejecución del `.bat`.
3. Revise en la barra de direcciones que inicia por `file:///` y que la consola (`F12 → Consola`) no muestre errores.
4. Pruebe la vista de escritorio (`1280px`) y la de móvil (`390px`) con `F12 → Ctrl + Shift + M`, verificando el menú hamburguesa.

---

## 9. Control de versiones (Git local)

El repositorio local usa la rama **`main`**. El archivo **`.gitignore`** excluye automáticamente:
- Dependencias: `node_modules/`, `frontend/node_modules/`, `backend/node_modules/`.
- Archivos temporales de compilación: `frontend/dist/`, `backend/dist/`, `.vite/`, `*.tsbuildinfo`.
- Variables de entorno y secretos: `.env`, `.env.local`, `.env.*.local`, `*.local`.
- Temporales de pruebas, sistema y Office: `coverage/`, `playwright-report/`, `test-results/`, `*.log`, `~$*.docx`, `~$*.xlsx`.

---

**Ver también:** [Arquitectura y funcionamiento](./arquitectura.md) · [Motor de búsqueda y tablas hash](./motor-busqueda-y-estructuras.md) · [Requisitos y estado](./requisitos-y-estado.md)
