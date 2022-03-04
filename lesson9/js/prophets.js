const resquestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';
const cards = document.querySelector('.cards');



fetch(resquestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const prophets = jsonObject['prophets'];
    prophets.forEach(displayProphets);
  });




function displayProphets(prophet) {
  // Create elements to add to the document
  let card = document.createElement('section');
  let h2 = document.createElement('h2');
  let portrait = document.createElement('img');
  let birthdate = document.createElement('p');
  let birthplace = document.createElement('p');
  let death = document.createElement('p');

  let order = ``;

  if (prophet.order === 1) {
    order = `${prophet.order}st`;
  } else if (prophet.order === 2) {
    order = `${prophet.order}nd`;
  } else if (prophet.order === 3) {
    order = `${prophet.order}rd`;
  } else {
    order = `${prophet.order}th`;
  }

  // Change the textContent property of the h2 element to conatin the propet's full name
  h2.textContent = `${prophet.name} ${prophet.lastname}`;
  birthdate.textContent = `Birthdate: ${prophet.birthdate}`;
  birthplace.textContent = `Place of Birth: ${prophet.birthplace}`;
  death.textContent = `Death: ` + prophet.death;

  // Build the img attributes by using the setAttribute method for the src, alt, and loading 
  // attribute values. (Fill in the blank with the appropriate variables)
  portrait.setAttribute('src', prophet.imageurl);
  portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname} - ${order} Latter-day President`);
  portrait.setAttribute('loading', 'lazy');

  //Add/append the section(card)with the h2 element
  card.appendChild(h2);
  card.appendChild(birthdate);
  card.appendChild(birthplace); 
  card.appendChild(death);
  card.appendChild(portrait);
  

  // Addd/append the exsiting HTML div with the cards class with the section(card)
  cards.appendChild(card);
}