function calcularmedia(numeros) { // CRIA A FUNCTION E PASSA COMO PARAMETRO VARIAVEL numeros
    let soma = 0; // ZERA A VARIAVEL
    let totalNumeros = numeros.length; // 3 NUMEROS 10,20,30
    for (let i = 0; i < totalNumeros; i++) { // INICIA VARIAVEL DO ZERO E PERGUNTA SE É MENOR QUE 3 (numeros.lenght)
        soma += numeros[i]; //S SOMA RECEBE VARIAVEL NUMEROS SOMANDO AS POSIÇOOES [i] SENDO QUE O FOR SÓ VAI ATÉ 3.
        console.log(i); // SO PARA MOSTRAR NA TELA AS POSIÇOES DE I (OU SEJA DO LAÇO FOR)
        console.log(numeros); // SO PAR MOSTRAR O QUE ESTA ARMAZENADO
    }
    return soma / totalNumeros;
}
console.log(calcularmedia([10, 20, 30])); // SAIDA: 20