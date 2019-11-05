import comprarCarta from './naoMexer.js'
// NÃO REMOVA ESTA LINHA
// com confirm

if(confirm("Quer iniciar um jogo?")){

const carta1 = comprarCarta(); 
const cartaA = comprarCarta();   


const carta2 = comprarCarta();
const cartaB = comprarCarta();

const ponto1 = carta1.valor + cartaA.valor
const ponto2 = carta2.valor + cartaB.valor

const cartasP = carta1.texto + cartaA.texto
const cartasC = carta2.texto + cartaB.texto

   console.log("Usuário cartas : " , carta1.texto, "",cartaA.texto, " - pontuação:", ponto1), console.log("Computador cartas : " , carta2. texto, "" , cartaB.texto, " - pontuação:", ponto2)

if (ponto1 > ponto2){
  console.log("O usuário venceu!")
} 
if (ponto2 > ponto1){
  console.log("O Computador ganhou!")
}
if (ponto1 === ponto2){
  console.log("EMPATE")
}
} else {
  console.log("O jogo acabou!")
}

