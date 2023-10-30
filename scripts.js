function toggleMenu() {
    var menu = document.getElementById("menu");
    let logo = document.getElementById("logo-content")
    menu.classList.toggle("active");
}

window.addEventListener("scroll", function() {
    var elemento = document.querySelector("header");
    var posicaoRolagem = window.scrollY; // Obtém a posição de rolagem vertical
    var menulink = document.querySelectorAll(".menu-link");

    // Verifica se a posição de rolagem atingiu 200 pixels
    if (posicaoRolagem >= 200) {
        elemento.style.backgroundColor = "white"; // Altera a cor de fundo

        for (let i = 0; i < menulink.length; i++) {
            menulink[i].style.color = "#0B2C3C";
        }
    } else {
        elemento.style.backgroundColor = "#18181830"; // Volta à cor original
        for (let i = 0; i < menulink.length; i++) {
            menulink[i].style.color = "#EDCAB7";
        }
    }
});
