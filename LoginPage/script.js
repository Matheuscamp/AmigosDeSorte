// Função para login
document.getElementById("login-form").addEventListener("submit", function (e) {
  e.preventDefault();
  const loginUsername = document.getElementById("login-username").value;
  const loginPassword = document.getElementById("login-password").value;

  // Verifica se o usuário existe e a senha está correta
  const storedPassword = localStorage.getItem(loginUsername);
  if (storedPassword === loginPassword) {
    alert("Login bem-sucedido!");
    document.getElementById("login-form").reset();
    window.location.href = "../index.html"; // Redireciona para outra página após o login
  } else {
    alert("Nome de usuário ou senha incorretos. Tente novamente.");
  }
});
