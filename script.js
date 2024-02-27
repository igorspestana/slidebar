// Seleciona o botão de rolagem para a esquerda pelo seu ID
const scrollLeftButton = document.getElementById("scrollLeftButton");
// Seleciona o botão de rolagem para a direita pelo seu ID
const scrollRightButton = document.getElementById("scrollRightButton");
// Seleciona o contêiner pelo seletor de classe ".container"
const container = document.querySelector(".container");
// Define o tamanho do incremento para rolagem
const step = 120;
// Inicializa a posição atual do contêiner
let currentPosition = 0;

// Adiciona um ouvinte de evento para o clique no botão de rolagem para a esquerda
scrollLeftButton.addEventListener("click", () => {
  // Atualiza a posição atual, garantindo que não exceda a posição 0 (início)
  currentPosition = Math.min(currentPosition + step, 0);
  // Aplica a transformação CSS para mover o contêiner horizontalmente
  container.style.transform = `translateX(${currentPosition}px)`;
});

// Adiciona um ouvinte de evento para o clique no botão de rolagem para a direita
scrollRightButton.addEventListener("click", () => {
  // Obtém a largura do contêiner
  const containerWidth = container.offsetWidth;
  // Obtém a largura do elemento pai do contêiner
  const wrapperWidth = container.parentElement.offsetWidth;
  // Calcula o máximo que o contêiner pode ser rolado
  const maxScroll = containerWidth - wrapperWidth;
  // Atualiza a posição atual, garantindo que não exceda o máximo de rolagem
  currentPosition = Math.max(currentPosition - step, -maxScroll);
  // Aplica a transformação CSS para mover o contêiner horizontalmente
  container.style.transform = `translateX(${currentPosition}px)`;
});