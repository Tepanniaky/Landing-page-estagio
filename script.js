function buscar() {
  const input = document.getElementById("searchInput");
  const resultado = document.getElementById("searchResult");
  const termo = input.value.trim();

  if (termo !== "") {
    resultado.textContent = `Você buscou por: '${termo}'`;
    resultado.classList.remove("empty");  // Remove a classe de erro se houver busca
  } else {
    resultado.textContent = "Por favor, digite algo para buscar.";
    resultado.classList.add("empty");  // Adiciona uma classe de erro se estiver vazio
  }
}

// Faz com que a busca funcione tambem com enter
document.getElementById("searchInput").addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    buscar();
  }
});

let currentIndex = 0;
const items = document.querySelectorAll('.carousel-item');
const totalItems = items.length;

const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');

// Função que mostre o item atual
function showItem(index) {
  const container = document.querySelector('.carousel-container');
  const offset = -index * (items[0].offsetWidth + 10); // Considerando o gap
  container.style.transform = `translateX(${offset}px)`;
}

// Navega para o próximo item
nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % totalItems;
  showItem(currentIndex);
});

// Navega para o item anterior
prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + totalItems) % totalItems;
  showItem(currentIndex);
});

// Da inicio ao carrosel
showItem(currentIndex);
