
function Calcular() {
    var altura = parseFloat(document.getElementById("altura").value);
    var peso = parseFloat(document.getElementById("peso").value);
    
    var imc = peso / (altura ** 2);
    var result = ""; 

    if (imc < 18.5) {
        result = "Atenção!!! Você está abaixo do peso.";
    } else if (imc >= 18.5 && imc < 24.9) {
        result = "Parabéns!!! Você está com o peso ideal.";
    } else if (imc >= 25.0 && imc < 29.9) {
        result = "Você está com sobrepeso.";
    } else if (imc >= 30.0 && imc < 39.9) {
        result = "Atenção!!! Você está com obesidade.";
    } else if (imc > 39.9) {
        result = "Cuidado!!! Você está com obesidade mórbid.";
    } 

    document.getElementById("resultado").innerText =result;
}