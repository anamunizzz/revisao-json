document.getElementById("cadastroForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const login = document.getElementById("login").value;
    const senha = document.getElementById("senha").value;

    if (!nome || !email || !login || !senha) {
        alert("Preencha todos os campos!");
        return;
    }

    // Criando objeto usuário
    const usuario = { nome, email, login, senha };

    // Salvando no localStorage
    localStorage.setItem("usuarioCadastrado", JSON.stringify(usuario));

    alert("Cadastro realizado com sucesso!");
});

// Adicionando o evento de clique para o botão "Já Cadastrado"
document.getElementById("jaCadastradoBtn").addEventListener("click", function () {
    alert("Vá para a página de login!");
});
