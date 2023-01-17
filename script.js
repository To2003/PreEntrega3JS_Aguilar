let calcular = document.querySelector("#calcular");
// // Cantidad de Goles Locales

// let golLocalUno = parseInt(document.querySelector("#localUno"));
// let golLocalDos = parseInt(document.querySelector("#localDos"));
// let golLocalTres = parseInt(document.querySelector("#localTres"));
// let golLocalCuatro = parseInt(document.querySelector("#localCuatro"));
// let golLocalCinco = parseInt(document.querySelector("#localCinco"));
// let golLocalSeis = parseInt(document.querySelector("#localSeis"));

// Cantidad de Goles Visitantes

let golVisitaUno = parseInt(document.querySelector("#visitaUno"));
let golVisitaDos = parseInt(document.querySelector("#visitaDos"));
let golVisitaTres = parseInt(document.querySelector("#visitaTres"));
let golVisitaCuatro = parseInt(document.querySelector("#visitaCuatro"));
let golVisitaCinco = parseInt(document.querySelector("#visitaCinco"));
let golVisitaSeis = parseInt(document.querySelector("#visitaSeis"));

// Puntos de cada Equipo 
let ptsArgentina = 0;
let ptsMexico = 0;
let ptsPolonia = 0;
let ptsArabia = 0;

// Funcion para sumar pts

const puntosArg = (puntosGanados) => {
    return ptsArgentina + puntosGanados
}
const puntosAra = (puntosGanados) => {
    return ptsArabia + puntosGanados
}
const puntosMex = (puntosGanados) => {
    return ptsMexico + puntosGanados
}
const puntosPol = (puntosGanados) => {
    return ptsPolonia + puntosGanados
}

//Partidos Ganados

let pgArgentina = 0;
let pgMexico = 0;
let pgPolonia = 0;
let pgArabia = 0;

const partidosGanadosArg = (partidosGanados) => {
    return pgArgentina + partidosGanados;
}
const partidosGanadosMex = (partidosGanados) => {
    return pgMexico + partidosGanados;
}
const partidosGanadosPol = (partidosGanados) => {
    return pgPolonia + partidosGanados;
}
const partidosGanadosAra = (partidosGanados) => {
    return pgArabia + partidosGanados;
}

// Partidos Perdidos

let ppArgentina = 0;
let ppMexico = 0;
let ppPolonia = 0;
let ppArabia = 0;

const partidosPerdidosArg = (partidosPerdidos) => {
    return ppArgentina + partidosPerdidos;
}
const partidosPerdidosMex = (partidosPerdidos) => {
    return ppMexico + partidosPerdidos;
}
const partidosPerdidosPol = (partidosPerdidos) => {
    return ppPolonia + partidosPerdidos;
}
const partidosPerdidosAra = (partidosPerdidos) => {
    return ppArabia + partidosPerdidos;
}

// Partidos Empatados

let peArgentina = 0;
let peMexico = 0;
let pePolonia = 0;
let peArabia = 0;

const partidosEmpatadosArg = (partidosEmpatados) => {
    return peArgentina + partidosEmpatados;
}
const partidosEmpatadosMex = (partidosEmpatados) => {
    return peMexico + partidosEmpatados;
}
const partidosEmpatadosPol = (partidosEmpatados) => {
    return pePolonia + partidosEmpatados;
}
const partidosEmpatadosAra = (partidosEmpatados) => {
    return peArabia + partidosEmpatados;
}

/*const golFavorArgentina = (golesFavor) => {
    return golFavorArg + golesFavor;
}*/

// Goles a Favor 

let golFavorArg = 0;
let golFavorMex = 0;
let golFavorPol = 0;
let golFavorAra = 0;

// Goles en contra

let golContraArg = 0;
let golContraMex = 0;
let golContraPol = 0;
let golContraAra = 0;

//Innerhtml

let pgArg = document.getElementById("pgArg");
let pgAra = document.getElementById("pgAra");
let pgMex = document.getElementById("pgMex");
let pgPol = document.getElementById("pgPol");

let ppArg = document.getElementById("ppArg");
let ppAra = document.getElementById("ppAra");
let ppMex = document.getElementById("ppMex");
let ppPol = document.getElementById("ppPol");

