let carros_estacionados = 0;

const limitemaximo = 7;
console.log("--- Iniciando verificação de vagas ---");

for (let vaga = 1; vaga <= 10; vaga++) {

    // Verifica se a vaga está interditada

    if (vaga === 4 || vaga === 7) {
        console.log(`Vaga ${vaga}: [INTERDITADA] - pulando...`);
        continue; 
    }
    if (vaga === 3 || vaga === 7) {
        console.log(`Vaga ${vaga}: [INTERDITADA] - pulando...`);
        continue; 
    }
    carros_estacionados++;
    console.log(`Vaga ${vaga}: [LIVRE] -> Carro estacionado! (Total: ${carros_estacionados})`);
    if (carros_estacionados === limitemaximo) {
        console.log("--- Limite atingido! Fechar portão... ---");
        break; 
    }
}
console.log("relatorio final: operacao de entrada");
