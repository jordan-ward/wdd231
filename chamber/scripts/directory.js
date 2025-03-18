// ---------- NAV ----------

// Hamburger Menu
const mainnav = document.querySelector('.navigation')
const hambutton = document.querySelector('#menu')

hambutton.addEventListener('click', () => {
    mainnav.classList.toggle('show');
    hambutton.classList.toggle('show');
});
// ---------- MAIN ----------

// Grid/List Button
const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("article");

gridbutton.addEventListener("click", () => {
    display.classList.add("grid");
    display.classList.remove("list");
});

listbutton.addEventListener("click", showList);

function showList(){
    display.classList.add("list");
    display.classList.remove("grid");
}

// Create Cards

const cards = document.querySelector('#cards');

// Fetch json info
// fetch('./members.json')
//     .then(response => response.json())
//     .then(data => console.log(data))
//     .catch(error => console.error('Error fetching JSON: ', error));

async function getMembersData() {
    const response = await fetch('data/members.json');
    const data = await response.json();
    console.table(data.members);  
}

getMembersData();

const displayMembers = (members) => {
    members.forEach((members) => {
        let card = document.createElement('section')
        let name = document.createElement('h2')
        let address = document.createElement('p')
        let phone = document.createElement('p')
        let url = document.createElement('p')
        let logo = document.createElement('img')
        let membership = document.createElement('p')

        name.textContent = `${members.name}`;
        address.textContent = `${members.address}`;
        phone.textContent = `${members.phoneNumber}`;
        url.textContent = `${members.url}`;
        membership.textContent = `${members.membershipLevel}`;

        logo.setAttribute('src', `${members.image}`);
        logo.setAttribute('alt', `${members.name} logo`);
        logo.setAttribute('loading', 'lazy');
        logo.setAttribute('width', '340');
        logo.setAttribute('height', '440');

        card.appendChild(name);
        card.appendChild(logo);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(url);
        card.appendChild(membership);
        
        cards.appendChild(card);
    });
}
    


// ---------- FOOTER ----------

// Get Date / Last Modified
const currentyear = document.querySelector("#currentyear");
const lastmodified = document.querySelector("#lastmodified");

const today = new Date();

currentyear.innerHTML = `<span>${today.getFullYear()}</span>`;

const date = new Date(document.lastModified);
document.getElementById("lastmodified").innerHTML = date;