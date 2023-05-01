var botonEncriptar = document.querySelector(".btn-encriptar");
var botonDesencriptar = document.querySelector(".btn-desencriptar");
var muñeco = document.querySelector(".contenedor-muñeco");
var anuncio = document.querySelector(".contenedor-anuncio");
var parrafo = document.querySelector(".contenedor-parrafo");
var resultado = document.querySelector(".texto-resultado");

botonEncriptar.onclick = encriptar;
botonDesencriptar.onclick = desencriptar;

function encriptar() {
  ocultarAdelante();
  var texTarea = recuperarTexto();
  resultado.textContent = encriptarTexto(texTarea);
}

function desencriptar() {
  ocultarAdelante();
  var texTarea = recuperarTexto();
  resultado.textContent = desencriptarTexto(texTarea);
}

function recuperarTexto() {
  var texTarea = document.querySelector(".textarea-1");
  return texTarea.value;
}

function ocultarAdelante() {
  muñeco.classList.add("ocultar");
  anuncio.classList.add("ocultar");
  parrafo.classList.add("ocultar");
}


function encriptarTexto(texto) {
  var textoFinal = "";

  for (let i = 0; i < texto.length; i++) {
    if (texto[i] == "a") {
      textoFinal = textoFinal + "ai";
    }
    else if (texto[i] == "e") {
      textoFinal = textoFinal + "enter";
    }
    else if (texto[i] == "o") {
      textoFinal = textoFinal + "ober";
    }
    else if (texto[i] == "i") {
      textoFinal = textoFinal + "imes";
    }
    else if (texto[i] == "u") {
      textoFinal = textoFinal + "ufat";
    }
    else {
      textoFinal = textoFinal + texto[i];
    }
  }
  return textoFinal;
}


function desencriptarTexto(texto) {
  var textoFinal = "";

  for (let i = 0; i < texto.length; i++) {
    if (texto[i] == "a") {
      textoFinal = textoFinal + "a";
      i = i + 1;
    }
    else if (texto[i] == "e") {
      textoFinal = textoFinal + "e";
      i = i + 4;
    }
    else if (texto[i] == "i") {
      textoFinal = textoFinal + "i";
      i = i + 3;
    }
    else if (texto[i] == "o") {
      textoFinal = textoFinal + "o";
      i = i + 3;
    }
    else if (texto[i] == "u") {
      textoFinal = textoFinal + "u";
      i = i + 3;
    }
    else {
      textoFinal = textoFinal + texto[i];
    }
  }
  return textoFinal;
}

const btnCopiar = document.querySelector(".copiar");
btnCopiar.addEventListener("click", copiar = () => {
    var contenido = document.querySelector(".texto-resultado").textContent;
    navigator.clipboard.writeText(contenido);
    console.log("hola");
})




