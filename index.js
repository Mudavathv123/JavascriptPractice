let searchResultsElement = document.getElementById("searchResults");
let searchInputElement = document.getElementById("searchInput")
let loaderElement = document.getElementById("loader")


function search(userInput){
    let serachUrl = `https://apis.ccbp.in/wiki-search?search= ${userInput}`;
    
    fetch(serachUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        let { search_results } = data;
    
        displaySerachResults(search_results);
      });
    }
    

function retriveUserInput(event){
    if(event.key === "Enter"){
        loaderElement.classList.remove("show-loader")
        searchResultsElement.textContent = ""
        let searchInputText = searchInputElement.value
        search(searchInputText)
      
        searchInputElement.value = "" 
    }
}

searchInputElement.addEventListener("keydown",retriveUserInput)


function createAndDisplayResults(result) {
  console.log(result);
  const { title, link, description } = result;

  let listItemElement = document.createElement("li");
  listItemElement.classList.add("list-item-container");
  searchResultsElement.appendChild(listItemElement);

  let titleElement = document.createElement("a");
  titleElement.textContent = title;
  titleElement.href = link;
  titleElement.target = "_blank";
  titleElement.classList.add("title");
  listItemElement.appendChild(titleElement);

  let linkElement = document.createElement("a");
  linkElement.textContent = link;
  linkElement.href = link;
  linkElement.target = "_blank";
  linkElement.classList.add("link");
  listItemElement.appendChild(linkElement);

  let descriptionElement = document.createElement("p");
  descriptionElement.textContent = description;
  descriptionElement.classList.add("description");
  listItemElement.appendChild(descriptionElement);
}


function displaySerachResults(results) {

  for (let result of results) {
    loaderElement.classList.add("show-loader")
    createAndDisplayResults(result);
  }
}
