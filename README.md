# ReactReduxProject

>Proyecto final de Desarrollo Web Cliente (2DAW) por Ethan Hildick  

## Introducción
---
### Motivación

Queria hacer algo simple que ya controlaba un poco para poder hacerlo mejor.

### Objetivos propuestos

- Usar Redux correctamente
- Usar React Router
- Diseño visual agradable

## Explicación en profundidad de la aplicación
---

Al entrar por primera vez dispará el evento de RESET, que cargará los productos predeterminados y los guardará en localStorage via middleware.  
Se tendrá la lista de productos a la izquierda y los detalles a la derecha, al seleccionar un producto en la lista se mostrará en los detalles.  

En los detalles se puede editar el nombre y descripción del producto e actualizarlo con el botón Update. También se puede borrar el producto con el botón Delete (clases aplicadas via React Context).  

Arriba se tiene 3 botones, el botón Reset recargará los productos predeterminados, el botón List/Details nos enviará a la página principal ('/') y el botón Create nos enviará a la pantalla de crear un producto ('/create').  

En la pantalla de crear tendremos un formulario con el nombre y descripción del producto con valores predeterminados, el producto se creará al pulsar el botón de Create abajo e usará los valores en el formulario. El botón estará deshabilitado si uno de los campos está vacío (el campo se pondrá en rojo también).

## Conclusiones
---
### Objetivos alcanzados

- Usa varios componentes e acciones con Redux
- Usa React Router para pasar entre las dos páginas
- Me gusta la parte visual

### Posibles mejoras futuras

- Más campos interesantes en los objetos
- Mejor uso de React Context
- Mejor uso de la restricción de propiedades