var textQuote = document.getElementById("textQuote");
var authorQuote = document.getElementById("authorQuote");
var mainBtn = document.getElementById("mainBtn");
var quotesContainer = [
  {
    qoute:
      "“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”",
    author: "― Dr. Seuss",
  },
  {
    qoute: "“You only live once, but if you do it right, once is enough.”",
    author: "― Mae West",
  },
  {
    qoute: "“Be the change that you wish to see in the world.”",
    author: "― Mahatma Gandhi",
  },
  {
    qoute:
      "“In three words I can sum up everything I've learned about life: it goes on.”",
    author: "― Robert Frost",
  },
  {
    qoute: "“A friend is someone who knows all about you and still loves you.”",
    author: "― Elbert Hubbard",
  },
  {
    qoute:
      "“To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.”",
    author: "― Ralph Waldo Emerson",
  },
  {
    qoute: "“If you tell the truth, you don't have to remember anything.”",
    author: "― Mark Twain",
  },
  {
    qoute:
      "“I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.”",
    author: "― Maya Angelou",
  },
  {
    qoute:
      "“Do more than belong: participate. Do more than care: help. Do more than believe: practice. Do more than forgive: forget. Do more than dream: work.”",
    author: "― William Arthur Ward",
  },
  {
    qoute:
      "“You are imperfect, permanently and inevitably flawed. And you are beautiful.”",
    author: "― Amy Bloom",
  },
];
var previousQuote = null;

mainBtn.onclick = function () {
  var randomQuote;
  do {
    // Select a random quote from the quotesContainer
    randomQuote =
      quotesContainer[Math.floor(Math.random() * quotesContainer.length)];
  } while (randomQuote === previousQuote); // Keep selecting a new quote until it is not the same as the previous one
  previousQuote = randomQuote; // Set the previous quote to the selected quote
  textQuote.textContent = randomQuote.qoute;
  authorQuote.textContent = randomQuote.author;
};
