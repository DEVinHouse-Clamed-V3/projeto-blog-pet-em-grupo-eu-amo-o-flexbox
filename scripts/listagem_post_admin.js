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

  posts.forEach((post) => {
    const postElement = `
      <a id=${post.id} href="" class="filme-card">
        <div class="image">
          <img src="${post.foto}" alt="${post.titulo}">
        </div>
        <div class="info">
          <div class="top-info">
            <span>⭐ 10</span>
          </div>
          <h3>${post.titulo}</h3>
          <span>${post.dataCriacao} - ${tempoLeitura(post)} read</span>
        </div>
      </a>
    `;

    listaPosts.innerHTML += postElement;
  });
}

function loadMorePosts() {
  const btnLoadMore = document.querySelector('.btn-load-more');
  if (btnLoadMore) {
    btnLoadMore.addEventListener('click', () => {
      console.log('Botão carregar mais posts foi clicado');
      loadPosts(); // Carrega mais posts ao clicar
    });
  }
}

document.addEventListener('DOMContentLoaded', () => {
  loadPosts();
  loadMorePosts();
});
