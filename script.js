document.getElementById("contato-form").addEventListener("submit", function (e) {
    e.preventDefault();

    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const mensagem = document.getElementById("mensagem").value;

    if (nome && email && mensagem) {
        alert("Obrigado pelo seu contato, " + nome + "! Responderemos em breve.");
        this.reset();
    } else {
        alert("Por favor, preencha todos os campos.");
    }
});
