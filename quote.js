const QUOTE_API = "https://api.quotable.io/random";
const quote = document.querySelector(".js_quote")

// function getSimpsonRandomQuote ()
//  {
//     fetch(`${QUOTE_API}`
//     ).then(function(response){
//         return response.json();
//     })
//     .then(function(json) {
//         const sentence = quote.querySelector(".js_sentence");
//         const simpson = quote.querySelector('.js_quoteImg');

//         sentence.innerText = json[0].quote;
//         simpson.innerHTML = `<span id="q_title"> Quotes By The Simpsons </span>`;
//         simpson.innerHTML += (`<img src = "${json[0].image}" width = "150" height="150">`);
//     });
//  }

//Get a random quote from quotable API() in (async/await)
 async function randomQuote() {
    const response = await fetch(`${QUOTE_API}`);
    const data = await response.json();
   
    const content = quote.querySelector(".js_content");
    const author = quote.querySelector(".js_author");
 
    content.innerHTML = `${data.content} `;
    author.innerHTML = `- ${data['author']} -`;
  }

 function init() {
   randomQuote();
}
 init();

