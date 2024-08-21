function cadastrarPost(event) {
  event.preventDefault();

  const reader = new FileReader();
  const fileInput = document.getElementById('foto');
  const file = fileInput.files[0];

  reader.onloadend = function () {
    const post = {
      id: Date.now(),
      titulo: document.getElementById('titulo').value,
      descricao: document.getElementById('descricao').value,
      dataCriacao: new Date().toLocaleDateString(),
      categoria: document.getElementById('categoria').value,
      foto: reader.result, // base64 da imagem
    };

    let posts = JSON.parse(localStorage.getItem('posts')) || [];
    posts.push(post);
    localStorage.setItem('posts', JSON.stringify(posts));

    alert('Post salvo com sucesso!');
    document.getElementById('postForm').reset();
  };

  if (file) {
    reader.readAsDataURL(file); // Converter o arquivo para base64
  } else {
    alert('Por favor, selecione uma imagem.');
  }
}

document.getElementById('postForm').addEventListener('submit', cadastrarPost);
