const icons = ["🍎", "🍌", "🍓", "🍇", "🍒", "🥝", "🍍", "🍊"];
let cards = [...icons, ...icons]; // duplicate for pairs
let flippedCards = [];
let lock = false;

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function createCard(icon) {
  const card = document.createElement("div");
  card.classList.add("card");
  card.innerHTML = `
    <div class="front">${icon}</div>
    <div class="back">❓</div>
  `;

  card.addEventListener("click", () => {
    if (lock || card.classList.contains("flipped")) return;

    card.classList.add("flipped");
    flippedCards.push(card);

    if (flippedCards.length === 2) {
      lock = true;
      const [first, second] = flippedCards;

      const icon1 = first.querySelector(".front").textContent;
      const icon2 = second.querySelector(".front").textContent;

      if (icon1 === icon2) {
        flippedCards = [];
        lock = false;
      } else {
        setTimeout(() => {
          first.classList.remove("flipped");
          second.classList.remove("flipped");
          flippedCards = [];
          lock = false;
        }, 1000);
      }
    }
  });

  return card;
}

function initGame() {
  const gameBoard = document.getElementById("gameBoard");
  shuffle(cards);
  cards.forEach(icon => {
    const card = createCard(icon);
    gameBoard.appendChild(card);
  });
}

initGame();
