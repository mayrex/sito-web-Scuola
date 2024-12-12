const menuOpenButton = document.querySelector("#menu-open-button")
const menuCloseButton = document.querySelector("#menu-close-button")
const header = document.getElementById("header")

window.addEventListener("scroll", function () {
  if (window.scrollY > 50) {
      header.classList.add("scrolled");
  } else {
      header.classList.remove("scrolled");
  }
});



menuOpenButton.addEventListener("click", () =>{
  document.body.classList.toggle("show-mobile-menu")
})

menuCloseButton.addEventListener("click", ()=>{
  menuOpenButton.click()
})


window.addEventListener('load', function () {
  const welcomeScreen = document.getElementById('welcome-screen');
  const mainMenu = document.getElementById('main-menu');
  const primaSezione = document.querySelector('.prima-sezione');
  if (primaSezione) {
      primaSezione.classList.add('show');
  } 

  // Nascondi schermata di benvenuto dopo l'animazione
  setTimeout(() => {
      welcomeScreen.classList.add('hide');
      mainMenu.classList.remove('hidden');
  }, 2250); // Tempo totale dell'animazione + pausa
});
