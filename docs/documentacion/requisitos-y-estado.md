[← Volver al README principal](../../README.md)

# Catálogo de Prueba y Estado de Requisitos

Referencia de requisitos del proyecto: [`docs/fuentes/EntregaMrPatitas.docx`](../fuentes/EntregaMrPatitas.docx). Se mantienen todos los requisitos funcionales (`RF01–RF13`), no funcionales (`RNF01–RNF07`) y casos de prueba (`CP01–CP12`), indicando su estado real en la **Entrega 2 de 3**.

---

## 1. Productos de prueba incluidos en la Entrega 2 de 3

En este avance se incluyen **6 productos de ejemplo** (3 para perros y 3 para gatos), tomados como referencia de la tabla de ejemplos de `EntregaMrPatitas.docx` (pág. 7):

| ID | Producto (prueba) | Especie | Categoría | Precio prueba (COP) | Stock prueba |
| :--- | :--- | :---: | :--- | :---: | :---: |
| `DEMO-01` | Alimento seco para gato | Gato | Alimentación | $ 48.900 | 14 |
| `DEMO-02` | Snacks naturales para perro | Perro | Alimentación | $ 18.500 | 22 |
| `DEMO-03` | Correa resistente para perro | Perro | Paseo | $ 34.000 | 9 |
| `DEMO-04` | Cama acolchada para perro | Perro | Descanso | $ 115.000 | 6 |
| `DEMO-05` | Rascador compacto para gato | Gato | Juguetes | $ 79.900 | 8 |
| `DEMO-06` | Cepillo suave para gato | Gato | Higiene | $ 26.500 | 17 |

> **Nota:** Los precios, descripciones y existencias son **datos de prueba** y **no representan inventario comercial real**. Tener 6 productos todavía no cumple el mínimo de 20 artículos pedido en `RF06`, el cual se completará en la entrega final (3 de 3).

---

## 2. Requisitos funcionales (`RF01–RF13`)

| Código | Requisito original | Estado (Entrega 2 de 3) | Observación |
| :--- | :--- | :--- | :--- |
| **RF01** | El cliente debe poder registrarse para crear una cuenta. | Pendiente (Entrega 3) | Se integra junto con el backend y autenticación. |
| **RF02** | El sistema debe permitir iniciar y cerrar sesión. | Pendiente (Entrega 3) | Se integra con el manejo de sesiones en backend. |
| **RF03** | Solo un cliente autenticado puede iniciar el proceso de pedido. | Pendiente (Entrega 3) | Depende del módulo de autenticación y pedidos. |
| **RF04** | El cliente debe poder buscar artículos por nombre. | Pendiente (Entrega 3) | Se implementará con el motor de búsqueda. |
| **RF05** | El cliente debe poder filtrar productos por características definidas. | Pendiente (Entrega 3) | Se implementará con búsqueda avanzada e índices. |
| **RF06** | El catálogo debe mostrar al menos 20 artículos. | Implementado parcialmente | Se muestran 6 productos de prueba; falta ampliarlo a mínimo 20 artículos. |
| **RF07** | Cada artículo debe mostrar imagen, nombre, características, precio y stock. | Implementado parcialmente | Implementado en las tarjetas con datos de prueba; pendiente conectar a base de datos con ≥ 20 artículos. |
| **RF08** | Al seleccionar la imagen o detalle se debe ampliar la descripción del producto. | Pendiente (Entrega 3) | Se añadirá la vista o ventana de detalle ampliado. |
| **RF09** | El cliente debe seleccionar un artículo e indicar la cantidad. | Pendiente (Entrega 3) | Se integra junto con el carrito de compras. |
| **RF10** | El sistema debe validar que la cantidad solicitada no supere el stock. | Pendiente (Entrega 3) | Requiere validación de existencias en servidor. |
| **RF11** | El carrito debe mostrar artículos, cantidades, precios y subtotales. | Pendiente (Entrega 3) | Corresponde al módulo de carrito. |
| **RF12** | El carrito debe calcular y actualizar el total de los artículos. | Pendiente (Entrega 3) | Corresponde al módulo de carrito. |
| **RF13** | El cliente debe poder modificar cantidades o retirar artículos del carrito. | Pendiente (Entrega 3) | Corresponde al módulo de carrito. |

