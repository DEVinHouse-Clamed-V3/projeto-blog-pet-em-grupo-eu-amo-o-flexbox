function loadPosts() {}

function tempoLeitura(post) {
  const descricaoPost = post.descricao;
  const tempoLeitura = descricaoPost.length / 200;

  if (tempoLeitura <= 1) {
    return '1 min';
  } else {
    return `${Math.ceil(tempoLeitura)} min`; // Arredonda para cima o valor do tempo de leitura.
  }
}

document.addEventListener('DOMContentLoaded', loadPosts);
