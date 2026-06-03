
//Rolagem para o header ficar preto
const header = document.querySelector('.header_container_content')

  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) { // quando a rolagem passar de 200px
        header.classList.add('scrolled'); // adiciona a classe
    } else {
      header.classList.remove('scrolled'); // remove a classe
    }
  });



//Carrossel
let index = 0;
const wrapper = document.querySelector(".carrossel-wrapper");
const items = document.querySelectorAll(".carrossel-item");
const dots = document.querySelectorAll(".dot");
const total = items.length;

function mostrarSlide(n) {
  if (n >= total) index = 0;
  if (n < 0) index = total - 1;
  wrapper.style.transform = `translateX(${-index * 100}%)`;

  // atualizar dots
  dots.forEach(dot => dot.classList.remove("active"));
  dots[index].classList.add("active");
}

// Botões
document.querySelector(".next").addEventListener("click", () => {
  index++;
  mostrarSlide(index);
});

document.querySelector(".prev").addEventListener("click", () => {
  index--;
  mostrarSlide(index);
});

// Indicadores
dots.forEach((dot, i) => {
  dot.addEventListener("click", () => {
    index = i;
    mostrarSlide(index);
  });
});

// Auto play
setInterval(() => {
  index++;
  mostrarSlide(index);
}, 4000);

mostrarSlide(index);


