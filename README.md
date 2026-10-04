# Summit

Gestor de tareas y proyectos basado en el método GTD (Getting Things Done). Aplicación web instalable (PWA) con cuentas individuales, proyectos compartidos y atajos de iPhone.

- **Frontend:** HTML, CSS y JavaScript sin dependencias de compilación. Se publica tal cual en GitHub Pages.
- **Backend:** Supabase (Postgres, autenticación por correo y contraseña, seguridad por fila).
- **Versión:** 1.2.2

## Estructura

| Ruta | Contenido |
| --- | --- |
| `index.html` | Estructura de la app y carga de scripts |
| `styles.css` | Estilos (paleta salvia, modo claro y oscuro) |
| `app.js` | Lógica de la app, sincronización y cuentas |
| `config.js` | **Único archivo a editar:** URL y clave pública de Supabase |
| `manifest.webmanifest`, `sw.js` | Instalación y funcionamiento sin conexión |
| `*.png`, `logo.svg`, `*.woff2`, `supabase.min.js` | Iconos, tipografías y cliente de Supabase, todos en la raíz (sin carpetas, para que la subida desde el navegador no falle) |
| `supabase/functions/summit-mcp/index.ts` | Conector de Claude: servidor MCP que se publica como Edge Function |
| `supabase/schema.sql` | Esquema `summit`: tablas, seguridad, proyectos compartidos y funciones de los atajos |

## Base de datos en su propio esquema

Todo vive en el esquema `summit`, no en `public`, para que Summit pueda compartir un proyecto de Supabase con otra app sin tocar sus tablas ni sus usuarios. El esquema debe añadirse en **Project Settings → Data API → Exposed schemas**. El perfil de Summit se crea en el primer acceso (`summit.iniciar_cuenta`), sin disparadores en `auth.users`.

## Datos y privacidad

Cada persona solo ve sus propios datos. Las políticas de seguridad por fila de Supabase lo garantizan en la base de datos, no solo en la app. La única excepción son los proyectos compartidos: sus tareas las ven todos sus miembros.

## Funciones de la base de datos

| Función | Uso |
| --- | --- |
| `compartir_proyecto`, `dejar_de_compartir`, `unirse_a_proyecto`, `abandonar_proyecto`, `quitar_miembro` | Proyectos compartidos por código |
| `generar_codigo_atajo`, `revocar_codigo_atajo` | Código personal para los atajos |
| `public.summit_capturar_tarea(p_codigo, p_texto)` | Atajo de captura (sin sesión) |
| `public.summit_resumen(p_codigo)` | Resumen diario de tareas y fechas límite |
| `iniciar_cuenta(p_name)` | Crea el perfil, las áreas y el proyecto de bienvenida en el primer acceso |

## Conector de Claude (MCP)

La Edge Function `summit-mcp` implementa el protocolo MCP (Streamable HTTP, respuestas JSON sin estado). Se añade en Claude como conector personalizado con la URL `https://<proyecto>.supabase.co/functions/v1/summit-mcp?key=CLD-…`. La clave también se acepta como `Authorization: Bearer CLD-…`. Requiere desactivar **Verify JWT** en la función.

Toda la lógica vive en `public.summit_claude(p_key, p_tool, p_args)`, que aplica las mismas reglas de privacidad que la app. Herramientas: `resumen`, `listar_tareas`, `listar_proyectos`, `ver_proyecto`, `estadisticas`, `revision_semanal`, `crear_tarea`, `actualizar_tarea`, `completar_tarea`, `eliminar_tarea`, `crear_proyecto`, `actualizar_proyecto`, `compartir_proyecto`.

## Actualizar

1. Sube los archivos nuevos a GitHub, sin tocar tu `config.js`.
2. Si la versión incluye cambios de base de datos, ejecuta el nuevo `supabase/schema.sql`. Se puede ejecutar varias veces sin perder datos.
3. Cambia el número de versión en `sw.js` y en los `?v=` de `index.html` para que los móviles descarguen la versión nueva.
