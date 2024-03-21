function fun_Suma() {
    var valorUno = document.getElementById('valorUno').value;
    var valorDos = document.getElementById('valorDos').value;
    var valorUnoNumerico = parseFloat(valorUno);
    var valorDosNumerico = parseFloat(valorDos);
    var resultado = valorUnoNumerico + valorDosNumerico;
    document.getElementById('resultado').value = resultado;
    var helpIcon = document.getElementById("helpIcon");
    document.images.helpIcon.onmouseover =
        function() { window.alert('Some help text'); };

}

function fun_Resta() {
    var valorUno = document.getElementById('valorUno').value;
    var valorDos = document.getElementById('valorDos').value;
    var valorUnoNumerico = parseFloat(valorUno);
    var valorDosNumerico = parseFloat(valorDos);
    var resultado = valorUnoNumerico - valorDosNumerico;
    document.getElementById('resultado').value = resultado;
    helpIcon.removeEventListener("mouseover", estasborrandocodigo, false);
}

function fun_Division() {
    var valorUno = document.getElementById('valorUno').value;
    var valorDos = document.getElementById('valorDos').value;
    var valorUnoNumerico = parseFloat(valorUno);
    var valorDosNumerico = parseFloat(valorDos);
    var resultado = valorUnoNumerico / valorDosNumerico;
    document.getElementById('resultado').value = resultado;

}

function fun_Multiplicacion() {
    var valorUno = document.getElementById('valorUno').value;
    var valorDos = document.getElementById('valorDos').value;
    var valorUnoNumerico = parseFloat(valorUno);
    var valorDosNumerico = parseFloat(valorDos);
    var resultado = valorUnoNumerico * valorDosNumerico;
    document.getElementById('resultado').value = resultado;

}
$(document).ready(function () {
    $("#submit").click(
        function () {
            var userName = $("#NameBox").val();
            $("#thankYouArea").replaceWith(
                "<p>Thank you " + userName + "</p>");
    })
});