import {
    API_KEY, BASE_URL,
    IMG_URL,
    language,
} from './api.js'

const button = document.querySelector("#btn");

button.addEventListener("click", () => {
    getMovie();
    showMovies();
})

function getMovie() {
    let resultArray = Math.floor(Math.random() * 20);
    fetch(`${BASE_URL}popular?${API_KEY}&${language}`)
        .then(response => response.json())
        .then(data => {
            imgApi.src = IMG_URL + "/" + data.results[resultArray].poster_path;
            titleApi.textContent = data.results[resultArray].original_title;
            descriptionApi.textContent = data.results[resultArray].overview;

        })
        .catch(error => console.error(error));
}



function showMovies() {
    const body = document.querySelector("body");
    const movieApi = document.querySelector("#movieApi");
    const imgApi = document.querySelector("#imgApi");
    const contentMovieApi = document.querySelector("#contentMovieApi");

    body.style.height = "100%";

    movieApi.style.width = "800px";
    movieApi.style.height = "319px";
    movieApi.style.marginBottom = "30px";

    imgApi.style.width = "171px";
    imgApi.style.height = "243px";
    imgApi.style.marginRight = "25px"

    contentMovieApi.style.width = "600px";
    contentMovieApi.style.height = "274px";
    contentMovieApi.style.float = "right";
    contentMovieApi.style.marginTop = "20px"
}