const requestURL = "https://irythom.github.io/wdd230/final/JSON/temples.json";
const cards = document.querySelector('#cards');

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const directory = jsonObject['temples'];
    directory.forEach(displayDirectory);
});

function displayDirectory(temple){

    let card = document.createElement('section');
    let name = document.createElement('h3');
    let address = document.createElement('p');
    let phone = document.createElement('p');
    let services = document.createElement('p')
    let history = document.createElement('p')
    let ordinance = document.createElement('p')
    let session = document.createElement('p')
    let closure = document.createElement('p')

    name.textContent = `${temple.name}`;
    address.textContent = `${temple.address}`;
    phone.textContent = `${temple.phone}`;
    services.textContent = `${temple.services}`
    history.textContent = `${temple.history}`
    ordinance.textContent = `${temple.ordinance}`
    session.textContent = `${temple.session}`
    closure.textContent = `${temple.closure}`

    
    name.setAttribute('class','directoryContent');    
    address.setAttribute('class','directoryContent');
    phone.setAttribute('class','directoryContent');    
    services.setAttribute('class','directoryContent');
    history.setAttribute('class','directoryContent');
    ordinance.setAttribute('class','directoryContent');
    session.setAttribute('class','directoryContent');
    closure.setAttribute('class','directoryContent');


    card.appendChild(name);
    card.appendChild(address);
    card.appendChild(phone);
    card.appendChild(services);
    card.appendChild(history);
    card.appendChild(ordinance);
    card.appendChild(session);
    card.appendChild(closure);

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