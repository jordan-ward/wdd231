
// ---------- NAV ----------


// Hamburger Menu
const mainnav = document.querySelector('.navigation')
const hambutton = document.querySelector('#menu')

hambutton.addEventListener('click', () => {
    mainnav.classList.toggle('show');
    hambutton.classList.toggle('show');
});


// ---------- MAIN ----------

// JSON Info

const cards = document.querySelector('#places');


async function getFeaturesData() {
  try {
      const response = await fetch('data/features.json');
      const data = await response.json();
      console.log("Fetched data:", data); // Log the raw fetched data
      console.table(data.features);       // Log the `features` array specifically
      return data.features;               // Return the features array
  } catch (error) {
      console.error('Error fetching JSON:', error);
      return []; // Return an empty array to prevent further errors
  }
}

getFeaturesData().then((features) => {
  if (features && features.length > 0) {
      displayFeatures(features); // Pass the array of features to the display function
  } else {
      console.error("No features data to display");
  }
});

getFeaturesData();

const displayFeatures = (features) => {
  features.forEach((features) => {
      let card = document.createElement('section')
      let name = document.createElement('h2')
      let address = document.createElement('address')
      let description = document.createElement('p')
      let image = document.createElement('img')
      
      name.textContent = `${features.name}`;
      address.textContent = `${features.address}`;
      description.textContent = `${features.description}`;

      image.setAttribute('src', `${features.image}`);
      image.setAttribute('alt', `${features.name} image`);
      image.setAttribute('loading', 'lazy');
      image.setAttribute('width', '300');
      image.setAttribute('height', '200');

      card.appendChild(name);
      card.appendChild(image);
      card.appendChild(address);
      card.appendChild(description);
      
      cards.appendChild(card);
  });
};

// Recently visited message

function calculateDaysDifference(lastVisitDate) {
  const currentDate = new Date();
  const differenceInTime = currentDate - new Date(lastVisitDate);
  return Math.floor(differenceInTime / (1000 * 60 * 60 * 24));
}

function displayMessage() {
  const lastVisit = localStorage.getItem('lastVisit');
  const currentDate = new Date();

  if (!lastVisit) {
    document.getElementById('message').innerText = "Welcome! Let us know if you have any questions.";
  }
  else {
    const daysDifference = calculateDaysDifference(lastVisit);

    if (daysDifference < 1) {
      document.getElementById('message').innerText = "Back so soon! Awesome!";
    }
    else {
      document.getElementById('message').innerText = `You last visited ${daysDifference} days ago.`;
    }
  }

  localStorage.setItem('lastVisit', currentDate);

}

window.onload = displayMessage;

// ---------- FOOTER ----------

// Get Date / Last Modified
const currentyear = document.querySelector("#currentyear");
const lastmodified = document.querySelector("#lastmodified");

const today = new Date();

currentyear.innerHTML = `<span>${today.getFullYear()}</span>`;

const date = new Date(document.lastModified);
document.getElementById("lastmodified").innerHTML = date;