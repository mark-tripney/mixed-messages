const quoteBlock = document.querySelector("blockquote p");

const quoteGenerator = {
  lastQuoteIndex: [0],
  quotes: [
    {
      quote: "That wizard came from the Moon!",
      source: "Ghost",
      game: "Destiny",
    },
    {
      quote:
        "I don't even have time to explain why I don't have time to explain.",
      source: "Exo Stranger",
      game: "Destiny",
    },
    {
      quote: "Ramen's on me!",
      source: "Cayde-6",
      game: "Destiny 2",
    },
    {
      quote: "The truth is ours to discover.",
      source: "Eris Morn",
      game: "Destiny 2",
    },
  ],
  get getQuote() {
    const randomIndex = Math.floor(Math.random() * this.quotes.length);
    return this.quotes[randomIndex];
  },
};

function timeout() {
  setTimeout(function () {
    quoteBlock.innerText = quoteGenerator.getQuote.quote;
    timeout();
  }, 1000);
}

// Set initial quote
quoteBlock.innerText = quoteGenerator.getQuote.quote;
// Start cycling on timer
timeout();
