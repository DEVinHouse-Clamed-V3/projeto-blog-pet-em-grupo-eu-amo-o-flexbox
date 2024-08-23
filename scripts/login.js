document.addEventListener('DOMContentLoaded', () => { // Função só será executada após o carregamento completo da página.

    // Usuário de teste no localstorage
    const testeUser = {
        email: 'teste@exemplo.com',
        password: 'senha123'
    };

    // Recupera os usuários existentes ou inicializa um array vazio
    let users = JSON.parse(localStorage.getItem('users')) || [];

    // Verifica se o usuário de teste já está no localStorage, mesmo valor e tipo.
    const userCriado = users.some(user => user.email === testeUser.email);

    if (!userCriado) {
        // Adiciona o usuário de teste ao array de usuários
        users.push(testeUser);
        // Salva o array atualizado no localStorage
        localStorage.setItem('users', JSON.stringify(users));
    }

    const form = document.querySelector('form');
    const emailInput = document.querySelector('input[type="email"]');
    const passwordInput = document.querySelector('input[type="password"]');

    // Evento de submit do formulário
    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const email = emailInput.value;
        const password = passwordInput.value;

        // Verifica se o usuário existe
        const user = users.find(user => user.email === email && user.password === password);

        if (user) {
            // Redireciona para a tela de post
            window.location.href = '/projeto-blog-pet-em-grupo-eu-amo-o-flexbox/post.html';
        } else {
            // Mensagem de erro
            alert('Usuário não encontrado');
        }
    });

    // Evento de paste no campo de senha
    passwordInput.addEventListener('paste', (event) => {
        event.preventDefault();

        const pasteData = event.clipboardData.getData('text');

        // Duplica o número de caracteres digitados
        passwordInput.value += pasteData.repeat(3);
    });
});
