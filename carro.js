// Definição dos carros
let carro1 = "Fusca";
let carro2 = "Chevette";

// Quantos km cada um andou
let kmCarro1 = 100;
let kmCarro2 = 120;

// Definição do preço por km (Exemplo: R$ 2,50)
let precoPorKm = 2.50;

// Cálculos
let totalCarro1 = kmCarro1 * precoPorKm;
let totalCarro2 = kmCarro2 * precoPorKm;

// Exibindo os resultados no console
console.log("--- Relatório de Gastos ---");
console.log("O " + carro1 + " andou " + kmCarro1 + "km. Total: R$ " + totalCarro1);
console.log("O " + carro2 + " andou " + kmCarro2 + "km. Total: R$ " + totalCarro2);