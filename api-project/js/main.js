import "/styles/style.css";

const DOMSelectors = {
    jokeButton: document.getElementById("getJokeButton"),
    joke: document.getElementById("joke"),
    searchButton: document.getElementById("searchButton"),
    searchInput: document.getElementById("searchInput")
};

const URL = "https://v2.jokeapi.dev/joke/Any?safe-mode";

async function getJoke(url) {
    try {
        const response = await fetch(url)
        if (response.status < 200 || response.status > 299) {
            console.log(response.status);
            throw new Error(response);
        } else {
            const data = await response.json();
            console.log(data);
            if (data.setup) {
                DOMSelectors.joke.innerHTML = `${data.setup} <br><br> ${data.delivery}`;
            } else if (data.error === true) {
                DOMSelectors.joke.innerHTML = data.causedBy;
            }
            else {
                DOMSelectors.joke.innerHTML = data.joke;
            }
        }
    } catch (error) {
        console.log(error);
    }
}

DOMSelectors.searchButton.addEventListener("click", function () {
    let newURL = URL + "&contains=" + DOMSelectors.searchInput.value;
    console.log(searchInput.value)
    console.log(newURL)
    getJoke(newURL);
    DOMSelectors.searchInput.value = "";
});

document.addEventListener("DOMContentLoaded", function () {
    getJoke(URL);
});

DOMSelectors.jokeButton.addEventListener("click", function () {
    getJoke(URL);
});