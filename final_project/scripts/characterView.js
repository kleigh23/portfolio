let characterName = localStorage.getItem("characterName");
let URL = "https://api.genshin.dev/characters/" + characterName

const description = document.querySelector("#description");

fetch(URL)
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        buildDescription(data);
        
    });

function buildDescription(data) {
    let h1 = document.createElement('h1');
    let title = document.createElement('h3');
    let descript = document.createElement('h3');
    let img = document.createElement('img');
    let rarity = document.createElement('h3');
    let vision = document.createElement('h3');
    let weapon = document.createElement('h3');

    let constellationName = document.createElement('h3');
    let constellationSection = document.createElement('h2');
    let constellation1 = document.createElement('h3');
    let constellation2 = document.createElement('h3');
    let constellation3 = document.createElement('h3');
    let constellation4 = document.createElement('h3');
    let constellation5 = document.createElement('h3');
    let constellation6 = document.createElement('h3');
    let constellation1d = document.createElement('h3');
    let constellation2d = document.createElement('h3');
    let constellation3d = document.createElement('h3');
    let constellation4d = document.createElement('h3');
    let constellation5d = document.createElement('h3');
    let constellation6d = document.createElement('h3');

    let skillSection = document.createElement('h2');
    let skillTalentName1 = document.createElement('h3');
    let skillTalentUnlock1 = document.createElement('h3');
    let skillTalentDescription1 = document.createElement('h3');
    let skillTalentName2 = document.createElement('h3');
    let skillTalentUnlock2 = document.createElement('h3');
    let skillTalentDescription2 = document.createElement('h3');
    let skillTalentName3 = document.createElement('h3');
    let skillTalentUnlock3 = document.createElement('h3');
    let skillTalentDescription3 = document.createElement('h3');

    let passiveSection = document.createElement('h2');
    let passiveTalentName1 = document.createElement('h3');
    let passiveTalentUnlock1 = document.createElement('h3');
    let passiveTalentDescription1 = document.createElement('h3');
    let passiveTalentName2 = document.createElement('h3');
    let passiveTalentUnlock2 = document.createElement('h3');
    let passiveTalentDescription2 = document.createElement('h3');
    let passiveTalentName3 = document.createElement('h3');
    let passiveTalentUnlock3 = document.createElement('h3');
    let passiveTalentDescription3 = document.createElement('h3');
    let Name = data.name
    let name = data.name.toLowerCase();
    h1.innerHTML = Name;
    title.innerHTML = `Title: ${data.title}`;
    descript.innerHTML = data.description;
    rarity.innerHTML = `Rarity ${data.rarity} Star`;
    vision.innerHTML = `Vision: ${data.vision}`;
    weapon.innerHTML = `Weapon: ${data.weapon}`;

    constellationName.innerHTML = `Constellation: ${data.constellation}`;
    constellationSection.innerHTML = "Constellation Levels";
    constellation1.innerHTML = data.constellations[0].name;
    constellation2.innerHTML = data.constellations[1].name;
    constellation3.innerHTML = data.constellations[2].name;
    constellation4.innerHTML = data.constellations[3].name;
    constellation5.innerHTML = data.constellations[4].name;
    constellation6.innerHTML = data.constellations[5].name;
    constellation1d.innerHTML = data.constellations[0].description;
    constellation2d.innerHTML = data.constellations[1].description;
    constellation3d.innerHTML = data.constellations[2].description;
    constellation4d.innerHTML = data.constellations[3].description;
    constellation5d.innerHTML = data.constellations[4].description;
    constellation6d.innerHTML = data.constellations[5].description;

    skillSection.innerHTML = "Skill Talents";
    skillTalentName1.innerHTML = data.skillTalents[0].name;
    skillTalentUnlock1.innerHTML = data.skillTalents[0].unlock;
    skillTalentDescription1.innerHTML = data.skillTalents[0].description;
    skillTalentName2.innerHTML = data.skillTalents[1].name;
    skillTalentUnlock2.innerHTML = data.skillTalents[1].unlock;
    skillTalentDescription2.innerHTML = data.skillTalents[1].description;
    skillTalentName3.innerHTML = data.skillTalents[2].name;
    skillTalentUnlock3.innerHTML = data.skillTalents[2].unlock;
    skillTalentDescription3.innerHTML = data.skillTalents[2].description;

    passiveSection.innerHTML = "Passive Talents";
    passiveTalentName1.innerHTML = data.passiveTalents[0].name;
    passiveTalentUnlock1.innerHTML = data.passiveTalents[0].unlock;
    passiveTalentDescription1.innerHTML = data.passiveTalents[0].description;
    passiveTalentName2.innerHTML = data.passiveTalents[1].name;
    passiveTalentUnlock2.innerHTML = data.passiveTalents[1].unlock;
    passiveTalentDescription2.innerHTML = data.passiveTalents[1].description;
    passiveTalentName3.innerHTML = data.passiveTalents[2].name;
    passiveTalentUnlock3.innerHTML = data.passiveTalents[2].unlock;
    passiveTalentDescription3.innerHTML = data.passiveTalents[2].description;

    const icon = `https://api.genshin.dev/characters/${characterName}/portrait.png`;

    img.setAttribute('src', icon);img.setAttribute('alt', data.name);img.setAttribute('id', 'portrait')
    constellationSection.setAttribute('class', 'constSect');
    skillSection.setAttribute('class', 'constSect');
    passiveSection.setAttribute('class', 'constSect');

    description.appendChild(h1);
    description.appendChild(title);
    description.appendChild(descript);
    description.appendChild(img);
    description.appendChild(rarity);
    description.appendChild(vision);
    description.appendChild(weapon);

    description.appendChild(constellationName);
    description.appendChild(constellationSection);
    description.appendChild(constellation1);
    description.appendChild(constellation1d);
    description.appendChild(constellation2);
    description.appendChild(constellation2d);
    description.appendChild(constellation3);
    description.appendChild(constellation3d);
    description.appendChild(constellation4);
    description.appendChild(constellation4d);
    description.appendChild(constellation5);
    description.appendChild(constellation5d);
    description.appendChild(constellation6);
    description.appendChild(constellation6d);

    description.appendChild(skillSection);
    description.appendChild(skillTalentName1);
    description.appendChild(skillTalentUnlock1);
    description.appendChild(skillTalentDescription1);
    description.appendChild(skillTalentName2);
    description.appendChild(skillTalentUnlock2);
    description.appendChild(skillTalentDescription2);
    description.appendChild(skillTalentName3);
    description.appendChild(skillTalentUnlock3);
    description.appendChild(skillTalentDescription3); 

    description.appendChild(passiveSection);
    description.appendChild(passiveTalentName1);
    description.appendChild(passiveTalentUnlock1);
    description.appendChild(passiveTalentDescription1);  
    description.appendChild(passiveTalentName2);
    description.appendChild(passiveTalentUnlock2);
    description.appendChild(passiveTalentDescription2);  
    description.appendChild(passiveTalentName3);
    description.appendChild(passiveTalentUnlock3);
    description.appendChild(passiveTalentDescription3);   

}