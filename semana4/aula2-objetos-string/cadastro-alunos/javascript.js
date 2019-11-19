function enviar() {
    let nomeValue = document.getElementById("nome").value;
    let idadeValue = document.getElementById("idade").value
    let telefoneValue = document.getElementById("telefone").value
    let emailValue = document.getElementById("email").value
    containerDados.innerHTML += "<br> Nome:   " + nomeValue + "<br> Idade:   " + idadeValue 
    + "<br> Telefone:   " + telefoneValue + "<br> E-mail:   " + emailValue + "<br>";
    let apagarInput = document.getElementsById("nome" + "idade" + "telefone" + "email").value
    apagarInput.innerHTML = "";
}
