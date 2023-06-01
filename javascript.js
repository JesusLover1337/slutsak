let searchText = document.getElementById("txtSearch");

searchText.onkeydown = async function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    removeJsDivs();
    let searchTerm = searchText.value;
    let results = await search(searchTerm);
    renderResults(results);
  }
};

function removeJsDivs() {
  const jsDivs = document.querySelectorAll(".con");
  console.log(jsDivs);
  jsDivs.forEach((div) => div.remove());
}

async function search(searchString) {
  let apiKey = "7f26946c05328556f6f899a4d314a61d";
  var url = `https://api.themoviedb.org/3/search/movie?query=${searchString}&api_key=${apiKey}`;
  let response = await fetch(url);
  let json = await response.json();
  return json;
}

function renderResults(results) {
  let allObjects = [];
  allObjects = results.results;

  for (let index = 0; index < allObjects.length; index++) {
    let object = allObjects[index];
    console.log("loopar igenom objekten ", object);
    const myDiv = document.createElement("div");
    const myText = document.createTextNode(object.original_title);
    var a = document.createElement("a");
    a.appendChild(myText);
    a.title = "More information";
    a.href = "index2.html";
    const myImg = document.createElement("img");

    const baseUrl = "https://image.tmdb.org/t/p/";
    const posterSize = "w185";
    const posterPath = object.poster_path;
    myImg.src = `${baseUrl}${posterSize}${posterPath}`;

    myDiv.style.fontSize = "large";
    myDiv.style.textAlign = "center";
    myDiv.appendChild(a);
    myDiv.appendChild(myImg);
    document.body.appendChild(myDiv).className = "con";
  }
}

function toggleMenu() {
  console.log("pressed");
  const menu = document.getElementById("menu-con");
  if (menu.style.display === "none") {
    menu.style.display = "flex";
  } else {
    menu.style.display = "none";
  }
}

function searchBar() {
  const searchbar = document.getElementById("searchbar");
  if (searchbar.style.display === "none") {
    searchbar.style.display = "flex";
  } else {
    searchbar.style.display = "none";
  }
}

function ting() {
  const baseUrl = "https://image.tmdb.org/t/p/";
  const popularity = "discover/movie?sort_by=popularity.desc";
  let url = `${baseUrl}${popularity}`;
  let response = fetch(url);
  let json = response.json();
  renderResults(json);
}
