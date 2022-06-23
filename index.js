let quien = ['Mi mamá', 'Mi papá', 'El perro', 'Mi primo', 'Mi perrita'];
let que = ['se enfermó', 'se cayó', 'se torció el tobillo', 'me necesita', 'no ha comido', 'tiene covid'];
let cuando = ['en mi casa', 'en el parque', 'en el desayuno', 'en una reunion', 'mañana'];

function generador() {
    genQuien = Math.floor(Math.random() * quien.length);
    genQue = Math.floor(Math.random() * que.length);
    genCuando = Math.floor(Math.random() * cuando.length);

    return quien[genQuien] + " " + que[genQue] + " " + cuando[genCuando];
}

function onLoad() {
    let excuses = document.getElementById('excusas');
    excuses.innerHTML = generador(quien,que,cuando);
}

window.onload = onLoad;

