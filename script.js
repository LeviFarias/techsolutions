document.addEventListener("DOMContentLoaded", function () {
    const typingElement = document.getElementById('typing-animation');
    const text = "Software House habilitada em atender todos os segmentos do mercado :)";
    let i = 0;
    function type() {
        if (i < text.length) {
            typingElement.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, 32); // Intervalo de tempo entre cada caractere (em milissegundos)
        }
    }
    type();
});
