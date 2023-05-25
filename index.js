var botonEncriptar = document.querySelector(".btn-encriptar");
var botonDesencriptar = document.querySelector(".btn-desencriptar");

var textarea = document.querySelector(".textArea");
var resultado = document.querySelector(".mensajeResultado");

var resultado = document.querySelector(".mensajeResultado");//nombre de la clase


function cargarMensaje(event){
    event.preventDefault();//evita recargar pag
    var texto = document.querySelector('textarea[name="texto"]').value;
    resultado.textContent = texto;
}

botonEncriptar.addEventListener("click", function() {
    var textoEncriptado = encriptar(textarea.value);
    resultado.value = textoEncriptado;
});

function encriptar(stringEncriptado){
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringEncriptado = stringEncriptado.toLowerCase();

    for(let i=0 ; i < matrizCodigo.length ; i++){
        if(stringEncriptado.includes(matrizCodigo[i][0])){
            stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
    }
    return stringEncriptado;
}

botonDesencriptar.addEventListener("click", function() {
    var textoDesencriptado = desencriptar(resultado.value);
    resultado.value = textoDesencriptado;
})

function desencriptar(stringDesencriptado){
    let matrizCodigo = [["enter","e"],["imes","i"],["ai","a"],["ober","o"],["ufat","u"]];
    stringDesencriptado = stringDesencriptado.toLowerCase();

    for(let i=0; i < matrizCodigo.length; i++ ){
        if(stringDesencriptado.includes(matrizCodigo[i][0])){
            stringDesencriptado = stringDesencriptado.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
    }

    return stringDesencriptado;
}

function convertirAMinusculas(event) {
    var texto = event.target.value;
    event.target.value = texto.toLowerCase();
}

function cambiarImagen() {
    var imagen = document.getElementById("imagen");
    imagen.src = "images/cadenaRot.png";
    console.log(imagen)
}

function retornoImagen() {
    var imagen = document.getElementById("imagen");
    imagen.src = "images/desen.png";
    console.log(imagen)
}

function limpiar(){
    var textarea = document.getElementsByName("texto")[0];
    textarea.value = "";
}

function copiar() {
    var textarea = document.getElementsByName("mensaje")[0];
    var contenido = textarea.value;
    
    var tempInput = document.createElement("input");
    tempInput.value = contenido;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);
    
    alert("Texto copiado: " + contenido);
}

function vacio(){
    var textArea = document.getElementsByName("texto")[0];
    if (textArea.value === "") {
        alert("Ingrese su texto")
    }
}


