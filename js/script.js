//Funcao para copiar o texto
function copiarTexto() {
  /* Encontra o texto a ser armazenado */
let copyText = document.querySelector('.btncp');

  /* Seleciona o texto do input */
  copyText.select();
  copyText.setSelectionRange(0, 99999); /*Solução para dispositivos móveis*/

  /* Copia o texto */
  document.execCommand("copy");
}

