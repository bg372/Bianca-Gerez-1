function enviar() {
    let element = document.getElementById("novaTarefa").value;
    let diaDasemanavalor = document.getElementById("diaDaSemana").value
    switch (diaDasemanavalor){
   case "segunda":
   segunda.innerHTML += "<br>" + element;
   break;

   case "terca":
    terça.innerHTML += "<br>" + element;
    break;

    case "quarta":
    quarta.innerHTML += "<br>" + element;
    break;

    case "quinta":
    quinta.innerHTML += "<br>" + element;
    break;

    case "sexta":
    sexta.innerHTML += "<br>" + element;
    break;

    case "sabado":
    sabado.innerHTML += "<br>" + element;
    break;

    case "domingo":
    domingo.innerHTML += "<br>" + element;
    break;
    }
}
  