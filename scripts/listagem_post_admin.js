function loadPosts() {
    const postsTableBody = document.querySelector('#postsTable tbody');
    let posts = JSON.parse(localStorage.getItem('posts')) || [];

    postsTableBody.innerHTML = ''; // Limpa a tabela

    if (posts.length === 0) {
        const emptyRow = document.createElement('tr');
        const emptyCell = document.createElement('td');
        emptyCell.setAttribute('colspan', '6');
        emptyCell.textContent = 'Nenhum post encontrado.';
        emptyRow.appendChild(emptyCell);
        postsTableBody.appendChild(emptyRow);
    } else {
        posts.forEach((post, index) => {
            const row = document.createElement('tr');

            const tituloCell = document.createElement('td');
            tituloCell.textContent = post.titulo;
            row.appendChild(tituloCell);

            const descricaoCell = document.createElement('td');
            descricaoCell.textContent = post.descricao;
            row.appendChild(descricaoCell);

            const categoriaCell = document.createElement('td');
            categoriaCell.textContent = post.categoria;
            row.appendChild(categoriaCell);

            const dataCriacaoCell = document.createElement('td');
            dataCriacaoCell.textContent = new Date(post.dataCriacao).toLocaleDateString();
            row.appendChild(dataCriacaoCell);

            const fotoCell = document.createElement('td');
            const fotoImg = document.createElement('img');
            fotoImg.setAttribute('src', post.foto);
            fotoImg.setAttribute('alt', post.titulo);
            fotoImg.style.maxWidth = '100px';
            fotoCell.appendChild(fotoImg);
            row.appendChild(fotoCell);

            const actionCell = document.createElement('td');
            const deleteButton = document.createElement('button');
            deleteButton.classList.add('delete-btn');
            deleteButton.textContent = 'Deletar';
            deleteButton.onclick = () => deletePost(index);
            actionCell.appendChild(deleteButton);
            row.appendChild(actionCell);

            postsTableBody.appendChild(row);

            //  direciona para o post com double click
            row.ondblclick = () => window.location.href = `post.html?id=${post.id}`
        });
    }
}

function deletePost(index) {
    let posts = JSON.parse(localStorage.getItem('posts')) || [];
    posts = posts.filter((post, i) => i !== index);
    localStorage.setItem('posts', JSON.stringify(posts));
    loadPosts();
}

document.addEventListener('DOMContentLoaded', loadPosts);
