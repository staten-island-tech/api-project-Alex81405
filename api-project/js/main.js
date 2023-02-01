import "../styles/style.css";
import { DOMSelectors } from "./dom.js";

const url = "https://api.adoptapet.com/search/pets_at_shelter?key=A34F48&v=1&output=xml&shelter_id=2342";

async function getData(url) {
  try {
    const response = await fetch(url);
    if (response.status < 200 || response.status > 299) {
      throw new Error(response);
    } else {
      const data = await response.json();
      console.log(data);
      console.log("good");
    }

  } catch (error) {
    console.log(error);
    console.log("bad");
  }
}

getData(url);

DOMSelectors.form.addEventListener("submit", function (e) {
  e.preventDefault();
  console.log(e);
  let userInput = DOMSelectors.userInput.value;

async function specificCharacter(url, userInput) {
    try{
      const response = await fetch(url);
      const data = await response.json();
      data.data
      .filter((element) => element.name.includes(`${userInput}`))
      .map((element) => {
        DOMSelectors.box.insertAdjacentHTML(
        //   "beforeend",
        //   `<div class="card">
        //   <img class="image" src="${element.imageUrl}" alt="">
        //   <h2 class="name">${element.name}</h2>
        //   <div class="features">
        //     <ul><b>Films: </b> ${element.films}</ul>
        //     <br></br>
        //     <ul><b>Short Films: </b> ${element.shortFilms}</ul>
        //     <br></br>
        //     <ul><b>TV Shows: </b>${element.tvShows}</ul>
        //     <br></br>
        //     <ul><b>Video Games: </b> ${element.videoGames}</ul>
        //   </div>
        // </div>
        // `
        )
      })
    }catch (error) {
      console.log(error);
    }
  }
  specificCharacter(url, userInput);
})

function clear() {
  DOMSelectors.box.innerHTML = "";
  DOMSelectors.userInput.innerHTML = "";
};

clear()