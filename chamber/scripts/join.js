// -----------------------------------
// ---------- NAV ----------
// -----------------------------------

// Hamburger Menu
const mainnav = document.querySelector('.navigation')
const hambutton = document.querySelector('#menu')

hambutton.addEventListener('click', () => {
    mainnav.classList.toggle('show');
    hambutton.classList.toggle('show');
});

// -----------------------------------
// ---------- MAIN ----------
// -----------------------------------

// Timestamp Function
function populateTimestamp() {
  const hiddenTimestamp = document.getElementById('timestamp');
  const now = new Date().toISOString();
  hiddenTimestamp.value = now;
};

// Modal Functions

function openModal(modalId) {
  const modal = document.getElementById(modalId);
  modal.showModal();
};

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  modal.close();
};

// Display info on Thank You page

const myInfo = new URLSearchParams(window.location.search);
console.log(myInfo);

// console.log(myInfo.get('fname')); //First name
// console.log(myInfo.get('lname')); //Last name
// console.log(myInfo.get('email')); //Email
// console.log(myInfo.get('tel')); //Phone
// console.log(myInfo.get('oname')); //Buisiness name
// console.log(myInfo.get('timestamp')); //Timestamp

document.querySelector('#results').innerHTML = `
<p>Thank you ${myInfo.get('fname')} ${(myInfo.get('lname'))} for subscribing!</p>
<p>We have your information as: </p>
<p>Email: ${myInfo.get('email')}</p>
<p>Phone Number: ${myInfo.get('tel')}</p>
<p>Business/Organization Name: ${myInfo.get('oname')}</p>
<p>Form Submitted: ${myInfo.get('timestamp')}</p>`

// -----------------------------------
// ---------- FOOTER ----------
// -----------------------------------

// Get Date / Last Modified
const currentyear = document.querySelector("#currentyear");
const lastmodified = document.querySelector("#lastmodified");

const today = new Date();

currentyear.innerHTML = `<span>${today.getFullYear()}</span>`;

const date = new Date(document.lastModified);
document.getElementById("lastmodified").innerHTML = date;