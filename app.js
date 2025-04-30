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
    slide.innerHTML = `<img src="img/${item.img}" alt="" style="width: 400px;">
        <h1>${item.nome}</h1>
        <h2>${item.funcao}</h2>
        <h2>${item.tecnologias}</h2>
        <h2>${item.data}</h2>`;
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
