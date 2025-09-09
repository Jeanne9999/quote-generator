const quotes = [
    "Knowledge is power. — Francis Bacon",
    "Education is the best provision for old age. — Aristotle",
    "Reputation follows virtue. — Socrates",
    "Knowing yourself is the beginning of all wisdom. — Aristotle",
    "Be the change you wish to see in the world. — Mahatma Gandhi",
    "The journey of a thousand miles begins with a single step. — Lao Tzu",
    "Everything flows. — Heraclitus",
    "Happiness depends upon ourselves. — Aristotle",
    "Life is what happens when you're busy making other plans. — John Lennon",
    "Freedom is never given; it is won. — A. Philip Randolph",
    "Failure is the mother of success. — Chinese proverb",
    "The pen is mightier than the sword. — Edward Bulwer-Lytton",
];

const quoteText = document.getElementById("quote");
const btn = document.getElementById("new-quote");

btn.addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  quoteText.textContent = quotes[randomIndex]; 
  

});
