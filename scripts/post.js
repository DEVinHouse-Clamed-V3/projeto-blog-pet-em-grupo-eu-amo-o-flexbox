function loadPost() {
    const localStorageList = JSON.parse(localStorage.getItem('posts'))

    const url = new URL(window.location.href)
    const params = new URLSearchParams(url.search)
    const id = params.get('id')

    // pega id do post
    const post = localStorageList.find((item) => item.id == id)

    // verifica se o post nao existe, exibe erro, se existe, cria a tela do post
    if (!post) {
        const img = document.createElement('img')
        img.setAttribute('src', 'https://cdn-icons-png.freepik.com/256/14034/14034387.png?semt=ais_hybrid')
        erro.appendChild(img)

        const h2 = document.createElement('h2')
        h2.innerText = 'Post não encontrado :('
        erro.appendChild(h2)

        document.getElementById('post-container').style.display = 'none'

    } else {
        const img = document.getElementById('foto')
        img.setAttribute('src', post.foto)
        document.getElementById('titulo').innerText = post.titulo
        document.getElementById('descricao').innerText = post.descricao
        const data = document.getElementById('data')
        data.innerText = 'Criado em: ' + new Date(post.dataCriacao).toLocaleDateString('pt-br')
        document.getElementById('categoria').innerText = '#' + post.categoria

        document.getElementById('erro').style.display = 'none'
    }
}

document.addEventListener('DOMContentLoaded', loadPost)