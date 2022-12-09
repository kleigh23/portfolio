const elementName = document.querySelector("#elementName");
const characterName = document.querySelector("#characterName");
const description = document.querySelector("#descript")
const characterPic = document.querySelector("#characterPic");
const picElement = document.querySelector("#imgElements");
const weaponName = document.querySelector("#weaponName");
const picWeapon = document.querySelector("#imgWeapon");


const elements = "http://api.genshin.dev/elements"
const characters = "http://api.genshin.dev/characters"
const weapons = "http://api.genshin.dev/weapons"

fetch(characters)
    .then((response) => response.json())
    .then((data) => {
        // console.log(data);
        data.forEach(characterButtons);
        //addEvent();
    })



function characterButtons(data) {
    let card = document.createElement('section');
    //let button = document.createElement('button');
    //let link = document.createElement('a');
    //let img = document.createElement('img');
    //link.href = "character_view.html";
    const icon = `https://api.genshin.dev/characters/${data}/icon.png`;
    // button.setAttribute("id", data);

    console.log(typeof data);
    let Name = data.toUpperCase();
    let characterId = data.toLowerCase();
    let cardinnerHTML = `<button id='${data}' class="characters" onclick='setLocalStorage(${characterId})'>${Name}</button>`;
    cardinnerHTML += `<img src='${icon}' alt='${data}' class='images'/>`
    card.innerHTML = cardinnerHTML;

    // let ID = button.id;
    // console.log(ID);
    // button.setAttribute("onclick", setLocalStorage(ID));
    // img.setAttribute('src', icon);
    // img.setAttribute('alt', data);
    // img.setAttribute('id', 'images')
    
    //button.textContent = (Name);
    
    //link.appendChild(button);

    //button.classList.add("characters");

    //card.appendChild(img);
    //card.appendChild(link);

    document.querySelector('div.cards').appendChild(card);

};

function setLocalStorage(characterName) {
    localStorage.setItem("characterName", characterName.id);
    window.open("character_view.html", "_self");
};




