//Funcao para copiar o texto
function copiarTexto() {
  var textoCopiado = document.getElementById("texto");
  textoCopiado.select();
  textoCopiado.setSelectionRange(0, 99999); /* Para mobile */
  document.execCommand("copy");
}

//Funcao para sumir com a div e fazer o botao copiar aparecer
function crip() {
  let textoArea1 = document.getElementById("text_area1").value;
  if(textoArea1.length === 0) {
    alert('Digite alguma mensagem');
  }else {
    document.getElementById("imagem-msg").style.display = "none";
    document.getElementById("btncp").style.display = "block";
  }
}