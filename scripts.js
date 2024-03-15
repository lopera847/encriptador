const campo_encriptado = document.querySelector("#texto-encriptador");
const campo_desencriptado = document.querySelector("#texto-desencriptado");


function recargarCopiar(){
    location.href = location.href;
}


function copiarPortapapeles(){
    let texto = document.getElementById("texto-desencriptado");
    texto.select();
    document.execCommand('copy');
    
    recargarCopiar()
}

const matriz_encriptar = [

    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
]

const matriz_desEncriptar = [
    ["enter", "e"],
    ["ai", "a"],
    ["ober", "o"],
    ["imes", "i"],
    ["ufat", "u"],
    
]




function btnEncriptar(){

    const texto = encriptar(campo_encriptado.value);
    campo_desencriptado.value = texto;
    campo_encriptado.value = "";
    ocultarImagen();
    mostrarCopiar();
    minusculasacentos(texto);
    
   
  
}

function btnDesencriptar(){
    const texto = Desencriptar(campo_encriptado.value);
    campo_desencriptado.value = texto
    campo_encriptado.value = "";
    ocultarImagen();
    mostrarCopiar();
    minusculasacentos(texto)
    
   
    
}



function encriptar (fraseEncriptada){
    for (let i = 0; i < matriz_encriptar.length; i++){
        if(fraseEncriptada.includes(matriz_encriptar[i][0])){
            fraseEncriptada = fraseEncriptada.replaceAll(
                matriz_encriptar[i][0],
                matriz_encriptar[i][1]
            );

            
        }
           
    }
    return fraseEncriptada;
}

function Desencriptar (fraseDesencriptada){
    for (let i = 0; i < matriz_desEncriptar.length; i++){
        if(fraseDesencriptada.includes(matriz_desEncriptar[i][0])){
            fraseDesencriptada = fraseDesencriptada.replaceAll(
                matriz_desEncriptar[i][0],
                matriz_desEncriptar[i][1]
             
            );

            
        }
           
    }
    return fraseDesencriptada;


}

function minusculasacentos(texto){
    if(texto == '' || texto.includes('  ') || texto == ' '){
        swal("Ooops!", "Debes ingresar un texto", "warning");
        mostarImagen();
        OcultarCopiar();
        return 1;
    }
    for(let k = 0; k < texto.length; k++){
        if(texto[k] != ' '){
            if(texto[k].toUpperCase() == texto[k] || texto[k] == "á" || texto[k] == "é" || texto[k] == "í" || texto[k] == "ó"){
                swal("Ooops!", "El texto no puede tener mayusculas, acentos ni carecteres especiales", "warning");
                campo_desencriptado.value = " ";
                mostarImagen();
                OcultarCopiar();
                return 1;
            }
        }
    }
}



function ocultarImagen() {
    document.getElementById("muñeco").style.display = "none";
}
function mostarImagen(){
    document.getElementById("muñeco").style.display = "block";
}
function mostrarCopiar(){
    document.getElementById("boton-copiar").style.display = "block";
}
function OcultarCopiar(){
    document.getElementById("boton-copiar").style.display = "none";
}