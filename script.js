const APIURL =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI =
  "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";
const getMovies = async (api) => {
  const response = await fetch(api);
  const data = await response.json();
  showMovies(data.results);
};

//Popular search
const moiveBox = document.querySelector("#movie-box");
const showMovies = (data) => {
  moiveBox.innerHTML = "";
  data.forEach((item) => {
    const box = document.createElement("div");
    box.classList.add("box");
    box.innerHTML = `
    <img src="${IMGPATH + item.poster_path}" alt="" />
    <div class="overlay">
      <div class="title">
        <h2>${item.original_title}</h2>
        <span>${Math.floor(item.vote_average * 10) / 10}</span>
      </div>
      <div class="overview">
        <h3>Overview:</h3>
        <p>${item.overview}</p>
      </div>
    </div>
    `;
    moiveBox.appendChild(box);
  });
};

// search

document.querySelector("#search").addEventListener("keyup", function (e) {
  if (e.target.value != "") {
    getMovies(SEARCHAPI + e.target.value);
  } else {
    getMovies(APIURL);
  }
});

getMovies(APIURL);
