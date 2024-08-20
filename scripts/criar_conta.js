// Definir imagem de perfil padrão ao carregar a página
document.getElementById("profile-pic").src = "https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.webp";

function adicionarConta(event) {
    event.preventDefault();

    const foto = document.getElementById('foto').value;
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const dataNascimento = document.getElementById('dataNascimento').value;
    const senha = document.getElementById('senha').value;
    const confirmarSenha = document.getElementById('confirmarSenha').value;
    const biografia = document.getElementById('biografia').value;

    // Validações
    let valid = true;

    if (foto === "") {
        document.getElementById('foto').style.borderColor = "red";
        document.getElementById('error-foto').innerText = "*Sua foto é obrigatória*";
        valid = false;
    } else {
        document.getElementById('foto').style.borderColor = "";
        document.getElementById('error-foto').innerText = "";
    }

    if (nome === "") {
        document.getElementById('nome').style.borderColor = "red";
        document.getElementById('error-nome').innerText = "*Nome é obrigatório*";
        valid = false;
    } else {
        document.getElementById('nome').style.borderColor = "";
        document.getElementById('error-nome').innerText = "";
    }

    if (email === "") {
        document.getElementById('email').style.borderColor = "red";
        document.getElementById('error-email').innerText = "*Email é obrigatório*";
        valid = false;
    } else {
        document.getElementById('email').style.borderColor = "";
        document.getElementById('error-email').innerText = "";
    }

    if (dataNascimento === "") {
        document.getElementById('dataNascimento').style.borderColor = "red";
        document.getElementById('error-dataNascimento').innerText = "*Digite a sua data de nascimento*";
        valid = false;
    } else {
        document.getElementById('dataNascimento').style.borderColor = "";
        document.getElementById('error-dataNascimento').innerText = "";
    }

    if (senha === "") {
        document.getElementById('senha').style.borderColor = "red";
        document.getElementById('error-senha').innerText = "*Esqueceu de digitar a senha*";
        valid = false;
    } else if (senha.length < 8 || senha.length > 16) {
        document.getElementById('senha').style.borderColor = "red";
        document.getElementById('error-senha').innerText = "A senha deve ter entre 8 e 16 caracteres";
        valid = false;
    } else {
        document.getElementById('senha').style.borderColor = "";
        document.getElementById('error-senha').innerText = "";
    }

    if (confirmarSenha === "") {
        document.getElementById('confirmarSenha').style.borderColor = "red";
        document.getElementById('error-confirmarSenha').innerText = "*Não se esqueça de confirmar a senha*";
        valid = false;
    } else if (confirmarSenha !== senha) {
        document.getElementById('confirmarSenha').style.borderColor = "red";
        document.getElementById('error-confirmarSenha').innerText = "As senhas não coincidem";
        valid = false;
    } else {
        document.getElementById('confirmarSenha').style.borderColor = "";
        document.getElementById('error-confirmarSenha').innerText = "";
    }

    if (biografia === "") {
        document.getElementById('biografia').style.borderColor = "red";
        document.getElementById('error-biografia').innerText = "*Biografia é obrigatória, faça uma breve descrição*";
        valid = false;
    } else {
        document.getElementById('biografia').style.borderColor = "";
        document.getElementById('error-biografia').innerText = "";
    }

    // Se todos os campos estiverem preenchidos corretamente, salva no localStorage
    if (valid) {
        const conta = {
            id: Date.now(),
            foto: foto,
            nome: nome,
            email: email,
            dataNascimento: dataNascimento,
            senha: senha,
            biografia: biografia,
        };

        let listaNoLocalStorage = JSON.parse(localStorage.getItem("contas")); // Pega a lista do localStorage
        if (listaNoLocalStorage === null) listaNoLocalStorage = [];

        listaNoLocalStorage.push(conta);

        localStorage.setItem("contas", JSON.stringify(listaNoLocalStorage)); // Salva no localStorage

        document.getElementById('form-conta').reset(); // Reseta o formulário
        
        // Limpa a imagem de perfil
        document.getElementById("profile-pic").src = "https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.webp"; // definir uma imagem padrão para quando atualizar a página
        document.getElementById("foto").value = ""; // Limpa o campo de URL da foto

        alert("Conta criada com sucesso!");
    }
}

// Atualiza a imagem de perfil conforme o usuário digita a URL
document.getElementById("foto").addEventListener("input", function () {
    var url = this.value;
    document.getElementById("profile-pic").src = url || "https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.webp";
});

// Contador de caracteres para a biografia
const bioTextarea = document.getElementById("biografia");
const charCount = document.getElementById("bio-char-count");

bioTextarea.addEventListener("input", function () {
    const length = bioTextarea.value.length;
    charCount.textContent = `${length}/300 caracteres`;
});

document.getElementById('form-conta').addEventListener('submit', adicionarConta); // Adiciona o evento de submissão