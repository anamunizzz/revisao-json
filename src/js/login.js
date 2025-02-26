document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault();

    const login = document.getElementById("modalLogin").value;
    const senha = document.getElementById("modalSenha").value;

    const usuarioCadastrado = JSON.parse(localStorage.getItem("usuarioCadastrado"));

    if (usuarioCadastrado && login === usuarioCadastrado.login && senha === usuarioCadastrado.senha) {
        alert("Login bem-sucedido!");
        localStorage.setItem("usuarioLogado", login);
    } else {
        alert("Login ou senha incorretos!");
    }
});
