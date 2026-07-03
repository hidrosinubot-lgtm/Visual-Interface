// Captura departamento y municipio seleccionados en la pantalla anterior
const params = new URLSearchParams(window.location.search);
const departamentoActual = params.get('departamento');
const municipioActual = params.get('municipio');

// Acción del botón "Ir a Consulta" (ajusta el destino cuando definas esa pantalla)
const btnConsulta = document.querySelector('.btn-consulta');
if (btnConsulta) {
    btnConsulta.addEventListener('click', () => {
        console.log('Ir a Consulta:', departamentoActual, municipioActual);
        // window.location.href = "siguiente-pantalla.html";
    });
}