---

## 3. Requisitos no funcionales (`RNF01–RNF07`)

| Código | Requisito original | Estado (Entrega 2 de 3) | Observación |
| :--- | :--- | :--- | :--- |
| **RNF01** | La interfaz debe ser intuitiva y consistente. | Implementado y verificado | Diseño uniforme con paleta y tipografía centralizadas en `index.css`. |
| **RNF02** | El catálogo debe adaptarse a dispositivos móviles y de escritorio. | Implementado y verificado | Diseño adaptable con Tailwind CSS probado en escritorio y móvil. |
| **RNF03** | Las imágenes deben tener calidad y texto alternativo apropiados. | Implementado y verificado | 6 ilustraciones SVG integradas con atributos `alt` descriptivos. |
| **RNF04** | Las búsquedas y cálculos deben responder de manera clara y oportuna. | Pendiente (Entrega 3) | Se evaluará al implementar el motor de búsqueda y el carrito. |
| **RNF05** | El código debe estar organizado y ser mantenible. | Implementado y verificado | Separado en `components/`, `data/`, `types/`, `assets/images/` e `index.css`. |
| **RNF06** | La autenticación debe gestionarse de forma segura si se implementa en producción. | Pendiente (Entrega 3) | Se cubrirá en el backend con contraseñas cifradas y sesiones seguras. |
| **RNF07** | Los mensajes de error y confirmación deben ser comprensibles. | Implementado parcialmente | Mensajes claros en `iniciar_mr_patitas.bat` y avisos de datos de prueba; faltan los mensajes de login, stock y carrito. |

---

## 4. Casos de prueba (`CP01–CP12`)

| ID | Prueba original | Estado (Entrega 2 de 3) | Observación |
| :--- | :--- | :--- | :--- |
| **CP01** | Registro de cliente con datos válidos. | Pendiente (Entrega 3) | Depende de RF01. |
| **CP02** | Inicio de sesión con credenciales válidas. | Pendiente (Entrega 3) | Depende de RF02. |
| **CP03** | Intento de pedido sin iniciar sesión. | Pendiente (Entrega 3) | Depende de RF03. |
| **CP04** | Búsqueda básica por nombre completo o parcial. | Pendiente (Entrega 3) | Depende de RF04. |
| **CP05** | Búsqueda avanzada combinando filtros. | Pendiente (Entrega 3) | Depende de RF05. |
| **CP06** | Revisión del catálogo (mínimo 20 artículos). | Implementado parcialmente | Se visualizan 6 artículos de prueba; falta ampliar a ≥ 20 para completarlo. |
| **CP07** | Clic en imagen o detalle del producto. | Pendiente (Entrega 3) | Depende de RF08. |
| **CP08** | Selección de artículo y cantidad válida. | Pendiente (Entrega 3) | Depende de RF09. |
| **CP09** | Solicitud de cantidad superior al stock. | Pendiente (Entrega 3) | Depende de RF10. |
| **CP10** | Revisión del carrito. | Pendiente (Entrega 3) | Depende de RF11 y RF12. |
| **CP11** | Cambio de cantidad o retiro de artículo. | Pendiente (Entrega 3) | Depende de RF13. |
| **CP12** | Visualización en móvil y escritorio. | Implementado y verificado | Probado abriendo `entrega/MrPatitas.html` directamente en navegador. |

---

**Ver también:** [Arquitectura y funcionamiento](./arquitectura.md) · [Guía de desarrollo](./guia-desarrollo.md) · [Motor de búsqueda y tablas hash](./motor-busqueda-y-estructuras.md)
