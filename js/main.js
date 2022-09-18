const lists = document.querySelector("#list");
const requestURL = 'data.json';

fetch(requestURL)
  .then(function (response) {
   return response.json();
})
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const links = jsonObject['links'];
    links.forEach(displayLinks);
});

function displayLinks(link) {
    let li = document.createElement('li');
    let a = document.createElement('a');

    a.textContent = link.label;
    a.href = link.url;

    li.appendChild(a);

    console.log(a);

    document.querySelector('#list').appendChild(li);

};


