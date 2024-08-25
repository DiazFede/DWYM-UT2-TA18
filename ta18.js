const listaPersonas = [
    "Ana Pérez",
    "Juan García",
    "María Rodríguez",
    "Luis Gómez",
    "Carlos Martínez"
];

const ul = document.getElementById("lista-personas");
const inputBusqueda = document.getElementById("busqueda");

ul.addEventListener('render', function() {
    ul.innerHTML = listaPersonas.map(persona => `<li>${persona}</li>`).join('');
});

inputBusqueda.addEventListener("input", function(event) {
    const textoBusqueda = event.target.value.toLowerCase();
    const items = ul.getElementsByTagName('li');

    Array.from(items).forEach(item => {
        const textoItem = item.textContent.toLowerCase();
        if (textoItem.includes(textoBusqueda)) {
            item.style.display = '';
        } else {
            item.style.display = 'none';
        }
    });
});

const renderEvent = new Event('render');
ul.dispatchEvent(renderEvent);
