console.log("Estoy vivo");  // Estoy vivo

const $ = valorId => document.getElementById(valorId);

const $form = $('form')
const $opcionesJugadores = $('opcionesJugadores');
const $jugar = $('btnJugar');
const $jugar1V1 = $('btnJugar1V1');
const $dosJugadores = $('dosJugadores');
const $unJugadores = $('unJugador');
const $pcjuega = $('pcjuega');
const $player = $('player');
const $player1 = $('player1');
const $player2 = $('player2');
const $resultado = $('resultados');
const $mostrar = $('mostrar');

const octenerValores = () => {

    if ($opcionesJugadores.value === 'dosJugador') {
        console.log("2 PLAYERS");
        //$dosJugadores.style = 'container';
        $dosJugadores.setAttribute('class', 'container');
        $unJugadores?.setAttribute('class', 'd-none');
        $player1.focus();
    } else if ($opcionesJugadores.value === 'unoJugadores') {
        console.log(" You vs PC");
        //$unJugadores.style = 'container';
        $unJugadores.setAttribute('class', 'container');
        $dosJugadores?.setAttribute('class', 'd-none');
        $player1.focus();

    } else {
        console.log("error");
    }

}

$player.addEventListener('change', () => {
    $player.value = $player.value;
    console.log($player.value);

}
);

$player1.addEventListener('change', () => {
    $player1.value = $player1.value;

    console.log($player1);
    // $player1[1].innerHTML = 'piedra';

    $player1[1].innerHTML = '*******';
    $player1[2].innerHTML = '*******';
    $player1[3].innerHTML = '*******';

    $player1.setAttribute('disabled', 'true'); // deshabilitar el input
    $player2.focus();


}
);

$player2.addEventListener('change', () => {
    $player2.value = $player2.value;

    $player2[1].innerHTML = '*******';
    $player2[2].innerHTML = '*******';
    $player2[3].innerHTML = '*******';

    $player2.setAttribute('disabled', 'true'); // deshabilitar el input
    $jugar1V1.focus();

}
);

const valoresIniciales = () => {
    $player1.removeAttribute('disabled'); // deshabilitar el input
        $player2.removeAttribute('disabled'); // deshabilitar el input
        if(!$player1.disabled && !$player2.disabled){
            $player1[0].innerHTML = '';
            $player1[1].innerHTML = 'piedra';
            $player1[2].innerHTML = 'papel';
            $player1[3].innerHTML = 'tijeras';
    
            $player2[0].innerHTML = '';
            $player2[1].innerHTML = 'piedra';
            $player2[2].innerHTML = 'papel';
            $player2[3].innerHTML = 'tijeras';
            console.log('vine aqui disablet')
        } else {
            console.log('no se puede jugar');
        }
}


const pc = () => {
    const selecionPc = Math.floor(Math.random() * (1 - 0 + 2) );
    const opcionesPC = ['piedra', 'papel', 'tijera'];
    const Pcjueha = opcionesPC[selecionPc];
    return Pcjueha;

}

const jugar = (e) => {
    e.preventDefault();

    const jugadorJuega = $player.value;
    //console.log(jugadorJuega);
    const Pcjueha = pc();
    $pcjuega.innerHTML = Pcjueha;
    const resultado = comparar(jugadorJuega, Pcjueha);
    //console.log(resultado);
    //console.log(Pcjueha);
    if (resultado === 'Ganaste') {
        $mostrar.setAttribute('class', 'alert alert-success');
        $resultado.innerHTML = resultado;
    } else if (resultado === 'Perdiste') {
        $mostrar.setAttribute('class', 'alert alert-danger');
        $resultado.innerHTML = resultado;
    } else {
        $mostrar.setAttribute('class', 'alert alert-warning');
        $resultado.innerHTML = resultado;
    }

    $player.focus();

}

const comparar = (jugadorJuega, Pcjueha) => {
    if (jugadorJuega === Pcjueha) {
        return 'Empate';
    } else if (jugadorJuega === 'piedra' && Pcjueha === 'tijera') {
        return 'Gana';
    } else if (jugadorJuega === 'papel' && Pcjueha === 'piedra') {
        return 'Gana';
    } else if (jugadorJuega === 'tijera' && Pcjueha === 'papel') {
        return 'Gana';
    } else {
        return 'Perdiste';
    }
}

const resultadoDefinitivo = (jugadorJuega1, jugadorJuega2) => {
    const resultado = comparar(jugadorJuega1, jugadorJuega2);
    //console.log(resultado);
    //console.log(Pcjueha);
    if (resultado === 'Gana') {
        $mostrar.setAttribute('class', 'alert alert-success');
        $resultado.innerHTML = resultado;
        const hUno = document.createElement('p');
        hUno.innerText = 'Jugador 1: ' + jugadorJuega1;
        $resultado.appendChild(hUno);

    } else if (resultado === 'Perdiste') {
        $mostrar.setAttribute('class', 'alert alert-primary');
        $resultado.innerHTML = resultado;
        const gdos = document.createElement('p');
        gdos.innerText = 'Jugador 1: ' + jugadorJuega1 + " , " + 'Ganador: Jugador 2 :' + jugadorJuega2;
        $resultado.appendChild(gdos);

    } else {
        $mostrar.setAttribute('class', 'alert alert-warning');
        $resultado.innerHTML = resultado;
        const empate = document.createElement('p');
        empate.innerText = 'Jugador 1: ' + jugadorJuega1 + " , " + 'Jugador 2 :' + jugadorJuega2;
        $resultado.appendChild(empate);

    }
     valoresIniciales();
}



const jugar1V1 = (e) => {
    e.preventDefault();

    const jugadorJuega1 = $player1.value;
    const jugadorJuega2 = $player2.value;

    console.log(!!$player1.value);
    if (!$player1.value) {
        alert('No tienes ningun valor');
    } else {
        resultadoDefinitivo(jugadorJuega1, jugadorJuega2);
    }

    $player1.focus();
    $player1.value = '';
    $player2.value = '';


}



$opcionesJugadores.addEventListener('change', octenerValores);
$jugar.addEventListener('click', jugar);
$jugar1V1.addEventListener('click', jugar1V1);


