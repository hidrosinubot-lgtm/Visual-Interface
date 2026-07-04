// Redirección según el tipo de pronóstico consultado
document.querySelectorAll('.btn-consultar').forEach(btn => {
    btn.addEventListener('click', () => {
        const tipo = btn.dataset.tipo; // "hoy", "manana" o "semana"
        console.log('Consultar pronóstico:', tipo);
        // window.location.href = `pronostico-${tipo}.html`;
    });
});
