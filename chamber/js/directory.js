const requestURL = "https://irythom.github.io/wdd230/chamber/JSON/directory.json";
const cards = document.querySelector('#cards');

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const directory = jsonObject['directory'];
    directory.forEach(displayDirectory);
});

function displayDirectory(company){

    let card = document.createElement('section');
    let name = document.createElement('h3');
    let logo = document.createElement('img');
    let address = document.createElement('p');
    let phone = document.createElement('p');
    let website = document.createElement('p');

    name.textContent = `${company.name}`;
    address.textContent = `${company.address}`;
    phone.textContent = `${company.phone}`;
    website.textContent = `${company.website}`;

    
    logo.setAttribute('src', company.logo);
    logo.setAttribute('class', 'directoryLogo')
    logo.setAttribute('alt', company.name + 'logo');
    logo.setAttribute('loading', 'lazy');
    name.setAttribute('class','directoryContent');    
    address.setAttribute('class','directoryContent');
    phone.setAttribute('class','directoryContent');    
    website.setAttribute('class','directoryContent');
    

    card.appendChild(logo);
    card.appendChild(name);
    card.appendChild(address);
    card.appendChild(phone);
    card.appendChild(website);

    cards.appendChild(card);
}

//* ------ GRID VS LIST ------- *//



let iconbtn = document.querySelector('.gridmenubar');
let listbtn = document.querySelector('.listmenubar');
let displayArea = document.querySelector('#cards');



displayArea.classList.add('list');



iconbtn.addEventListener('click',displayGrid);
listbtn.addEventListener('click',displayList);


function displayGrid(){ 
  displayArea.classList.replace('list','grid');
  
}

function displayList(){
  displayArea.classList.replace('grid','list');
}