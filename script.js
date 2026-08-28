
function Calcular() {
    var altura = parseFloat(document.getElementById("altura").value);
    var peso = parseFloat(document.getElementById("peso").value);
    
    var imc = peso / (altura ** 2);
    var pesoMinimo = 18.5 * (altura ** 2);
    var pesoMaximo = 24.9 * (altura ** 2);

    var result = ""; 

    if (imc < 18.5) {
    result = "Atenção! Você está abaixo do peso.";
        } else if (imc < 25) {
    result = "Parabéns! Você está com o peso ideal.";
        } else if (imc < 30) {
    result = "Você está com sobrepeso.";
        } else if (imc < 35) {
    result = "Atenção! Obesidade grau I.";
        } else if (imc < 40) {
    result = "Atenção! Obesidade grau II.";
        } else {
    result = "Cuidado! Obesidade grau III.";
        }

    document.getElementById("resultado").value =
    "Seu IMC é: " + imc.toFixed(2).replace(".", ",") +
    "\n\n" +
    result +
    "\n\n" +
    "Faixa de IMC ideal: 18,5 a 24,9" +
    "\n" +
    "Faixa de peso adequada: " +
    pesoMinimo.toFixed(1).replace(".", ",") +
    " kg a " +
    pesoMaximo.toFixed(1).replace(".", ",") +
    " kg.";
}