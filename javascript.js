let searchText = document.getElementById("txtSearch");
const menu = document.getElementById("menu-con");
const searchbar = document.getElementById("searchbar");
const login = document.getElementsByClassName("container");
const aboutUs = document.getElementsByClassName("about-us");

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
const showSearch = document.createElement("div");
const backToSearchButton = document.createElement("button");
function renderResults(results, searchTerm) {
  let allObjects = [];
  allObjects = results.results;
  searchbar.style.display = "none";
  const searchInput = document.createTextNode(
    `Results related to "${searchTerm}"`
  );
  showSearch.appendChild(searchInput);
  backToSearchButton.innerText = "Back to Search";
  backToSearchButton.addEventListener("click", function () {
    removeJsDivs();
    showSearch.remove();
    showSearch.removeChild(showSearch.firstChild);
    searchbar.style.display = "flex";
    backToSearchButton.remove();
    backToSearchButton.removeChild(backToSearchButton.firstElementChild);
  });

  document.body.appendChild(backToSearchButton).className = "back-button";
  document.body.appendChild(showSearch).className = "show-search";

  for (let index = 0; index < allObjects.length; index++) {
    let object = allObjects[index];
    const myDiv = document.createElement("div");
    const myDiv2 = document.createElement("div");
    const title = document.createTextNode(object.original_title);
    const raiting = document.createTextNode(object.vote_average.toFixed(1));
    const moviePoster = document.createElement("img");

    const baseUrl = "https://image.tmdb.org/t/p/";
    const posterSize = "w185";
    const posterPath = object.poster_path;
    moviePoster.src = `${baseUrl}${posterSize}${posterPath}`;
    if (posterPath === null) {
      moviePoster.src =
        "https://t3.ftcdn.net/jpg/04/62/93/66/360_F_462936689_BpEEcxfgMuYPfTaIAOC1tCDurmsno7Sp.jpg";
    }
    moviePoster.style.width = "180px";
    moviePoster.style.height = "300px";
    myDiv.style.fontSize = "15px";
    myDiv.style.textAlign = "center";
    myDiv2.style.backgroundImage =
      "linear-gradient(90deg,#213d89,#2151b3,#1941c4)";
    myDiv2.style.textAlign = "center";
    myDiv2.style.color = "white";
    myDiv2.style.borderRadius = "10px";
    myDiv2.style.display = "flex";
    myDiv2.style.padding = "7px";
    myDiv2.style.position = "relative";
    myDiv2.style.float = "right";
    myDiv2.style.bottom = "25px";
    myDiv2.style.width = "fit-content";

    myDiv2.appendChild(raiting);
    myDiv.appendChild(title);
    myDiv.appendChild(moviePoster);
    myDiv.appendChild(myDiv2);
    document.body.appendChild(myDiv).className = "con";
  }
}

function ting(item) {
  if (item == 1) {
    toggleSearchBar();
    removeJsDivs();
    showSearch.remove();
    showSearch.removeChild(showSearch.firstChild);
  } else if (item == 2) {
  } else if (item == 3) {
    toggleAboutUs();
  } else if (item == 4) {
    toggleLogIn();
  }
}

function toggleMenu() {
  if (menu.style.display === "none") {
    menu.style.display = "flex";
  } else {
    menu.style.display = "none";
  }
}

function toggleSearchBar() {
  if (searchbar.style.display === "none") {
    searchbar.style.display = "flex";
    login[0].style.display = "none";
    aboutUs[0].style.display = "none";
  } else {
    searchbar.style.display = "none";
  }
}

function toggleLogIn() {
  if (login[0].style.display === "none") {
    login[0].style.display = "block";
    searchbar.style.display = "none";
    aboutUs[0].style.display = "none";
  } else {
    login[0].style.display = "none";
  }
}

function toggleAboutUs() {
  if (aboutUs[0].style.display === "none") {
    aboutUs[0].style.display = "block";
    searchbar.style.display = "none";
    login[0].style.display = "none";
  } else {
    aboutUs[0].style.display = "none";
  }
}
