/* 
**Exercícios de interpretação de código**
1. Leia o código abaixo:
*//*
        const respostaDoUsuario = prompt("Digite o número que você quer testar?")
        const numero = Number(respostaDoUsuario)
        
        if(numero % 2 === 0) {
          console.log("Passou no teste.")
        } else {
          console.log("Não passou no teste.")
        }
Explique o que o código faz. Qual o teste que ele realiza? Para que tipos de números ele imprime no console "Passou no teste"? Para que tipos, a mensagem é "Não passou no teste"? 
********** RESPOSTA***********
 O teste verifica se o numero inserido pelo usuario e par ou impar. Se for par : Passou no teste, se for impar: não passou no teste.
******************************
**/ 
/*
2. O código abaixo foi feito por um desenvolvedor, contratado para automatizar algumas tarefas de um supermercado. Veja abaixo:
*//*
        let fruta = prompt("Escolha uma fr")
        let preco
        switch (fruta) {
          case "Laranja":
            preco = 3.5
            break;
          case "Maçã":
            preco = 2.25
            break;
          case "Uva":
            preco = 0.30
            break;
          case "Pêra":
            preco = 5.5
            break; // BREAK PARA O ITEM d.
          default:
            preco = 5
            break;
        }
        console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)
/*
    a. Para que serve o código acima
R: O codigo acima mostra o valor da fruta inserida pelo usuario
    ************
    b. Qual será a mensagem impressa no console, se o valor de fruta for `"Maçã"`?
    R: O Preço da fruta Maça e R$2,25
    *************
    c. Considere que você vá ao mercado com o objetivo de comprar 2 laranjas, 1 maçã, 3 bananas e 1 uva. Qual seria o preço que você pagaria?
   R: Pagaria ao todo R$24,8
    *************
    d. Considere que um usuário queira comprar uma `Pêra`, qual seria a mensagem impressa no console se retirássemos o `break` que está logo acima do `deafult` (o `break` indicado pelo comentário "BREAK PARA O ITEM d.")?
   R: Ao retirar o break da case Pera, a mesma e interpretada como default que foi definido como valor 5.
   *************
3. Leia o código abaixo:
*/
      /*  const numero1 = prompt("Digite o primeiro número.")
        const numero2 = prompt("Digite o próximo número?")
        
        if(numero1 > 0 && numero2 > 0) {
          let mensagem
          if(numero1 > numero2) {
            mensagem = "Número 1 é maior que o 2!"
          } else {
            mensagem = "Número 1 é menor ou igual ao 2!"
          }
        }
        
        console.log(mensagem)
/*    Considere um usuário que digita os números 3 e 4 respectivamente. Qual será a mensagem do terminal? Haverá algum erro? Justifique usando os conceitos de bloco ou escopo.
R: Sera mostrado uma mensagem de erro informando que mensagem não foi definido. A variavel mensagem foi definida dentro do bloco if, desta forma, ele não pode ser acessado fora dentro deste escopo, por essa razão o mesmo não funciona.
**************
**Exercícios de escrita de código**
1. Nos exercícios abaixo, será necessário que você trabalhe com a comparação de números. Leia abaixo:
    a. Crie um programa que receba dois números do usuário através do `prompt` e imprima-os na ordem **decrescente**. O que acontece com o seu programa se os 2 números forem iguais?
const primeiroNumero = Number(prompt("Digite o primeiro numero"))
const segundoNumero = Number(prompt("Digite o segundo numero"))
if (primeiroNumero > segundoNumero) {
   console.log (primeiroNumero , segundoNumero)
} 
if (primeiroNumero < segundoNumero) {
   console.log (segundoNumero  , primeiroNumero)
}
R: Se os 2 numeros forem iguais, não e mostrada nenhum numero pois não foi definido a mensagem em caso de igualdade.
    b. Adapte o programa para que o usuário digite 3 números. Ainda os imprima na ordem **decrescente**. O que acontece como seu programa se os 3 números forem iguais?
*//*
const primeiroNumero = Number(prompt("Digite o primeiro numero"))
const segundoNumero = Number(prompt("Digite o segundo numero"))
const terceiroNumero = Number(prompt("Digite o terceiro numero"))
if (primeiroNumero > segundoNumero && segundoNumero > terceiroNumero) {
   console.log (primeiroNumero , segundoNumero , terceiroNumero)
} 
else if (primeiroNumero > terceiroNumero && terceiroNumero > segundoNumero){
console.log (primeiroNumero , terceiroNumero , segundoNumero)
} 
else if (primeiroNumero < segundoNumero && segundoNumero < terceiroNumero) {
   console.log (terceiroNumero, segundoNumero, primeiroNumero)
}
 else if (primeiroNumero < terceiroNumero && terceiroNumero < segundoNumero){
 console.log (primeiroNumero , terceiroNumero , segundoNumero)
} 
else if  (segundoNumero > primeiroNumero && primeiroNumero > terceiroNumero){
console.log (segundoNumero , primeiroNumero ,terceiroNumero)
}
else if (segundoNumero < primeiroNumero && primeiroNumero < terceiroNumero){
console.log (segundoNumero , primeiroNumero , terceiroNumero)
} 
else if (segundoNumero < terceiroNumero &&  terceiroNumero < primeiroNumero){
console.log (segundoNumero , terceiroNumero , primeiroNumero)
}
else if (segundoNumero > terceiroNumero &&  terceiroNumero > primeiroNumero){
console.log (segundoNumero , terceiroNumero , primeiroNumero)
}
else if (terceiroNumero > primeiroNumero &&  primeiroNumero > segundoNumero){
console.log (terceiroNumero , primeiroNumero , segundoNumero)
}
else if (terceiroNumero < primeiroNumero &&  primeiroNumero < segundoNumero) {
console.log (terceiroNumero , primeiroNumero , segundoNumero)
}
else if(terceiroNumero < segundoNumero && segundoNumero < primeiroNumero){
console.log (terceiroNumero , segundoNumero , primeiroNumero)
}
else (terceiroNumero > segundoNumero && segundoNumero  > primeiroNumero){
console.log (terceiroNumero , segundoNumero , primeiroNumero)
}
/*R: Os três aparecem.
    c. Agora, impeça que o usuário digite 3 números iguais. Caso todos sejam iguais, mostre um aviso ao usuário indicando que ele deve, ao menos, inserir um número diferente.
2. 
************RESPOSTA**********
    a. Escreva o diagrama esquemático que melhor represente a árvore condicional do exercício em si.
Diagrama:
Vertebrado ou invertebrado
    |              
possui pelos / não possui pelos
 |                |
sim          possui penas - não > e animal terrestre ? - não > peixe
  |                 |                      |
é racional?        Sim                    sim
  |       |         |                      |
  sim     não      ave                    reptil
   |       |
   sh      m 
sh*ser humano | m*mamifero */


   /* b. Escreva um programa que realize estas perguntas  e indique a classificação final considerada. As opções são: ser humano; mamífero não humano; ave; réptil; anfíbio; peixe ou é invertebrado 
*********** RESPOSTA *****************
const invertebrado = prompt("O animal é invertebrado ? [s/n]?")
if (invertebrado === "s"){
console.log("Invertebrado")
}else if (invertebrado === "n") {
const possuiPelos = prompt("O animal possui pelos ? [s/n]?")  
} else if(possuiPelos === "s"){
const racional = prompt("O animal e racional? [s/n]")
} else if (racional === "s"){
  console.log("Ser humano")
} else if (racional ==="n"){
  console.log("Mamifero")
} else if (possuiPelos === "n"){
  const possuiPenas = prompt ("O animail possui penas ? [s/n]")
} else if (possuiPenas === "s"){
  console.log("Ave")
} else if (possuiPenas === "n"){
  const aniTerrestre = prompt ("O animal é terrestre ? [s/n]")
} else if (aniTerrestre === "s"){
console.log("Reptil")
} else if (aniTerrestre === "n"){
  console.log("Peixe")}
/*
3. Você foi contratado para criar um sistema de vendas de ingressos de jogos de um estádio de futebol. Para esta compra, o usuário deve fornecer algumas informações:
    - Nome completo;
    - Tipo de jogo: IN indica internacional; e DO indica doméstico;
    - Etapa do jogo: SF indica semi-final; DT indica decisão de terceiro lugar; e FI indica final
    - Categoria: pode ser as opções 1, 2, 3 ou 4;
    - Quantidade de ingressos
    O seu sistema deve solicitar estas informações ao usuário, através do `prompt` . Além disso, ele deve imprimir tudo isso, junto com o valor de cada ingresso e o valor total que o usuário tem que pagar (ou seja, o valor unitário do ingresso multiplicado pela quantidade). Abaixo, há a tabela com os valores de cada ingresso e exemplos de execução do programa. Lembrando que o valor de jogos internacionais é o mesmo de jogos domésticos, mas seus preços devem ser dados em dólar (considerar a cotação de U$1,00 = R$4,10)
    **Tabela de preços**
    [](https://www.notion.so/41c21f657caa4b62a828bec3b5c6afd7#db1623df0a3f47dea1bf168f83a8373a)
    **Exemplos de saídas**
    Jogo nacional
        ---Dados da compra--- 
        Nome do cliente:  Soter Padua 
        Tipo do jogo:  Nacional 
        Etapa do jogo:  Final 
        Categoria:  1 
        Quantidade de Ingressos:  10 ingressos 
        ---Valores--- 
        Valor do ingresso:  R$ 1980
        Valor total:  R$ 19800
        ?
    Jogo internacional
        ---Dados da compra--- 
        Nome do cliente:  Soter Padua 
        Tipo do jogo:  Internacional 
        Etapa do jogo:  Final 
        Categoria:  1 
        Quantidade de Ingressos:  10 ingressos 
        ---Valores--- 
        Valor do ingresso:  U$ 482.92682926829275
        Valor total:  U$ 4829.2682926829275
        ?
*//* RESPOSTA:
const nomeCompleto = prompt("Insira seu nome completo")
const tipoJogo = prompt ("Qual o tipo de jogo: IN ou DO ?")
const etapaJogo = prompt ("Qual a etapa do jogo: SF, DT ou FI?")
const categoria = prompt ("Qual a categoria: 1,2,3,4?")
const quantidade = prompt ("Qual a quantidade?")
*/