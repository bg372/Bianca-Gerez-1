//**Exercícios de interpretação de código**

//EXERCÍCIO 1

 /* *************Resposta***************
O codigo a baixo esta somando i com sum, no caso ele pega o numero em que i se encontra e soma. Por exemplo quando o i esta em 4 o sum que estava em 6 vai para 10. O resultado final será 55.
//EXERCICIO 2
************ Resposta *****************
a. O que o comando `.push` faz?
R: O comando push adiciona o elemento item
b. Qual o valor impresso no console?
R: 10,15,20,25,30
c. Qual **seria** imprimido no console se a variável `numero` tivesse o valor de `3`? E se tivesse o valor de `4`?
R: Seria 12,15,18,27,30, no caso de 4 seria: 12,20
    EXERCÍCIO 3
*******RESPOSTA*********
O resultado seria 0.
**Exercícios de escrita de código**
EXERCÍCIO 4
**********Respostas**************
a. Escreva um programa que devolva o maior e o menor números contidos no array original
const numeros = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
let maior = numeros[2] 
let menor = numeros [1]
for(let i =0; i < numeros.lenght; i++) {
const elemento = numeros[i]
if(elemento > maior) {
maior = elemento 
}
if (elemento < menor){
  menor = elemento
}
}
console.log(maior)
console.log(menor)
RESPOSTA DA F4
let maior = array[0]
let menor = array[0]
for(const el of array) {
  if(el > maior) {
    maior = el
  }
  if(el < menor) {
    menor = el
  }
}
b. Escreva um programa que devolva um novo array contendo todos os valores do array original divididos por 10.
const numeros = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
let string = []
for (let i =0; i < numeros.length; i++){
let item = numeros[i]
item /=10
string.push(item)
}
console.log(string)
RESPOSTA DA F4
let novoArray = []
for(const el of array) {
  novoArray.push(el/10)
}
console.log(novoArray)
 
c. Escreva um programa que devolva um novo array contendo, somente, os números ímpares do array original.
const numeros = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 
110, 55]
for(let i =0; i <= numeros.length; i++) {
if (i % 2 === 1){
console.log(i + "é impar")
}
}
RESPOSTA DA F4
novoArray = []
for(const el of array) {
  if(el % 2 !== 0){
    novoArray.push(el)
  }
}
console.log(novoArray)
d. Escreva um programa que um novo array contendo strings, da seguinte forma: "O elemento do índex i é: numero"
 
const numeros = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
let string = []
for (let i =0; i < numeros.length; i++){
let item = numeros[i]
let msg = "O elemento do index" + item + " é " + i
string.push(msg)
}
console.log(string)
RESPOSTA DA F4
novoArray = []
for(let i = 0; i < array.length; i++) {
  novoArray.push("O elemento do índex " + i + " é " + array[i])
}
console.log(novoArray)