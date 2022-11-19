const elementName = document.querySelector("#elementName");
const characterName = document.querySelector("#CharacterName");
const description = document.querySelector("#descript")
const picCharacter = document.querySelector("#imgCharacter");
const picElement = document.querySelector("#imgElements");
const weaponName = document.querySelector("#weaponName");
const picWeapon = document.querySelector("#imgWeapon");


const elements = "http://api.genshin.dev/elements"
const characters = "http://api.genshin.dev/characters"
const weapons = "http://api.genshin.dev/weapons"

fetch(elements)
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        elementName.innerHTML = `<strong>${data[2]}</strong>`;

        const icon = `https://api.genshin.dev/elements/${data[2]}/icon.png`;

        picElement.setAttribute('src', icon);picElement.setAttribute('alt', description);
    })
fetch(weapons)
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        weaponName.innerHTML = `<strong>${data[26]}</strong>`;

        const icon = `https://api.genshin.dev/weapons/${data[26]}/icon.png`;

        picWeapon.setAttribute('src', icon);picWeapon.setAttribute('alt', data[84]);
    })
fetch(characters)
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        characterName.innerHTML = `<strong>${data[42]}</strong>`;
        // description.innerHTML = `<p>${data.description}</p>`;

        const icon = `https://api.genshin.dev/characters/${data[42]}/portrait.png`;

        picCharacter.setAttribute('src', icon);picCharacter.setAttribute('alt', data[3]);
    })