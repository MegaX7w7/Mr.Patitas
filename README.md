# Mr. Patitas — Catálogo Virtual para Perros y Gatos

Proyecto universitario de la asignatura *Software en Equipo* (metodología **TSPi**) — **Institución Universitaria Politécnico Grancolombiano**.

> **Estado actual — Entrega 2 de 3:** Avance funcional de la interfaz web con diseño adaptable a escritorio y móvil, **6 productos de prueba** y distribución portable en un solo archivo HTML (`entrega/MrPatitas.html`) que abre directamente en el navegador sin instalaciones ni conexión a Internet.

---

## Cómo abrir la aplicación (sin instalaciones)

1. Copie la carpeta **`entrega/`** a cualquier ubicación en Windows (incluso si la ruta tiene espacios).
2. Haga doble clic en **`entrega/iniciar_mr_patitas.bat`** (o directamente en **`entrega/MrPatitas.html`**).

- **Requisitos:** cualquier navegador moderno en Windows (Edge, Chrome o Firefox).
- **No requiere:** Node.js, npm, VS Code, PostgreSQL, servidores locales ni Internet.
- **Datos de prueba:** los 6 productos, precios y existencias son de ejemplo y no corresponden a inventario comercial real.

---

## Comandos para el equipo de desarrollo

Requisitos: **Node.js** y **npm**.

```powershell
# Instalar dependencias del frontend
npm --prefix frontend install

# Ejecutar el servidor de desarrollo local (Vite)
npm --prefix frontend run dev

# Compilar y actualizar entrega/MrPatitas.html
npm --prefix frontend run build
```

---

## Documentación del proyecto

Para mantener este README breve, la explicación detallada está dividida por temas en **`docs/documentacion/`**:

| Documento | Contenido |
| :--- | :--- |
| **[Arquitectura y funcionamiento](docs/documentacion/arquitectura.md)** | Diagrama de componentes, organización del frontend, separación desarrollo vs. ejecución, cómo funciona `iniciar_mr_patitas.bat` y pruebas realizadas. |
| **[Guía de desarrollo y mantenimiento](docs/documentacion/guia-desarrollo.md)** | Cómo abrir el proyecto en VS Code, usar Vite, editar productos/categorías/imágenes/colores, compilar y probar `entrega/`. |
| **[Motor de búsqueda y tablas hash](docs/documentacion/motor-busqueda-y-estructuras.md)** | Diseño técnico para la entrega final: por qué usar `ProductHashTable`, índices invertidos, operaciones de conjuntos, `Trie`, ranking, recomendaciones y complejidad Big O. |
| **[Requisitos y catálogo de prueba](docs/documentacion/requisitos-y-estado.md)** | Detalle de los 6 productos de prueba y estado actual de `RF01–RF13`, `RNF01–RNF07` y `CP01–CP12`. |
| **[Diagrama PlantUML](docs/arquitectura/Arquitectura_MVP_Mr_Patitas.puml)** | Archivo fuente PlantUML de componentes y despliegue de esta entrega. |

---

## Estructura del repositorio

```text
Mr.Patitas/
├── entrega/                 # Carpeta lista para revisión (iniciar_mr_patitas.bat, MrPatitas.html, LEEME.txt)
├── frontend/                # Código fuente web (React + TypeScript + Vite + Tailwind CSS)
├── docs/
│   ├── documentacion/       # Guías detalladas en Markdown (.md)
│   ├── arquitectura/        # Diagrama PlantUML y referencia de arquitectura
│   ├── fuentes/             # Documentos base de la asignatura
│   └── prompts/             # Documentos técnicos de apoyo
├── backend/                 # Reservado para la entrega final (Fastify + PostgreSQL)
├── tests/                   # Reservado para pruebas automatizadas
├── scripts/                 # Reservado para scripts de apoyo
├── .gitignore
└── README.md
```

---

## Alcance de la Entrega 2 de 3 vs. Entrega final (3 de 3)

- **Incluido en esta entrega (2 de 3):** React, TypeScript, Vite, Tailwind CSS v4, `vite-plugin-singlefile`, 6 productos de prueba con ilustraciones SVG integradas y lanzador `.bat` para Windows.
- **Planeado para la entrega final (3 de 3):** backend en Node.js + Fastify, base de datos PostgreSQL con ORM (Prisma o Drizzle), registro e inicio de sesión, catálogo de al menos 20 artículos (`RF06`), carrito de compras, validación de stock y el [motor de búsqueda con tablas hash](docs/documentacion/motor-busqueda-y-estructuras.md).
