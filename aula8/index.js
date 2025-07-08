/**
 * Cesar Turmina tem 32 anos. pesa 92kg
 * tem 1.75 de altura e seu IMC é de: 30.04
 * Cesar nasceu em 1993
 */

const nome = 'Cesar';
const sobrenome = 'Turmina';
const idade = 32;
const peso = 92;
const altura = 1.75

let imc; // peso / (altura * altura)
let anoNascimento;

imc = peso / ( altura * altura );
anoNascimento = 2025 - idade;

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso}kg`)
console.log(`tem ${altura} de altura e seu IMC é de: ${Number(imc.toFixed(2))}`)
console.log(`${nome} nasceu em ${anoNascimento}`)

