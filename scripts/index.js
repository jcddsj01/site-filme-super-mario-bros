// Constantes para armazenar os elementos do DOM
const buttonMenu = document.getElementById("button-menu");
const header = document.getElementById("header");
const mainInfo = document.getElementById("main__info");

// Evento para o click do botão
buttonMenu.addEventListener("click", function() {
    // Alterna a classe 'active' no botão
    buttonMenu.classList.toggle("active")
    // Alterna a propriedade 'display' do cabeçalho entre 'flex' e 'none'
    if (header.style.display === "none" || header.style.display === "") {
        header.style.display = "flex"
        mainInfo.style.display = "none"
    } else {
        header.style.display = "none"
        mainInfo.style.display = "flex"
    }
})