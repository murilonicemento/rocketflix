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
    fetch(`${BASE_URL}popular?${API_KEY}&${language}`)
    .then(response => response.json())
    .then(data => {
        titleApi.textContent = data.results[0].original_title
    })
    .catch(error => console.error(error))
}



function showMovies() {
    const body = document.querySelector("body");
    const movieApi = document.querySelector("#movieApi");
    const imgApi = document.querySelector("#imgApi");
    const contentMovieApi = document.querySelector("#contentMovieApi");

    body.style.height = "100%";

    movieApi.style.width = "533px";
    movieApi.style.height = "319px";
    movieApi.style.marginBottom = "30px";

    imgApi.style.width = "171px";
    imgApi.style.height = "243px";
    imgApi.style.marginTop = "10px";
    imgApi.src = "";

    contentMovieApi.style.width = "330px";
    contentMovieApi.style.height = "274px";
    contentMovieApi.style.float = "right";
    contentMovieApi.style.marginTop = "10px"
}