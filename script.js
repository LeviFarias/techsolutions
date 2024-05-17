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




document.addEventListener("DOMContentLoaded", function() {
    var element = document.querySelector(".hover-underline-animation");
    var pattern = document.querySelector(".pattern");

    window.addEventListener("scroll", function() {
        if (isScrolledIntoView(pattern)) {
            element.classList.add("scrolled");
        } else {
            element.classList.remove("scrolled");
        }
    });

    function isScrolledIntoView(el) {
        var rect = el.getBoundingClientRect();
        var elemTop = rect.top;
        var elemBottom = rect.bottom;

        // Only completely visible elements return true:
        var isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);
        // Partially visible elements return true:
        // isVisible = elemTop < window.innerHeight && elemBottom >= 0;
        return isVisible;
    }
});
