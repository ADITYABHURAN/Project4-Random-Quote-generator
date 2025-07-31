const quotes = [
  "The best way to get started is to quit talking and begin doing. – Walt Disney",
  "Don’t let yesterday take up too much of today. – Will Rogers",
  "It’s not whether you get knocked down, it’s whether you get up. – Vince Lombardi",
  "If you are working on something exciting, it will keep you motivated. – Steve Jobs",
  "Success is not final; failure is not fatal: It is the courage to continue that counts. – Winston Churchill",
  "Hard work beats talent when talent doesn’t work hard. – Tim Notke",
  "Believe you can and you’re halfway there. – Theodore Roosevelt",
  "Dream big and dare to fail. – Norman Vaughan",
  "Do what you can with all you have, wherever you are. – Theodore Roosevelt",
  "The harder you work for something, the greater you’ll feel when you achieve it. – Unknown",
  "Don’t watch the clock; do what it does. Keep going. – Sam Levenson",
  "Great things never come from comfort zones. – Neil Strauss",
  "Push yourself, because no one else is going to do it for you. – Unknown",
  "Success doesn’t come from what you do occasionally, it comes from what you do consistently. – Marie Forleo",
  "Little by little, a little becomes a lot. – Tanzanian Proverb",
  "Opportunities don’t happen. You create them. – Chris Grosser",
  "Go the extra mile. It’s never crowded. – Wayne Dyer",
  "Your limitation—it’s only your imagination. – Unknown",
  "Do what you love and success will follow. – Oprah Winfrey",
  "You don’t have to be great to start, but you have to start to be great. – Zig Ziglar",
  "It always seems impossible until it’s done. – Nelson Mandela",
  "Start where you are. Use what you have. Do what you can. – Arthur Ashe",
  "Act as if what you do makes a difference. It does. – William James",
  "The future depends on what you do today. – Mahatma Gandhi",
  "Don’t limit your challenges. Challenge your limits. – Jerry Dunn"
];
//fetched ids from html 
const quoteElement = document.getElementById('quote');
const authorElement = document.getElementById('author');
const generateQuote = document.getElementById('generate-quote');

// Make a copy of quotes array to track unused quotes
let unusedQuotes = [...quotes];
//Aditya B
function generateRandomQuote() {
    if (unusedQuotes.length === 0) {
        // Optional: Reset the unusedQuotes array once all quotes are shown
        // Comment out this line if you don't want repeats ever
        unusedQuotes = [...quotes];
        alert("All quotes have been displayed. Starting over!");
    }

    const randomIndex = Math.floor(Math.random() * unusedQuotes.length); //math.random generates  a random number between 0 and 1 but multiplying it with unusedquotes.length gives the values between 1 to 8/9 so thats how it selects .
    const quote = unusedQuotes[randomIndex];

    quoteElement.innerText = quote;

    // Remove the used quote from the unusedQuotes array
    unusedQuotes.splice(randomIndex, 1);
}

generateQuote.addEventListener('click', generateRandomQuote);
