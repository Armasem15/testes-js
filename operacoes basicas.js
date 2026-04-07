console.log

console.log(adição());
console.log(subtração());
console.log(multiplicação());
console.log(divisao());

// +
function adição(){
let resultMAIS = 0;
N1 = 14;
N2 = 30;
N3 = 9;
resultMAIS = (N1 + N2 + N3);
return resultMAIS.toFixed(1);
}
// -
function subtração(){
    let resultMENOS = 0;
    N4 = 50;
    N5 = 10;
    N6 = 22;
    resultMENOS = (N4 - N5 - N6);
    return resultMENOS.toFixed(1);
}
// *
function multiplicação(){
    let resultVEZES = 0;
    N10 = 14
    N11 = 5
    N12 = 2
    resultVEZES = (N10 * N11 * N12);
    return resultVEZES.toFixed(1);

}
// /
function divisao(){
    let resultDIVIDO = 0;
    N7 = 100
    N8 = 2
    N9 = 40
    resultDIVIDO = (N7 / N8 / N9);
    return resultDIVIDO.toFixed(1);

}