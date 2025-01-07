let contador = 1;

setInterval(() => {
    document.getElementById('slide' + contador).checked = true
    contador < 5 ? contador++ : contador = 1;
}, 3000)