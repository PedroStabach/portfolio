async function carregarSlides() {
    const resposta = await fetch('BD.json');
    const dados = await resposta.json();

    const slider = document.getElementById('slider');

    dados.forEach(item => {
      const slide = document.createElement('div');
      slide.classList.add('slide');
      slide.innerHTML = `
        <img src="img/${item.img}" alt="">
        <h1>${item.nome}</h1>
        <h2>${item.funcao}</h2>
        <h2>${item.tecnologias}</h2>
        <h2>${item.data}</h2>

      `;
      slider.appendChild(slide);
    });

    // Adapta o tamanho do slider automaticamente com base no número de slides
    slider.style.width = `${dados.length * 100}%`;
  }

  carregarSlides();