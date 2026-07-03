// Captura departamento y municipio seleccionados en la pantalla anterior
// (disponibles como variables, sin mostrarse en pantalla)
const params = new URLSearchParams(window.location.search);
const departamentoActual = params.get('departamento');
const municipioActual = params.get('municipio');
