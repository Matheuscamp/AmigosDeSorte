// Função para cadastro
document
  .getElementById("registration-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Verifica se o usuário já existe
    if (localStorage.getItem(username)) {
      alert(
        "Este usuário já existe. Por favor, escolha outro nome de usuário."
      );
      return;
    }
    if (password.length < 6) {
      alert("A senha deve ter pelo menos 6 caracteres.");
      return;
    }

    // Salva os dados no localStorage
    localStorage.setItem(username, password);
    alert("Cadastro realizado com sucesso!");
    document.getElementById("registration-form").reset();
  });
