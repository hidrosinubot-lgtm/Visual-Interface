setTimeout(() => {
    const splash = document.querySelector('.splash-screen');
    splash.classList.add('fade-out');

    // Espera a que termine la animación de fundido (0.6s) antes de redirigir
    setTimeout(() => {
        window.location.href = "consulta-territorial.html";
    }, 600);
}, 3500);
