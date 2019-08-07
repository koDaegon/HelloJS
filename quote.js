const QUOTE_API = "https://thesimpsonsquoteapi.glitch.me/quotes";
const quote = document.querySelector(".js_quote")

function getRandomQuote ()
 {
    fetch(`${QUOTE_API}`
    ).then(function(response){
        return response.json();
    })
    .then(function(json) {
        const sentence = quote.querySelector(".js_sentence");
        const simpson = quote.querySelector('.js_quoteImg');

        sentence.innerText = json[0].quote;
        simpson.innerHTML = `<span id="q_title"> Quotes By The Simpsons </span>`;
        simpson.innerHTML += (`<img src = "${json[0].image}" width = "150" height="150">`);
    });
 }

 function init() {
    getRandomQuote();
 }
 init();
