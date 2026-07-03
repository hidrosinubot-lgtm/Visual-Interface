// Verifica que el usuario haya pasado por Consulta Territorial
// antes de entrar a Principal. Si no, lo regresa al flujo correcto.
function verificarFlujo() {
    const vieneDeConsulta = sessionStorage.getItem('flujoConsulta');

    if (vieneDeConsulta !== 'true') {
        window.location.href = 'consulta-territorial.html';
    } else {
        // Se consume la bandera: si el usuario recarga después,
        // ya no estará, y lo regresará a Consulta Territorial.
        sessionStorage.removeItem('flujoConsulta');
    }
}
