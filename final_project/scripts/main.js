const elementName = document.querySelector("#elementName");
const characterName = document.querySelector("#characterName");
const description = document.querySelector("#descript")
const characterPic = document.querySelector("#characterPic");
const picElement = document.querySelector("#imgElements");
const weaponName = document.querySelector("#weaponName");
const picWeapon = document.querySelector("#imgWeapon");


const elements = "http://api.genshin.dev/elements"
const characters = "https://api.genshin.dev/characters"
const weapons = "http://api.genshin.dev/weapons"

fetch(characters)
    .then((response) => response.json())
    .then((data) => {
        data.forEach(characterButtons);
    })



function characterButtons(data) {
    let card = document.createElement('section');
    const icon = `https://api.genshin.dev/characters/${data}/icon.png`;


    let Name = data.toUpperCase();
    let characterId = data.toLowerCase();
    let cardinnerHTML = `<button id='${data}' class="characters" onclick='setLocalStorage(${characterId})'>${Name}</button>`;
    cardinnerHTML += `<img src='${icon}' alt='${data}' class='images'/>`
    card.innerHTML = cardinnerHTML;

    document.querySelector('div.cards').appendChild(card);

};

function setLocalStorage(characterName) {
    localStorage.setItem("characterName", characterName.id);
    window.open("character_view.html", "_self");
};




