// Função que é chamada ao clicar no botão
const incrementarOnclick = (event) => {
  console.log('Clicou no botão'); // Exibe mensagem no console
};

// Função que é chamada ao passar o mouse sobre o botão
const incrementarOnmouseover = (event) => {
  console.log('Passou o mouse no botão'); // Exibe mensagem no console
};

// Obtém o botão pelo ID
let incrementarButton = document.getElementById('incrementar');

// Define a função de clique para o botão
incrementarButton.onclick = incrementarOnclick;

// Define a função de mouseover para o botão
incrementarButton.onmouseover = incrementarOnmouseover;
