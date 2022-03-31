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
    let name = document.createElement('h2');
    let addressh3 = document.createElement('h3')
    let address = document.createElement('p');
    let phoneh3 = document.createElement('h3')
    let phone = document.createElement('p');
    let servicesh3 = document.createElement('h3')
    let services = document.createElement('p')
    let historyh3 = document.createElement('h3')
    let history = document.createElement('p')
    let ordinanceh3 = document.createElement('h3')
    let ordinance = document.createElement('p')
    let sessionh3 = document.createElement('h3')
    let session = document.createElement('p')
    let closureh3 = document.createElement('h3')
    let closure = document.createElement('p')

    name.textContent = `${temple.name}`;
    addressh3.textContent = `Address`;
    address.textContent = `${temple.address}`;
    phoneh3.textContent = `Phone`;
    phone.textContent = `${temple.phone}`;
    servicesh3.textContent = `Services`;
    services.textContent = `${temple.services}`;
    historyh3.textContent = `History`;
    history.textContent = `${temple.history}`;
    ordinanceh3.textContent = `Ordinances`;
    ordinance.textContent = `${temple.ordinance}`;
    sessionh3.textContent = `Sessions`;
    session.textContent = `${temple.session}`;
    closureh3.textContent = `Closure`;
    closure.textContent = `${temple.closure}`;

    
    name.setAttribute('class','locationscontent boxh2');  
    address.setAttribute('class','locationscontent');
    phone.setAttribute('class','locationscontent');    
    services.setAttribute('class','locationscontent');
    history.setAttribute('class','locationscontent');
    ordinance.setAttribute('class','locationscontent');
    session.setAttribute('class','locationscontent');
    closure.setAttribute('class','locationscontent');


    card.appendChild(name);
    card.appendChild(addressh3)
    card.appendChild(address);
    card.appendChild(phoneh3)
    card.appendChild(phone);
    card.appendChild(servicesh3)
    card.appendChild(services);
    card.appendChild(historyh3)
    card.appendChild(history);
    card.appendChild(ordinanceh3);
    card.appendChild(ordinance);
    card.appendChild(sessionh3);
    card.appendChild(session);
    card.appendChild(closureh3);
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