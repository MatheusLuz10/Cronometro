function Cronometro () {

    function CriaHoraDosSegundos(segundos) {
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString('pt-br', {
        hour12: false,
        timeZone: 'UTC'
    });
}

const container = document.querySelector('.container');
const relogio = document.querySelector('.relogio');
let segundos = 0;
let time;

document.addEventListener('click', function(e) {
    const el = e.target;

    if (el.classList.contains('zerar')){
    relogio.classList.remove('pausado');
    clearInterval(time);
    relogio.innerHTML = '00:00:00'
    segundos = 0;
    }
    
    if (el.classList.contains('pausar')) {
        clearInterval(time);
    relogio.classList.add('pausado')

    }

    if (el.classList.contains('iniciar')){
          relogio.classList.remove('pausado')
    clearInterval(time);
    criaRelogio();

    }

});


function criaRelogio() {
    time = setInterval(function () {
        segundos++;
        relogio.innerHTML = CriaHoraDosSegundos(segundos);
    }, 1000);
}
}

Cronometro();


