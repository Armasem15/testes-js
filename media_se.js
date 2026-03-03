let aluno = "Robson"
let N1 = 99;
let N2 = 100;
let N3 = 99;
let N4 = 100;
let media = 0;
let result = " ";

media = (N1 + N2 + N3 + N4)/4;
if (media>= 70) {
    result = "arpovado"
} else {
    result = "reprovado"
}

console.log (" O aluno " +aluno+ " tem a media " + media + " esta; " + result);