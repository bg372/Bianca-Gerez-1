**Exercícios de interpretação de código**

1. Leia o código abaixo. Indique todas as mensagens impressas no console.

 * 1. 
 *  a.  false
 *  b.  false
 *  c.  true
 *  d.  false
 *  e. 'boolean'

2. Leia o código abaixo. 

        let array
        console.log('I. ', array)
        
        array = null
        console.log('II. ', array)
        
        
        array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
        console.log('III. ', array.length)
        
        let i = 0
        console.log('IV. ', array[i], " e ", array[i+1])
        
        array[i+1] = 19
        const valor = array[i+6]
        console.log('V. ', array[i+1], " e ", valor)
        
        i+=1
        array[i] = array[i-1]
        console.log('VI. ', array[i])
        
        i = array.length - 1
        array[i] = array[i-3]
        const resultadoC = array[i]%array[1]
        console.log('VII. ', resultadoC)


    a. O que é `array` e como se declara em `JS`?
 a.  array é uma estrutura que permite guardar e acessar mais de uma informação
 *      na mesma variável. Para declarar, fazemos: const array = []

    b. Qual o index inicial de um `array`?
 b.  O index inicial é 0. Isto significa que, para acessar o primeiro elemento, 
 *      fazemos array[0]

    c. Como se determinar o tamanho do `array`?
 c.  Usamos array.length

    d. Indique todas as mensagens impressas no console.
   I. undefined
        II. null
        III. 11
        IV. 3 e 4
        V.  19  e  9
        VI.  3
        VII.  1


1. Para este exercício, será necessário o conhecimento das fórmulas para mudar a unidade de temperatura entre Graus Celsius(°C),  Graus Fahrenheit(°F) e Kelvin(K). Abaixo estão duas delas:
    - Graus Fahrenheit(°F) para Kelvin(K)

            (KELVIN) = (GRAUS_FAHRENHEIT - 32)*5/9 + 273.15

    - Graus Celsius(°C) para Graus Fahrenheit (°C)

            (GRAUS_FAHRENHEIT) = (GRAUS_CELSIUS)*9/5 + 32


    a. Calcule e mostre o valor de 77°F em  K, mostrando a unidade no console também.

let valorEmFahrenheit = 77;
let valorEmKelvin = ((valorEmFahrenheit - 32) * 5) / 9 + 273.15;
console.log(valorEmKelvin, "K");


    b. Calcule e mostre o valor de 80°C em °F, mostrando a unidade no console também.

/*B*/
let valorEmCelsius = 80;
valorEmFahrenheit = (valorEmCelsius * 9) / 5 + 32;
console.log(valorEmFahrenheit, "°F");


    c. Calcule e mostre o valor de 30°C em °F e K, mostrando as unidades no console também.

/*C*/
valorEmCelsius = 30;
valorEmFahrenheit = (valorEmCelsius * 9) / 5 + 32;
valorEmKelvin = ((valorEmFahrenheit - 32) * 5) / 9 + 273.15;
console.log(valorEmFahrenheit, "°F");
console.log(valorEmKelvin, "K");

    d. Altere o último item para que o usuário insira o valor em graus Celsius que ele deseja converter.

/*D*/
const valorDoUsuario = prompt("Digite o valor em °C");
valorEmCelsius = Number(valorDoUsuario);
valorEmFahrenheit = (valorEmCelsius * 9) / 5 + 32;
valorEmKelvin = ((valorEmFahrenheit - 32) * 5) / 9 + 273.15;
console.log(valorEmFahrenheit, "°F");
console.log(valorEmKelvin, "K");

/**
2. Faça um programa que faça 5 perguntas para o usuário (pode ser criativo nesta parte). Imprima-as com as respostas no console da seguinte forma:
        `
        	1. Qual o seu endereço?
        	Resposta: Rua ABC, 123
        
        	2. Qual a sua cor favorita?
        	Resposta: Azul
        
        	.
        	.
        	.
const pergunta1 = "Qual sua cor favorita?";
const pergunta2 = "Qual seu endereço?";
const pergunta3 = "Como você está?";
const pergunta4 = "Ficou preso no elevador hoje?";
const pergunta5 = "Já viu Ricky And Morty?";
const resposta1 = prompt(pergunta1);
const resposta2 = prompt(pergunta2);
const resposta3 = prompt(pergunta3);
const resposta4 = prompt(pergunta4);
const resposta5 = prompt(pergunta5);
console.log(pergunta1);
console.log("Respota: ", resposta1);
console.log();
console.log(pergunta2);
console.log("Respota: ", resposta2);
console.log();
console.log(pergunta3);
console.log("Respota: ", resposta3);
console.log();
console.log(pergunta4);
console.log("Respota: ", resposta4);
console.log();
console.log(pergunta5);
console.log("Respota: ", resposta5);
console.log();
3. Quilowatt-hora é uma unidade de energia; e é muito utilizada para se determinar o consumo de energia elétrica em residências. Sabe-se que o quilowatt-hora de energia custa um quinto do salário mínimo. Faça um programa que receba o valor do salário mínimo e a quantidade de quilowatts consumida por uma residência.
    a. Calcule e mostre o valor de cada quilowatt-hora, considerando o atual valor do salário mínimo;
const salarioMinimo = 998;
const valorDoQuillowattHora = salarioMinimo / 5;
console.log(valorDoQuillowattHora);
    b. Calcule e mostre o valor a ser pago por uma residência que consuma 280 quilowatt-hora;
/*B*/
let valorParaPagar = valorDoQuillowattHora * 280;
console.log(valorParaPagar);


    c. Altere o programa para receber mais um valor: a porcentagem de desconto. Calcule e mostre o valor a ser pago pela mesma residência acima considerando 15% de desconto.

/*C*/
let porcentagemDeDesoncto = 15;
valorParaPagar *= porcentagemDeDesoncto / 100;
console.log(valorParaPagar);