// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each 'article' in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Use your function to create a card for each of the articles and add the card to the DOM.

axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then(function (response) {
      console.log('Response: ', response.data.articles);
      const data = response.data.articles
      const cards = document.querySelector(".cards-container")

    for(let i = 0; i < response.data.articles.length; i++) {

        let card = document.createElement("div")
        let headline = document.createElement("div")
        // let author



        tab.classList.add("tab")
        tab.textContent = response.data.articles[i]
        cards.appendChild(tab)
    
      }
    })
    .catch(function (handleError) {
      console.log('Error: ', handleError);
    },[])
