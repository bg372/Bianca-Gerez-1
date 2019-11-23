//1. **Sem rodar o trecho de código a seguir**, analise-o e descreva o que ele faz, como faz e qual será a mensagem impressa no `console` . 

//R: NO PRIMEIRO CONSOLE.LOG A MENSAGEM SERÁ 165. NO SEGUNDO SERÁ "TIPO DE INVESTIMENTO INFORMADO INCORRETO!" PORQUE
// NÃO TEM EXISTE O CASE TESOURO DIRETO.

//2. Explique com as suas palavras o que são e quando podemos/devemos utilizar arrays e objetos.

//R:Arrays são basicamente listas, devem ser utilizados quando queremos armazenar muitos valores em uma única variável
//R: Objetos são como cases de varias informações, diferente do array que também pode armazenar muitos valores,
//a estrutura das informações contidas é melhor. Nesse caso deve ser utilizado quando queremos armazenar 
//dados/informações
//"estruturados".

//3. Crie uma função chamada `criaRetangulo` que recebe como parâmetros dois lados (`lado1` e `lado2`) e retorna 
//um objeto com 4 informações: largura (`lado1`), altura (`lado2`), perímetro (`2 * (lado1 + lado2)`) e área 
//(`lado1 * lado2`).

//let lado1Largura = 15;
//let lado2Altura = 16;
//let perimetro = lado1Largura + lado2Altura;
//let area = lado1Largura * lado2Altura

//const objetoRetangulo = {
  //  largura: lado1Largura  ,
   // altura: lado2Altura  ,
   // perimetro: perimetro,
   // area: area
//}

//function criarRetangulo (){
  //  return objetoRetangulo
//}
//console.log(criarRetangulo())

//

//4. Crie um objeto que represente uma pessoa qualquer, com as propriedades de `nome`, `idade`, `email` e `endereco`.
// Crie uma função chamada `anonimizarPessoa`, que deverá retornar um **novo** objeto com as mesmas propriedades, 
//mas com a string `ANÔNIMO` no lugar do nome. O objeto original deve ser mantido com o nome da pessoa.

//let pessoaaleatoria = {
//nome: 'Fernanda'  ,
//idade: '26'  ,
//email: 'fenanda258@gmail.com',
//endereço: 'Rua Não Existente n º : 852'
//}

//function anonimizarPessoa(){
  //  let nomeAnonimo = pessoaaleatoria['nome'] = 'ANÔNIMO'; 
   // let idadeAnonimo = pessoaaleatoria['idade'] = 'ANÔNIMO';
  //  let emailAnonimo = pessoaaleatoria['email'] = 'ANÔNIMO';
  //  let enderecoAnonimo = pessoaaleatoria['endereço'] = 'ANÔNIMO';

  //  return pessoaaleatoria
//}
//console.log(anonimizarPessoa())

//5. Crie um objeto para representar seu filme favorito. Ele deve ter as seguintes propriedades: título, ano, diretor
// e atores/atrizes (lista com pelo menos 2 atores/atrizes). Imprima na tela a seguinte string, baseada nos valores
// do objeto:
//`Venha assistir ao filme NOME DO FILME, de ANO, dirigido por DIRETOR e estrelado por ATOR 1, ATRIZ 2, ATOR n`. 
//A lista de atores/atrizes deve ser impressa inteira, independente do tamanho da lista.

//const filmeFavorito = {
//título: 'Não tenho filme Favorito',
//ano: '1995',
//diretor: 'Gerez',
//Atrizes: 'Bianca' + " e " + 'internal voices'
//}

//console.log("Venha assistir ao filme" + " " + filmeFavorito.título + " " + ", de" + " " + filmeFavorito.ano + " " 
//+ ", dirigido por" + " " + filmeFavorito.diretor + " " + " e estrelador por" + " " + filmeFavorito.Atrizes )