let peArg = document.getElementById("peArg");
let peAra = document.getElementById("peAra");
let peMex = document.getElementById("peMex");
let pePol = document.getElementById("pePol");

let gfArg = document.getElementById("gfArg");
let gfAra = document.getElementById("gfAra");
let gfMex = document.getElementById("gfMex");
let gfPol = document.getElementById("gfPol");

let gcArg = document.getElementById("gcArg");
let gcAra = document.getElementById("gcAra");
let gcMex = document.getElementById("gcMex");
let gcPol = document.getElementById("gcPol");

let ptsArg = document.getElementById("ptsArg");
let ptsAra = document.getElementById("ptsAra");
let ptsMex = document.getElementById("ptsMex");
let ptsPol = document.getElementById("ptsPol");
// Evento

calcular.addEventListener("click", () =>{

    golLocalUno = document.getElementById("localUno").value;
    golLocalDos = document.querySelector("#localDos").value;
    golLocalTres = document.querySelector("#localTres").value;
    golLocalCuatro = document.querySelector("#localCuatro").value;
    golLocalCinco = document.querySelector("#localCinco").value;
    golLocalSeis = document.querySelector("#localSeis").value;

    golVisitaUno = document.querySelector("#visitaUno").value;
    golVisitaDos = document.querySelector("#visitaDos").value;
    golVisitaTres = document.querySelector("#visitaTres").value;
    golVisitaCuatro = document.querySelector("#visitaCuatro").value;
    golVisitaCinco = document.querySelector("#visitaCinco").value;
    golVisitaSeis = document.querySelector("#visitaSeis").value;
    // Calculos

    // Partido 1

    if (golLocalUno > golVisitaUno) {
        ptsArgentina =+ puntosArg(3);
        pgArgentina =+ partidosGanadosArg(1);
        ppArabia =+ partidosPerdidosAra(1);
    }
    else if (golLocalUno<golVisitaUno) {
        ptsArabia =+ puntosAra(3);
        pgArabia =+ partidosGanadosAra(1);
        ppArgentina =+ partidosPerdidosArg(1);
    }
    else {
        ptsArgentina =+ puntosArg(1);
        ptsArabia =+ puntosAra(1);
        peArgentina =+ partidosEmpatadosArg(1);
        peArabia =+ partidosEmpatadosAra(1);
    }

    //Partido 2

    if (golLocalDos > golVisitaDos) {
        ptsMexico =+ puntosMex(3);
        pgMexico =+ partidosGanadosMex(1);
        ppPolonia =+ partidosPerdidosPol(1);
    }
    else if (golLocalDos<golVisitaDos) {
        ptsPolonia =+ puntosPol(3);
        pgPolonia =+ partidosGanadosPol(1);
        ppMexico =+ partidosPerdidosMex(1);
    }
    else {
        ptsMexico =+ puntosMex(1);
        ptsPolonia =+ puntosPol(1);
        peMexico =+ partidosEmpatadosMex(1);
        pePolonia =+ partidosEmpatadosPol(1);
    }

    //Partido 3

    if (golLocalTres > golVisitaTres) {
        ptsPolonia =+ puntosPol(3);
        pgPolonia =+ partidosGanadosPol(1);
        ppArabia =+ partidosPerdidosAra(1);
    }
    else if (golLocalTres<golVisitaTres) {
        ptsArabia =+ puntosAra(3);
        pgArabia =+ partidosGanadosAra(1);
        ppPolonia =+ partidosPerdidosPol(1);
    }
    else {
        ptsPolonia =+ puntosPol(1);
        ptsArabia =+ puntosAra(1);
        pePolonia =+ partidosEmpatadosPol(1);
        peArabia =+ partidosEmpatadosAra(1);
    }

    //Partido 4

    if (golLocalCuatro > golVisitaCuatro) {
        ptsArgentina =+ puntosArg(3);
        pgArgentina =+ partidosGanadosArg(1);
        ppMexico =+ partidosPerdidosMex(1);
    }
    else if (golLocalCuatro<golVisitaCuatro) {
        ptsMexico =+ puntosMex(3);
        pgMexico =+ partidosGanadosMex(1);
        ppArgentina =+ partidosPerdidosArg(1);
    }
    else {
        ptsArgentina =+ puntosArg(1);
        ptsMexico =+ puntosMex(1);
        peArgentina =+ partidosEmpatadosArg(1);
        peMexico =+ partidosEmpatadosMex(1);
    }

    //Partido 5

    if (golLocalCinco > golVisitaCinco) {
        ptsPolonia =+ puntosPol(3);
        pgPolonia =+ partidosGanadosPol(1);
        ppArgentina =+ partidosPerdidosArg(1);
    }
    else if (golLocalCinco<golVisitaCinco) {
        ptsArgentina =+ puntosArg(3);
        pgArgentina =+ partidosGanadosArg(1);
        ppPolonia =+ partidosPerdidosPol(1);
    }
    else {
        ptsPolonia =+ puntosPol(1);
        ptsArgentina =+ puntosArg(1);
        pePolonia =+ partidosEmpatadosPol(1);
        peArgentina =+ partidosEmpatadosArg(1);
    }

    //Partido 6

    if (golLocalSeis > golVisitaSeis) {
        ptsArabia =+ puntosAra(3);
        pgArabia =+ partidosGanadosAra(1);
        ppMexico =+ partidosPerdidosMex(1);
    }
    else if (golLocalSeis<golVisitaSeis) {
        ptsMexico =+ puntosMex(3);
        pgMexico =+ partidosGanadosMex(1);
        ppArabia =+ partidosPerdidosAra(1);
    }
    else {
        ptsArabia =+ puntosAra(1);
        ptsMexico =+ puntosMex(1);
        peMexico =+ partidosEmpatadosAra(1);
        peArabia =+ partidosEmpatadosAra(1);
    }

    // Goles a favor y en contra
    golFavorArg = parseFloat(golLocalUno) + parseFloat(golLocalCuatro) + parseFloat(golVisitaCinco);
    golFavorMex = parseFloat(golLocalDos) + parseFloat(golVisitaCuatro) + parseFloat(golVisitaSeis);
    golFavorPol = parseFloat(golVisitaDos) + parseFloat(golLocalTres) + parseFloat(golLocalCinco);
    golFavorAra = parseFloat(golVisitaUno) + parseFloat(golVisitaTres) + parseFloat(golLocalSeis);

    golContraArg =+ parseFloat(golVisitaUno) + parseFloat(golVisitaCuatro) + parseFloat(golLocalCinco);
    golContraMex =+ parseFloat(golVisitaDos) + parseFloat(golLocalCuatro) + parseFloat(golLocalSeis);
    golContraPol =+ parseFloat(golLocalDos) + parseFloat(golVisitaTres) + parseFloat(golVisitaCinco);
    golContraAra =+ parseFloat(golLocalUno) + parseFloat(golLocalTres) + parseFloat(golVisitaSeis);

    console.log ("Arabia: " + ptsArabia);
    console.log ("Argentina: " + ptsArgentina);
    console.log ("Mexico: "+ ptsMexico);
    console.log ("Polonia: "+ ptsPolonia);

    console.log(pgArgentina);
    console.log(golFavorArg);

    // InnerHTML Tabla de Posiciones

    pgArg.innerHTML = pgArgentina;
    pgAra.innerHTML = pgArabia;
    pgMex.innerHTML = pgMexico;
    pgPol.innerHTML = pgPolonia;

    ppArg.innerHTML = ppArgentina;
    ppAra.innerHTML = ppArabia;
    ppMex.innerHTML = ppMexico;
    ppPol.innerHTML = ppPolonia;

    peArg.innerHTML = peArgentina;
    peAra.innerHTML = peArabia;
    peMex.innerHTML = peMexico;
    pePol.innerHTML = pePolonia;

    gfArg.innerHTML = golFavorArg;
    gfAra.innerHTML = golFavorAra;
    gfMex.innerHTML = golFavorMex;
    gfPol.innerHTML = golFavorPol;

    gcArg.innerHTML = golContraArg;
    gcAra.innerHTML = golContraAra;
    gcMex.innerHTML = golContraMex;
    gcPol.innerHTML = golContraPol;

    ptsArg.innerHTML = ptsArgentina;
    ptsAra.innerHTML = ptsArabia;
    ptsMex.innerHTML = ptsMexico;
    ptsPol.innerHTML = ptsPolonia;

//    let tabla = [];

    
});

