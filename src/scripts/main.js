document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('form-gerador').addEventListener('submit', function(evento) {
        evento.preventDefault();

        let numeroDdd = document.getElementById('ddd').value;
        let numeroAleatorio = numeroDdd;

        document.getElementById('numero-ddd').innerText = numeroAleatorio;
        document.querySelector('.resultado').style.display = 'block';



        let numeroTelefone = document.getElementById('number').value;
        let numeroAleatorio1 = Math.random(min = 10000000, max = 99999999)* numeroTelefone;
        numeroAleatorio1 = Math.round(numeroAleatorio1 + 1);
        numeroAleatorio1 = Math.floor(numeroAleatorio1 - 1);

        document.getElementById('telephone-number').innerText = numeroAleatorio1;
        document.querySelector('.resultado').style.display = 'block';
    })
})
