let currentIndex = 0;
let totalSlides = 0;
let intervalo; // vai guardar o setInterval

async function carregarSlides() {
  const resposta = await fetch('BD.json');
  const dados = await resposta.json();
  totalSlides = dados.length;

  const slider = document.getElementById('slider');

  dados.forEach(item => {
    const slide = document.createElement('div');
    slide.className = 'slide';
    slide.innerHTML = `<img src="img/${item.img}" alt="">
        <h1>${item.nome}</h1>
        <h2>${item.funcao}</h2>
        <h2>Tecnologias: ${item.tecnologias}</h2>
        <h2><i>Feito em: ${item.data}</i></h2>`;
    slider.appendChild(slide);
  });

  iniciarCarrossel();
  atualizarSlider();
}

function atualizarSlider() {
  const slider = document.getElementById('slider');
  slider.style.transform = `translateX(-${currentIndex * 100}%)`;
}

function avancarSlide() {
  currentIndex = (currentIndex + 1) % totalSlides;
  atualizarSlider();
}

function iniciarCarrossel() {
  intervalo = setInterval(avancarSlide, 5000);
}

function pausarCarrossel() {
  clearInterval(intervalo);
}

// Botões
document.getElementById('prev').addEventListener('click', () => {
  pausarCarrossel();
  if (currentIndex > 0) currentIndex--;
  atualizarSlider();
  iniciarCarrossel();
});

document.getElementById('next').addEventListener('click', () => {
  pausarCarrossel();
  if (currentIndex < totalSlides - 1) currentIndex++;
  else currentIndex = 0;
  atualizarSlider();
  iniciarCarrossel();
});

carregarSlides();

async function todosProjetos() {
  const resposta = await fetch('BD.json');
  const dados = await resposta.json();
  totalProjetos = dados.length;

  const container = document.getElementById('lista');
  dados.forEach(item => {
    const div = document.createElement('div');
    div.className = 'item';
    div.innerHTML = `<img src="img/${item.img}" alt="">
        <h1>${item.nome}</h1>
        <h2>${item.funcao}</h2>
        <h2>Tecnologias: ${item.tecnologias}</h2>
        <h2><i>Feito em: ${item.data}</i></h2>`;
        container.appendChild(div);
  });

}
todosProjetos();
const btn = document.getElementById("menu-btn");
const menu = document.getElementById("mobile-menu");

btn.addEventListener("click", () => {
  menu.classList.toggle("active");
});