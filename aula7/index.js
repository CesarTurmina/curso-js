/**
 * Não podemos criar constantes com palavras reservadas
 * Constantes precisam ter nomes significativos
 * Não pode começar o nome de uma const com numero
 * let 1nome: ERRO
 * Não pode conter espaços ou traços
 * utilizamos camelCase
 * nomeCompletoDoCliente
 * js é Case-sensitive (maiusculas e minusculas tem diferença)
 * não pode modificar o valor de uma constante
 * não utilize var, utilize const
 */

const primeiroNumero = '5';
const segundoNumero = 10;
const resultado = primeiroNumero * segundoNumero;
let resultadoTriplicado = resultado * 3;
resultadoTriplicado = resultadoTriplicado + 5;

console.log(resultadoTriplicado);

console.log(typeof(primeiroNumero + segundoNumero));
