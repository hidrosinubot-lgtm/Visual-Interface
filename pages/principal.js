// Captura departamento y municipio seleccionados en la pantalla anterior
const params = new URLSearchParams(window.location.search);
const departamentoActual = params.get('departamento');
const municipioActual = params.get('municipio');

// Acción del botón "Ir a Consulta" → redirige a la pantalla de consultas
const btnConsulta = document.querySelector('.btn-consulta');
if (btnConsulta) {
    btnConsulta.addEventListener('click', () => {
        console.log('Ir a Consulta:', departamentoActual, municipioActual);
        window.location.href = 'consultas.html';
    });
}
