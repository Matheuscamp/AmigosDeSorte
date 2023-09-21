// Variável global para armazenar os números disponíveis
var numerosDisponiveis = [];

// Função para calcular o valor a pagar
function calcularValorAPagar(quantidade, valorUnitario) {
  return (quantidade * valorUnitario).toFixed(2);
}

// Função para atualizar o valor a pagar em tempo real
function atualizarValorAPagar() {
  var quantidadeNumeros = parseInt(
    document.getElementById("quantidadeNumeros").value
  );

  // Verifique se a quantidade de números é válida
  if (
    !isNaN(quantidadeNumeros) &&
    quantidadeNumeros >= 1 &&
    quantidadeNumeros <= 999999
  ) {
    var valorRifa = parseFloat(
      document.getElementById("valorRifa").textContent
    );
    var valorAPagar = calcularValorAPagar(quantidadeNumeros, valorRifa);

    // Atualize o campo "Valor a Pagar"
    document.getElementById("valorAPagar").textContent = valorAPagar;
  } else {
    console.log("Quantidade inválida. Insira um número entre 1 e 999.999.");
  }
}

// Inicialize a lista de números disponíveis ao carregar a página
window.addEventListener("load", function () {
  inicializarNumerosDisponiveis();
});

// Função para inicializar a lista de números disponíveis
function inicializarNumerosDisponiveis() {
  for (var i = 0; i <= 999999; i++) {
    numerosDisponiveis.push(i);
  }
}

// Função para sorteio dos números
function sortearNumeros(quantidade) {
  var numerosSorteados = [];

  if (quantidade >= 1 && quantidade <= 999999) {
    for (var i = 0; i < quantidade; i++) {
      // Verifique se ainda há números disponíveis para sortear
      if (numerosDisponiveis.length === 0) {
        console.log("Não há mais números disponíveis para sorteio.");
        break;
      }

      // Escolha aleatoriamente um índice da lista de números disponíveis
      var indiceSorteado = Math.floor(
        Math.random() * numerosDisponiveis.length
      );

      // Obtenha o número sorteado
      var numeroSorteado = numerosDisponiveis[indiceSorteado];

      // Formate o número para ter seis caracteres, preenchendo com zeros à esquerda
      var numeroFormatado = ("000000" + numeroSorteado).slice(-6);

      // Remova o número sorteado da lista de números disponíveis
      numerosDisponiveis.splice(indiceSorteado, 1);

      numerosSorteados.push(numeroFormatado);
    }
  } else {
    console.log("Quantidade inválida. Insira um número entre 1 e 999.999.");
  }

  return numerosSorteados;
}

// Função para manipular o clique no botão "Pagar"
document.getElementById("pagar").addEventListener("click", function () {
  var quantidadeNumeros = parseInt(
    document.getElementById("quantidadeNumeros").value
  );

  // Verifique se a quantidade de números é válida
  if (
    !isNaN(quantidadeNumeros) &&
    quantidadeNumeros >= 1 &&
    quantidadeNumeros <= 999999
  ) {
    var numerosSorteados = sortearNumeros(quantidadeNumeros);
    console.log("Números Sorteados:", numerosSorteados);
  } else {
    console.log("Quantidade inválida. Insira um número entre 1 e 999.999.");
  }
});

// Inicialize a lista de números disponíveis ao carregar a página
window.addEventListener("load", function () {
  inicializarNumerosDisponiveis();
});

// Função para manipular o clique no botão "Pesquisar"
document.getElementById("pesquisar").addEventListener("click", function () {
  var numeroPesquisa = parseInt(
    document.getElementById("numeroPesquisa").value
  );

  // Verifique se o número de pesquisa é válido
  if (
    !isNaN(numeroPesquisa) &&
    numeroPesquisa >= 0 &&
    numeroPesquisa <= 999999
  ) {
    var numeroFormatado = ("000000" + numeroPesquisa).slice(-6); // Formate o número para ter seis caracteres
    if (numerosDisponiveis.includes(numeroFormatado)) {
      document.getElementById("resultadoPesquisa").textContent =
        "Número ainda não sorteado.";
    } else {
      document.getElementById("resultadoPesquisa").textContent =
        "Número já foi sorteado.";
    }
  } else {
    document.getElementById("resultadoPesquisa").textContent =
      "Número inválido. Insira um número entre 0 e 999.999.";
  }
});
