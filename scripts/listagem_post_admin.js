function tempoLeitura(post) {
  const descricaoPost = post.descricao;
  const tempoLeitura = descricaoPost.length / 200;

  if (tempoLeitura <= 1) {
    return '1 min';
  } else {
    return `${Math.ceil(tempoLeitura)} min`; // Arredonda para cima o valor do tempo de leitura.
  }
}

function loadPosts() {
  const listaPosts = document.querySelector('.filme-posts');
  const posts = JSON.parse(localStorage.getItem('posts')) || [];

  //listaPosts.innerHTML = '';

  posts.forEach((post, index) => {
    const postElement = `
      <a href="" class="filme-card">
        <div class="image">
          <img src="images/${post.imagem}" alt="${post.titulo}">
        </div>
        <div class="info">
          <div class="top-info">
            <span>⭐ ${post.nota}</span>
          </div>
          <h3>${post.titulo}</h3>
          <span>${post.data} - ${tempoLeitura(post)} read</span>
        </div>
      </a>
    `;

    listaPosts.appendChild(postElement);
  });
}

function loadMorePosts() {
  const btnLoadMore = document.querySelector('.btn-load-more');
  btnLoadMore.addEventListener('click', loadPosts);
}

// Seleciona o modal e o botão de fechar
const modal = document.getElementById('modal');
const closeBtn = document.querySelector('.close-btn');

// Seleciona os elementos do modal que serão atualizados
const modalImg = document.getElementById('modal-img');
const modalTitle = document.getElementById('modal-title');

// Função para abrir o modal com os dados do card
function abrirModal(event) {
  event.preventDefault(); // Evita que o link seja seguido

  const card = event.currentTarget;

  // Atualiza os dados do modal com base no card clicado
  modalImg.src = card.querySelector('.image img').src;
  modalImg.alt = card.querySelector('.image img').alt;
  modalTitle.textContent = card.querySelector('h3').textContent;

  // Exibe o modal
  modal.classList.add('active');
}

// Função para fechar o modal
function fecharModal() {
  modal.classList.remove('active');
}

// Fecha o modal quando o usuário clica no botão de fechar
closeBtn.addEventListener('click', fecharModal);

// Fecha o modal quando o usuário clica fora do conteúdo do modal
window.addEventListener('click', function (event) {
  if (event.target === modal) {
    fecharModal();
  }
});

// Adiciona o evento de clique em cada card de filme
document.querySelectorAll('.filme-card').forEach((card) => {
  card.addEventListener('click', abrirModal);
});

document.addEventListener('DOMContentLoaded', loadPosts);
