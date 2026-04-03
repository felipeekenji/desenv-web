const valorConta = 100
const percentualGorjeta = 10 // 15 de gorjeta é sacanagem

const valorGorjeta = valorConta * (percentualGorjeta/100)
const valorTotal = valorConta + valorGorjeta;

console.log("Valor da Conta: R$" + valorConta.toFixed(2))
console.log("Gorjeta (15%): " + valorGorjeta.toFixed(2))
console.log("Total a pagar: R$" + valorTotal.toFixed(2))