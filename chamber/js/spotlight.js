const resquestURL = 'https://irythom.github.io/wdd230/chamber/JSON/directory.json';
const outsidebox = document.querySelector('#outside-box');

fetch(resquestURL)
  .then(function (repsone){
    return repsone.json();
  })
  .then(function (jsonObject) {
    const businesses = jsonObject['directory'];
    let gold = businesses.filter(businesses => (businesses.membershiplevel === 'gold'));
    for (i=0; i<3; i++) {
      x = Math.floor(Math.random() * gold.length)
      displaySpotight(gold[x], `spot${i+1}`);
      gold = gold.filter(business => (business.name != gold[x].name));
    }
  });

  function displaySpotight(business, spot) {
    console.log("anything here ", business)
    // Create elements for spotlight boxes
    let spotlightBox = document.createElement('div');
    spotlightBox.classList.add('placeholderBox', 'spotlightBox', `${spot}`)
    console.log("hey outside box ", outsidebox)
    let spotlightSection = document.createElement('section');
    let businessName = document.createElement('h2');
    let logo = document.createElement('img');
    let motto = document.createElement('p');
    let info = document.createElement('div');
    info.classList.add('grayBoxInfo');
    let email = document.createElement('p');
    let phone =  document.createElement('p');

    // Add textContent property to fill spotlight boxes
    businessName.textContent = `${business.name}`;
    motto.textContent = `${business.motto}`;
    email.textContent = `${business.email}`;
    phone.textContent = `Phone: ${business.phone}`;

    // Set img attributes for logos
    businessName.setAttribute ('class', `grayBoxH2`)
    logo.setAttribute('class', `grayBoxImg`)
    logo.setAttribute('src', business.logo);
    logo.setAttribute('alt', `Logo of ${business.businessName}`)

    // Add business information to the spotlight section
    spotlightSection.appendChild(businessName);
    spotlightSection.appendChild(logo);
    spotlightSection.appendChild(motto);
    info.appendChild(email);
    info.appendChild(phone);

    // Add the two sections to the outside-box div    
    spotlightBox.appendChild(spotlightSection);
    spotlightBox.appendChild(info);

    outsidebox.appendChild(spotlightBox)

  }