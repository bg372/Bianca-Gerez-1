class criarNovoPost {
    constructor(titulo,autor,conteudo){
    this.titulo = titulo
    this.autor = autor
    this.conteudo = conteudo
}
}
console.log(criarNovoPost)
function enviarPost (){

let tituloValue = document.getElementById("titulo").value
let autorValue = document.getElementById("autor").value
let conteudoValue = document.getElementById("conteudo").value
let arrayPost = new criarNovoPost (tituloValue,  autorValue , conteudoValue)

    post.innerHTML += "<div > <br><h3>" + tituloValue + "</h3>"+ "<br> <p> Escrito por:   " + "" +
    autorValue + "</p>" + "<br> <p>  " + conteudoValue + "<br><p> </div>";

    arrayPostDados.push(arrayPost)
    document.getElementById("titulo").value = ""
    document.getElementById("autor").value = ""
    document.getElementById("conteudo").value = ""
   
}
console.log(arrayPost)


