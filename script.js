// abrir menu mobile e fechar menu no overlay

let btnMenu = document.getElementById("btn-menu");
let menu = document.getElementById("menu-mobile");
let overlay = document.getElementById("overlay-menu");

btnMenu.addEventListener("click", () => {
  menu.classList.add("abrir-menu");
});

menu.addEventListener("click", () => {
  menu.classList.remove("abrir-menu");
});

overlay.addEventListener("click", () => {
  menu.classList.remove("abrir-menu");
});

// selecionar o header e os links do menu
const header = document.querySelector('header');
const menuLinks = document.querySelectorAll('nav.menu-desktop ul li a');


// ouvintes de eventos para os links do menu para rolar suavemente
menuLinks.forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault();
    const idAlvo = link.getAttribute('href').substring(1);
    const elementoAlvo = document.getElementById(idAlvo);
    if (elementoAlvo) {
      window.scrollTo({
        top: elementoAlvo.offsetTop - header.offsetHeight,
        behavior: 'smooth',
      });
    }
  });
});


// função para aparecer alert dizendo que a mensagem foi enviada e encaminhar para inicio

function mostrarAlert() {
  alert('Sua mensagem foi enviada com sucesso!');
  window.location.href = '#inicio';
}