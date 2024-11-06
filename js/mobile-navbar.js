
// Seleciona o menu de navegação, o overlay e o botão de menu móvel a partir do DOM
const menu = document.querySelector('.nav-list'); // Seleciona o elemento com a classe "nav-list" (menu de navegação)
const overlay = document.querySelector('.overlay'); // Seleciona o elemento com a classe "overlay" (camada que fica atrás do menu)
const mobileMenuButton = document.querySelector('.mobile-menu'); // Seleciona o botão de menu móvel (hamburguer)

// Adiciona um evento de clique ao botão do menu móvel
mobileMenuButton.addEventListener('click', () => {
  // Alterna a classe "active" para abrir ou fechar o menu
  menu.classList.toggle('active'); // Adiciona ou remove a classe "active" para exibir ou ocultar o menu
  overlay.classList.toggle('active'); // Ativa ou desativa o overlay, exibindo ou ocultando a camada semitransparente
});

// Adiciona um evento de clique no overlay para fechar o menu
overlay.addEventListener('click', () => {
  // Remove a classe "active" do menu e do overlay para fechar o menu e ocultar a camada
  menu.classList.remove('active'); // Remove a classe "active" do menu para escondê-lo
  overlay.classList.remove('active'); // Remove a classe "active" do overlay para esconder a camada
});
