// ============================================
// ARCHIVO TEMPORAL DE DESARROLLO
// Fuerza que cualquier pantalla (excepto el Splash)
// redirija siempre a index.html al cargar/recargar.
// 
// ELIMINAR ESTE ARCHIVO Y SU <script> EN CADA HTML
// CUANDO SE TERMINE LA ETAPA DE DESARROLLO.
// ============================================

const paginaActual = window.location.pathname.split('/').pop();

// Lista de pantallas donde SÍ debe forzar el regreso al Splash
const pantallasProtegidas = ['consulta-territorial.html', 'principal.html', 'consultas.html'];

if (pantallasProtegidas.includes(paginaActual)) {
    window.location.href = 'index.html';
}
