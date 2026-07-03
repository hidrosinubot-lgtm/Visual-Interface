// ===== DATOS =====
const datos = {
    "Atlántico": ["Sabanalarga", "Campo de la Cruz", "Santa Lucía", "Suan"],
    "Bolívar": ["Magangué", "Mompox", "Pinillos", "San Cristóbal"],
    "Cesar": ["Gamarra", "La Gloria", "Chimichagua", "Tamalameque"],
    "Córdoba": ["Montería", "Lorica", "Tierralta", "San Pelayo", "Cereté"],
    "La Guajira": ["Riohacha", "Distracción", "Fonseca", "Barrancas"],
    "Magdalena": ["El Banco", "Plato", "Santa Ana", "Tenerife"],
    "Sucre": ["Majagual", "Guaranda", "San Marcos", "Sucre"]
};

// ===== REFERENCIAS DOM =====
const departamentoSelector = document.getElementById("departamentoSelector");
const listaDepartamentos = document.getElementById("listaDepartamentos");
const modalDepartamentos = document.getElementById("modalDepartamentos");

const selectorMunicipio = document.getElementById("municipioSelector");
const modalMunicipios = document.getElementById("modalMunicipios");
const listaMunicipios = document.getElementById("listaMunicipios");

const btnIngresar = document.getElementById("btnIngresar");

let municipioSeleccionado = "";
let departamentoSeleccionado = "";

// ===== FUNCIÓN PARA ACTUALIZAR BOTÓN =====
function actualizarBoton() {
    if (departamentoSeleccionado && municipioSeleccionado) {
        btnIngresar.classList.add("activo");
    } else {
        btnIngresar.classList.remove("activo");
    }
}

// ===== ABRIR MODAL DEPARTAMENTOS =====
departamentoSelector.addEventListener("click", () => {
    listaDepartamentos.innerHTML = "";

    Object.keys(datos).forEach(departamento => {
        const item = document.createElement("div");
        item.className = "option";
        if (departamento === departamentoSeleccionado) {
            item.classList.add("selected");
        }
        item.innerHTML = departamento;

        item.onclick = () => {
            departamentoSeleccionado = departamento;
            municipioSeleccionado = "";
            departamentoSelector.innerHTML = departamento;
            selectorMunicipio.innerHTML = "Seleccione un municipio";
            modalDepartamentos.style.display = "none";
            departamentoSelector.classList.remove("abierto");
            actualizarBoton();
        };

        listaDepartamentos.appendChild(item);
    });

    departamentoSelector.classList.add("abierto");
    modalDepartamentos.style.display = "block";
});

// ===== CERRAR MODAL DEPARTAMENTOS (clic fuera) =====
modalDepartamentos.addEventListener("click", (e) => {
    if (e.target === modalDepartamentos) {
        modalDepartamentos.style.display = "none";
        departamentoSelector.classList.remove("abierto");
    }
});

// ===== ABRIR MODAL MUNICIPIOS =====
selectorMunicipio.addEventListener("click", () => {
    if (!departamentoSeleccionado) {
        alert("Primero seleccione un departamento");
        return;
    }

    listaMunicipios.innerHTML = "";

    datos[departamentoSeleccionado].forEach(municipio => {
        const item = document.createElement("div");
        item.className = "option";
        if (municipio === municipioSeleccionado) {
            item.classList.add("selected");
        }
        item.innerHTML = municipio;

        item.onclick = () => {
            municipioSeleccionado = municipio;
            selectorMunicipio.innerHTML = municipio;
            modalMunicipios.style.display = "none";
            selectorMunicipio.classList.remove("abierto");
            actualizarBoton();
        };

        listaMunicipios.appendChild(item);
    });

    selectorMunicipio.classList.add("abierto");
    modalMunicipios.style.display = "block";
});

// ===== CERRAR MODAL MUNICIPIOS (clic fuera) =====
modalMunicipios.addEventListener("click", (e) => {
    if (e.target === modalMunicipios) {
        modalMunicipios.style.display = "none";
        selectorMunicipio.classList.remove("abierto");
    }
});

// ===== CONSULTAR (con transición hacia principal.html) =====
function consultar() {
    if (!departamentoSeleccionado || !municipioSeleccionado) {
        return;
    }

    const phone = document.querySelector('.phone');
    phone.classList.add('fade-out');

    setTimeout(() => {
        window.location.href = `principal.html?departamento=${encodeURIComponent(departamentoSeleccionado)}&municipio=${encodeURIComponent(municipioSeleccionado)}`;
    }, 300);
}
