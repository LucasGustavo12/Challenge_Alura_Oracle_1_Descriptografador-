//Funcao para copiar o texto
function copiarTexto() {
  var textoCopiado = document.getElementById("texto");
  textoCopiado.select();
  textoCopiado.setSelectionRange(0, 99999); /* Para mobile */
  document.execCommand("copy");
}

//função para criptografar
criptografar = mensagem => {
  let mensagemEncriptada;

  const mensagemArr = mensagem.split("");
  console.log("mensagem array", mensagemArr);

  let encriptadaMensagemArr = [];

  for( i =0; i < mensagemArr.length; i++) {
    let letra;
    switch(mensagemArr[i]) {
      case "e":
      letra = "enter";
      break;
      case "i":
        letra = "imes"
      break;
      case "a":
        letra = "ai";
        break;
      case "o":
        letra = "ober";
        break;
      case "u":
        letra = "uffat";
        default: 
        letra = mensagemArr[i];
    }
    encriptadaMensagemArr.push(letra);
    console.log("Mensagem encriptada", encriptadaMensagemArr);
  }

  mensagemEncriptada = encriptadaMensagemArr.join("");
  return mensagemEncriptada;
}

//Funcao para traduzir o texto encriptado
function desencriptarTexto(texto){

  let textoDesencriptado = texto.replace(/ai/g,'a');
  textoDesencriptado = textoDesencriptado.replace(/enter/g,'e');
  textoDesencriptado = textoDesencriptado.replace(/imes/g,'i');
  textoDesencriptado = textoDesencriptado.replace(/ober/g,'o');
  textoDesencriptado = textoDesencriptado.replace(/ufat/g,'u');
  return textoDesencriptado;
}


//botão criptografar que chama a função criptografar
  function criptografarTexto() {
    
    let textarea1 = document.getElementById("text_area1");
    let textarea2 = document.getElementById("texto");
    const btncrip = document.getElementById("btnc");
    btncrip.addEventListener('click', function(){
    textarea2.value = criptografar(textarea1.value);
    console.log(textarea1.value);
    }); 

//limpar imagem ao lado no bloco-b
    let textoArea = document.getElementById("text_area1").value;
    if(textoArea.length === 0) {
    alert('Digite alguma mensagem!');
    }else {
    document.getElementById("imagem-msg").style.display = "none";
    document.getElementById("btncp").style.display = "block";
    }
  }

//botão descriptografar que chama a função descriptografar
  function descriptografar() {
    let textarea1 = document.getElementById("text_area1");
    let textarea2 = document.getElementById("texto");
    const btndescrip = document.getElementById("btnd");
    btndescrip.addEventListener('click', function(){
    textarea1.value = desencriptarTexto(textarea2.value);
    console.log(textarea2.value);

    });
  }
