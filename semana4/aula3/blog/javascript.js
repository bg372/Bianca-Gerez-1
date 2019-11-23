class criarNovoPost {
    constructor(titulo,autor,conteudo){
    this.titulo = titulo
    this.autor = autor
    this.conteudo = conteudo
}
}

function enviarPost (){
    let tituloValue = document.getElementById("titulo").value;
    let autorValue = document.getElementById("autor").value
    let conteudoValue = document.getElementById("conteudo").value
   
    let arrayEnviarPost = new criarNovoPost (tituloValue,autorValue,conteudoValue)
   
    arrayDadosPost.push(arrayEnviarPost)
    document.getElementById("titulo").value = ""
    document.getElementById("autor").value = ""
    document.getElementById("conteudo").value = ""
    console.log(arrayDadosPost)
    postar()
}

function postar (){
    
}
