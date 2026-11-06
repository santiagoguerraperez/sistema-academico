# Sistema academico

Aplicacion de clase construida con React y Vite para practicar componentes, props, estado y renderizado de listas.

## Ejecutar localmente

```bash
npm install
npm run dev
```

Abre la URL local que muestra Vite en la terminal.

## Estructura de src

- `App.jsx` mantiene el estado de estudiantes, controla el campo del nombre y compone la tabla.
- `components/Boton.jsx` muestra un boton reutilizable y recibe `children` y `alHacerClic`.
- `components/FilaEstudiante.jsx` presenta nombre, nota y estado de un estudiante.
- `estaAprobado.js` contiene la regla de negocio de aprobacion (nota igual o superior a 3.0), separada de la interfaz.

Al agregar un nombre, React actualiza la lista con un arreglo nuevo y cada fila usa el id del estudiante como `key`.
