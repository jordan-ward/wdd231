// ---------- NAV ----------

// Hamburger Menu
const mainnav = document.querySelector('.navigation')
const hambutton = document.querySelector('#menu')

hambutton.addEventListener('click', () => {
    mainnav.classList.toggle('show');
    hambutton.classList.toggle('show');
});

// ---------- MAIN ----------

// Reviews Info

const cards = document.querySelector('#reviews');


async function getReviewsData() {
  try {
      const response = await fetch('data/reviews.json');
      const data = await response.json();
      console.log("Fetched data:", data); // Log the raw fetched data
      console.table(data.reviews);       // Log the `features` array specifically
      return data.reviews;               // Return the features array
  } catch (error) {
      console.error('Error fetching JSON:', error);
      return []; // Return an empty array to prevent further errors
  }
}

getReviewsData().then((reviews) => {
  if (reviews && reviews.length > 0) {
      displayReviews(reviews); // Pass the array of features to the display function
  } else {
      console.error("No reviews data to display");
  }
});

getReviewsData();

const displayReviews = (reviews) => {
    reviews.forEach((reviews) => {
      let card = document.createElement('section')
      let title = document.createElement('h2')
      let content = document.createElement('p')
      let image = document.createElement('img')

      
      title.textContent = `${reviews.title}`;
      content.textContent = `${reviews.content}`;

      image.setAttribute('src', `${reviews.image}`);
      image.setAttribute('alt', `${reviews.title} image`);
      image.setAttribute('loading', 'lazy');
      image.setAttribute('width', '300');
      image.setAttribute('height', '200');

      card.appendChild(title);
      card.appendChild(image);
      card.appendChild(content);
      
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
        console.log(data); // testing only
        displayResults(data); // uncomment when ready
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