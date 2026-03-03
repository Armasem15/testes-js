let A = 40;
let B = 10;
let C = 20;
let total= 0;
let totald = 0;
let X = 5; 
total = (A + B + C);
totald = (A + B + C)/X;

console.log("Total da soma:", total);
console.log("Total da soma totald é :", totald);
console.log (outraconta());
console.log (media());
console.log (carro());
console.log (delta());
console.log (frutas());

function outraconta() {
    var D = 10;
    var E = 20;
    var F = 30;
    var XX = 100;
    var TOT = D + E + F;
    var resultado = (D + (E + F)) / XX;
    //console.log("Total da soma:", TOT);
    //console.log("Resultado do cálculo:", resultado);
    return TOT;
    return TOTD; 
}






function media(){
    let Nfinal = 0;
    N1 = 30;
    N2 = 90;
    N3 = 100;
    Nfinal = (N1 + N2 + N3) / 3;
    //console.log ("a media final e", Nfinal.toFixed(1));
    return Nfinal.toFixed(1);
}

function carro(){
    let carro1 = "Fusca";
    let carro2 = "Chevette";
    let kmCarro1 = 100;
    let kmCarro2 = 120;
    let precoPorKm = 2.50;
    let totalCarro1 = kmCarro1 * precoPorKm;
    let totalCarro2 = kmCarro2 * precoPorKm;
    console.log("--- Relatório de Gastos ---");
    console.log("O " + carro1 + " andou " + kmCarro1 + "km. Total: R$ " + totalCarro1);
    console.log("O " + carro2 + " andou " + kmCarro2 + "km. Total: R$ " + totalCarro2);
    return
}

function delta(){
    let a = 2;
    let b = 5;
    let c = 8;
    
    let delta = (b * b) - (4 * a * c);
    
    console.log("O valor de delta é: " + delta);
    return
}

function frutas(){
    let frutas=["maçã", "banana", "laranja"];
    console.log(frutas.length);
    console.log(frutas);
    frutas.push("manga");
    console.log(frutas);
    console.log(frutas.length);
    frutas.pop();
    frutas.pop();
    console.log(frutas);
    frutas.pop();
    frutas.pop();
    console.log(frutas);
    frutas.push("uva");
    frutas.push("amora");
    frutas.push("mexericas", "abacate", "abacaxi");
    console.log(frutas);
    console.log("a fruta na posição 1 é", frutas [1]);
    console.log(frutas.length);
    console.log("o total de registros é de", frutas.length+1, "frutas.");
    return
}