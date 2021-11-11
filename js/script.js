let InputAdultos = document.getElementById("adultos");
let InputCriancas = document.getElementById("criancas");
let InputDuracao = document.getElementById("duracao");

let resultado = document.getElementById("resultado");

function calcular(){
    console.log("Calculando...")
    let adultos = InputAdultos.value;
    let criancas = InputCriancas.value;
    let duracao = InputDuracao.value;

    let qtdTotalCarne = carnePP(duracao) * adultos + (carnePP(duracao) / 2 * criancas);
    let qtdTotalCerveja = cervejaPP(duracao) * adultos;
    let qtdTotalRefri = refriPP(duracao) * adultos + (refriPP(duracao) / 2 * criancas);

    resultado.innerHTML =  `<p>${qtdTotalCarne}g de carne`;
    resultado.innerHTML +=  `<p>${Math.ceil(qtdTotalCerveja / 355)} Latas de cerveja`;
    resultado.innerHTML +=  `<p>${Math.ceil(qtdTotalRefri / 2000)} Pet's de 2Lts de Refrigerante`;

}

function carnePP(duracao){
    if(duracao >= 6){
        return  650;
    }else{
        return 400;
    }
}

function cervejaPP(duracao){
    if(duracao >= 6){
        return  2000;
    }else{
        return 1200;
    }
}

function refriPP(duracao){
    if(duracao >= 6){
        return  1500;
    }else{
        return 1000;
    }
}