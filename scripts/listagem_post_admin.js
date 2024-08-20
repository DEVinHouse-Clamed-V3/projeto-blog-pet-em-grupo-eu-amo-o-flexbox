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

document.addEventListener('DOMContentLoaded', loadPosts);
