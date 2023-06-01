let searchText = document.getElementById("txtSearch");
const menu = document.getElementById("menu-con");
const searchbar = document.getElementById("searchbar");
const login = document.getElementsByClassName("container");

searchText.onkeydown = async function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    removeJsDivs();
    let searchTerm = searchText.value;
    let results = await search(searchTerm);
    renderResults(results, searchTerm);
  }
};

function removeJsDivs() {
  const jsDivs = document.querySelectorAll(".con");
  jsDivs.forEach((div) => div.remove());
}

async function search(searchString) {
  let apiKey = "7f26946c05328556f6f899a4d314a61d";
  var url = `https://api.themoviedb.org/3/search/movie?query=${searchString}&api_key=${apiKey}`;
  let response = await fetch(url);
  let json = await response.json();
  return json;
}

function renderResults(results, searchTerm) {
  let allObjects = [];
  allObjects = results.results;
  searchbar.style.display = "none";
  const searchInput = document.createTextNode(
    `Results related to "${searchTerm}"`
  );
  const showSearch = document.createElement("div");
  showSearch.appendChild(searchInput);
  document.body.appendChild(showSearch).className = "show-search";
  for (let index = 0; index < allObjects.length; index++) {
    let object = allObjects[index];
    console.log("loopar igenom objekten", object);

    const myDiv = document.createElement("div");
    const title = document.createTextNode(object.original_title);
    const raiting = document.createTextNode(object.vote_average);
    const myImg = document.createElement("img");

    const baseUrl = "https://image.tmdb.org/t/p/";
    const posterSize = "w185";
    const posterPath = object.poster_path;
    myImg.src = `${baseUrl}${posterSize}${posterPath}`;
    if (posterPath === null) {
      myImg.src =
        "https://t3.ftcdn.net/jpg/04/62/93/66/360_F_462936689_BpEEcxfgMuYPfTaIAOC1tCDurmsno7Sp.jpg";
    }
    myImg.style.width = "180px";
    myImg.style.height = "300px";
    myDiv.style.fontSize = "large";
    myDiv.style.textAlign = "center";
    myDiv.appendChild(title);
    myDiv.appendChild(myImg);
    document.body.appendChild(myDiv).className = "con";
  }
}

function ting(item) {
  removeJsDivs();

  if (item == 1) {
    searchBar();
  } else if (item == 2) {
  } else if (item == 3) {
  } else if (item == 4) {
    logIn();
  }
}

function toggleMenu() {
  if (menu.style.display === "none") {
    menu.style.display = "flex";
  } else {
    menu.style.display = "none";
  }
}

function searchBar() {
  if (searchbar.style.display === "none") {
    searchbar.style.display = "flex";
    login[0].style.display = "none";
  } else {
    searchbar.style.display = "none";
  }
}

function logIn() {
  if (login[0].style.display === "none") {
    login[0].style.display = "block";
    searchbar.style.display = "none";
  } else {
    login[0].style.display = "none";
  }
}
