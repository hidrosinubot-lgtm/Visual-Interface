// ---- TEXTO ROTATIVO (APARECE / DESAPARECE, SIN DESPLAZAMIENTO) ----
const frases = [
    "Procesando Solicitud",
    "Analizando El Clima",
    "Analizando Estado De Los Ríos",
    "Compilando La Información",
    "Interpretando Con IA",
    "Organizando Resultados"
];

const TIEMPO_VISIBLE = 2200; // cuánto dura cada frase en pantalla (ms)
const TIEMPO_TRANSICION = 300; // duración del desvanecido (ms)

let idx = 0;
const el = document.getElementById('statusText');

function ciclo() {
    setTimeout(() => {
        el.classList.add('oculto'); // desaparece

        setTimeout(() => {
            idx++;

            if (idx >= frases.length) {
                // Ya se mostraron todas las frases: pasar a la siguiente pantalla
                window.location.href = 'resultado.html';
                return;
            }

            el.textContent = frases[idx];
            el.classList.remove('oculto'); // aparece
            ciclo();
        }, TIEMPO_TRANSICION);
    }, TIEMPO_VISIBLE);
}

ciclo();
