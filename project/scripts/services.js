// ---------- NAV ----------

// Hamburger Menu
const mainnav = document.querySelector('.navigation')
const hambutton = document.querySelector('#menu')

hambutton.addEventListener('click', () => {
    mainnav.classList.toggle('show');
    hambutton.classList.toggle('show');
});

// ---------- MAIN ----------

// Services Info

const cards = document.querySelector('#services');


async function getServicesData() {
  try {
      const response = await fetch('data/services.json');
      const data = await response.json();
      console.log("Fetched data:", data);
      console.table(data.services);
      return data.services;
  } catch (error) {
      console.error('Error fetching JSON:', error);
      return [];
  }
}

getServicesData().then((services) => {
  if (services && services.length > 0) {
      displayServices(services);
  } else {
      console.error("No services data to display");
  }
});

getServicesData();

const displayServices = (services) => {
    services.forEach((services) => {
      let card = document.createElement('section')
      let name = document.createElement('h2')
      let description = document.createElement('p')
      let image = document.createElement('img')

      
      name.textContent = `${services.name}`;
      description.textContent = `${services.description}`;

      image.setAttribute('src', `${services.image}`);
      image.setAttribute('alt', `${services.name} image`);
      image.setAttribute('loading', 'lazy');
      image.setAttribute('width', '300');
      image.setAttribute('height', '200');

      card.appendChild(name);
      card.appendChild(image);
      card.appendChild(description);
      
      cards.appendChild(card);
  });
};

// ---------- FOOTER ----------

// Get Date / Last Modified
const currentyear = document.querySelector("#currentyear");
const lastmodified = document.querySelector("#lastmodified");

const today = new Date();

currentyear.innerHTML = `<span>${today.getFullYear()}</span>`;

const date = new Date(document.lastModified);
document.getElementById("lastmodified").innerHTML = date;

// Modal Functions

function openModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.showModal();
  };
  
  function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.close();
  };

// Weather API
const myCity = document.querySelector('#city');
const myDescription = document.querySelector('#description');
const myTemperature = document.querySelector('#temperature');
const myGraphic = document.querySelector('#graphic');

const myKey = "945d3fada872cdbca03d46101f954374"
const myLat = "43.6150"
const myLong = "-116.2023"

const myURL = `https://api.openweathermap.org/data/2.5/weather?lat=${myLat}&lon=${myLong}&appid=${myKey}&units=imperial`

async function apiFetch() {
    try {
      const response = await fetch(myURL);
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        displayResults(data);
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
  }
  
  apiFetch();


function displayResults(data) {
    console.log('Hello')
    myCity.innerHTML = data.name
    myDescription.innerHTML = data.weather[0].description
    myTemperature.innerHTML = `${data.main.temp}&deg;F`
    const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
    myGraphic.setAttribute('SRC', iconsrc)
    myGraphic.setAttribute('alt', data.weather[0].description)
}