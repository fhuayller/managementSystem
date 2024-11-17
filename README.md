# Backend de Gestión de Proyectos y Tareas

Este backend proporciona una API RESTful que permite:
- **Registrar usuarios** y **autenticarse**.
- **Crear, modificar y listar proyectos**.
- **Crear, modificar y listar tareas**, asociándolas a proyectos específicos.

## Endpoints principales

1. **Usuarios** (`/api/users`):
   - Permite registrar nuevos usuarios e iniciar sesión.
   - **Nota:** Solo los usuarios autenticados pueden crear o modificar proyectos y tareas.

2. **Proyectos** (`/projects`):
   - Permite crear, modificar y obtener información sobre proyectos.

3. **Tareas** (`/task`):
   - Para **crear una tarea**, es obligatorio proporcionar el `id` del proyecto al que pertenece.
   - Para **modificar una tarea**, se debe pasar el `id` de la tarea en cuestión.

## Detalles adicionales
- Para conocer los parámetros esperados por cada endpoint, revisa los modelos en la carpeta `models`.
- Más información sobre las rutas y su configuración está disponible en `index.js`, dentro de la carpeta `routes`.

## Ejecución del proyecto
1. Clona el repositorio:
   ```bash
   git clone https://github.com/fhuayller/managementSystem.git
2. Instala las dependencias:
   ```bash
   npm install
3. Inicia el servidor
   ```bash
   npm run dev

## URL del servidor
*La url del backend estará disponible en:* `http://localhost:3000/api`
