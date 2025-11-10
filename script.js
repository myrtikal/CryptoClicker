let count = 0;
let level = 1;
let quotes = [];

async function loadQuotes() {
  const res = await fetch('quotes.json');
  quotes = await res.json();
  updateQuote();
}

function updateQuote() {
  const random = quotes[Math.floor(Math.random() * quotes.length)];
  document.getElementById('quote').textContent = `"${random}"`;
}

document.addEventListener('DOMContentLoaded', () => {
  loadQuotes();

  document.getElementById('mine-btn').addEventListener('click', () => {
    count++;
    document.getElementById('count').textContent = count;

    if (count % 1000 === 0) {
      level++;
      document.getElementById('lvl').textContent = level;
      updateQuote();
    }
  });
});
