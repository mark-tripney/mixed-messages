const quoteBlock = document.querySelector("blockquote p");
const char = document.querySelector(".character");
const source = document.querySelector("cite");

const quoteGenerator = {
  quotes: [
    {
      quote: "That Wizard came from the Moon!",
      character: "Ghost",
      game: "Destiny",
    },
    {
      quote:
        "I don't even have time to explain why I don't have time to explain.",
      character: "Exo Stranger",
      game: "Destiny",
    },
    {
      quote: "Ramen's on me!",
      character: "Cayde-6",
      game: "Destiny 2",
    },
    {
      quote: "The truth is ours to discover.",
      character: "Eris Morn",
      game: "Destiny 2",
    },
  ],
  getQuote() {
    const randomIndex = Math.floor(Math.random() * this.quotes.length);
    return this.quotes[randomIndex];
  },
  buildQuote() {
    const { quote, character, game } = quoteGenerator.getQuote();
    quoteBlock.innerText = quote;
    char.innerText = `— ${character}, `;
    source.innerText = game;
  },
};

function timeout() {
  setTimeout(function () {
    quoteGenerator.buildQuote();
    timeout();
  }, 3000);
}

// Set initial quote
quoteGenerator.buildQuote();
// Start cycling on timer
timeout();
