// Array de itens
let itens = [
  {
    titulo: 'Café Tradicional',
    descricao: 'Clássico Café Coado, feito com os melhores grãos da casa',
    alt: 'Café Tradicional',
    imagemUrl: 'https://images.unsplash.com/photo-1492778297155-7be4c83960c7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    titulo: 'Café com Leite',
    descricao: 'Tradicional Café com Leite e cubos de gelo',
    alt: 'Café com Leite',
    imagemUrl: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    titulo: 'Cappucino',
    descricao: 'Cappucino com um toque de paçoca',
    alt: 'Cappucino',
    imagemUrl: 'https://images.unsplash.com/photo-1502462041640-b3d7e50d0662?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    titulo: 'Chocolate Quente',
    descricao: 'Chocolate Quente cremoso, amado por todos',
    alt: 'Chocolate Quente',
    imagemUrl: 'https://images.unsplash.com/photo-1517578239113-b03992dcdd25?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
];

// Adiciona itens ao localStorage se não existirem
if (!localStorage.getItem('produtos')) {
  localStorage.setItem('produtos', JSON.stringify(itens));
}

// Cria e exibe os cards dos produtos
const createCards = () => {
  let produtos = JSON.parse(localStorage.getItem('produtos')); // Obtém produtos
  for (let produto of produtos) {
    let card = createCardItem(produto); // Cria card
    let cardsDiv = document.getElementById('cards'); // Obtém div dos cards
    if (cardsDiv) {
      cardsDiv.insertAdjacentHTML('beforeend', card); // Adiciona card
    }
  }
};

// Gera HTML de um card
const createCardItem = (item) => {
  return `<div class="col m-2">
      <div class="card">
        <img src="${item.imagemUrl}" class="card-img-top" alt="${item.alt}">
        <div class="card-body">
          <h5 class="card-title">${item.titulo}</h5>
          <p class="card-text">${item.descricao}</p>
          <a href="#" class="btn btn-primary">Comprar</a>
        </div>
      </div>
    </div>`;
};

// Cria tabela de itens
const itemTable = () => {
  let produtos = JSON.parse(localStorage.getItem('produtos')); // Obtém produtos
  for (let i = 0; i < produtos.length; i++) {
    let linha = rowTable(produtos[i], i + 1); // Cria linha
    let tbody = document.getElementById('itensTBody'); // Obtém corpo da tabela
    tbody.insertAdjacentHTML('beforeend', linha); // Adiciona linha
  }
};

// Gera HTML de uma linha da tabela
const rowTable = (item, index) => {
  const tr = `<tr>
    <td>${index}</td>
    <td>${item.titulo}</td> 
    <td>${item.descricao}</td> 
    <td>${item.alt}</td>
    <td><img src='${item.imagemUrl}' class="card-img-top" alt="${item.alt}" style="max-width: 100px;"></td>
  </tr>`;
  return tr; // Retorna linha
};

// Cria cards ao carregar a página
createCards();

// Adiciona novo item ao localStorage
const itemAdd = (event) => {
  event.preventDefault(); // Previne envio padrão
  const titulo = document.getElementById('titulo').value; // Obtém título
  const descricao = document.getElementById('descricao').value; // Obtém descrição
  const alt = document.getElementById('alt').value; // Obtém texto alternativo
  const imagemUrl = document.getElementById('imagemUrl').value; // Obtém URL da imagem

  const newItem = { titulo, descricao, alt, imagemUrl }; // Novo item
  let produtos = JSON.parse(localStorage.getItem('produtos')); // Obtém produtos
  produtos.push(newItem); // Adiciona item
  localStorage.setItem('produtos', JSON.stringify(produtos)); // Atualiza localStorage
  location.reload(); // Recarrega página
  document.getElementById('formulario').reset(); // Reseta formulário
};

// Adiciona evento de envio ao formulário
const form = document.getElementById('formulario');
if (form) {
  form.addEventListener('submit', itemAdd);
}

// Cria tabela de itens se existir
if (document.getElementById('itensTBody')) {
  itemTable(); //Para preencher a tabela com itens
};