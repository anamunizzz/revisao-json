document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault();

    const login = document.getElementById("modalLogin").value;
    const senha = document.getElementById("modalSenha").value;

    const usuarioCadastrado = JSON.parse(localStorage.getItem("usuarioCadastrado"));

    if (usuarioCadastrado && login === usuarioCadastrado.login && senha === usuarioCadastrado.senha) {
        alert("Login bem-sucedido!");
        localStorage.setItem("usuarioLogado", login);
        // Redirecione para a página desejada após o login bem-sucedido
        window.location.href = "http://127.0.0.1:5500/index.html"; // Ajuste conforme necessário
    } else {
        alert("Login ou senha incorretos!");
    }
});
