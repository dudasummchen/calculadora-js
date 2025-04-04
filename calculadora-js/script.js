function insert(num) {
    var resultado = document.getElementById("resultado");
    resultado.innerText = resultado.innerText + num;  
}

function clean() {
    document.getElementById("resultado").innerText = ""; 
}

function back() {
    var resultado = document.getElementById("resultado");
    resultado.innerText = resultado.innerText.slice(0, -1);  
}

function calcular() {
    var resultado = document.getElementById("resultado").innerText;
    if (resultado) {
        var calculado = Function('return ' + resultado)();
        document.getElementById("resultado").innerText = calculado;
    }
}
