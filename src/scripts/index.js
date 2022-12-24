import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.sass';


const restaurantsJson = require('../DATA.json');
let restaurantComponents = restaurantsJson.restaurants
.map((restaurant) => {
    return `
        <div class="restaurant-card">
            <div class="badge">Rating ${restaurant.rating}</div>
            <div class="restaurant-tumb">
                <img src="${restaurant.pictureId}" alt="${restaurant.name} Picture">
            </div>
            <div class="restaurant-details">
                <span class="restaurant-city">${restaurant.city}</span>
                <h4><a href="#">${restaurant.name}</a></h4>
                <p>${restaurant.description}</p>
            </div>
        </div>
    `;
}).join("");


document.querySelector('#restaurants .card-deck').innerHTML = restaurantComponents;

document.getElementById('search').addEventListener('change', (e)=>{
    
    let results = restaurantsJson.restaurants
    .filter((restaurant) => restaurant.name.toLocaleLowerCase().includes(e.target.value))
    .map((restaurant) => {
        return `
            <div class="restaurant-card">
                <div class="badge">Rating ${restaurant.rating}</div>
                <div class="restaurant-tumb">
                    <img src="${restaurant.pictureId}" alt="${restaurant.name} Picture">
                </div>
                <div class="restaurant-details">
                    <span class="restaurant-city">${restaurant.city}</span>
                    <h4><a href="#">${restaurant.name}</a></h4>
                    <p>${restaurant.description}</p>
                </div>
            </div>
        `;
    }).join("");

    document.querySelector('#restaurants .card-deck').innerHTML = results;
});

let menuToggle = document.getElementById('menu-toggle');
let menu = document.getElementById('menu');

menuToggle.addEventListener('click', toggleMenu);

function toggleMenu() {
    if(menu.classList.contains('active')){
        menu.classList.remove('active');
    }else{
        menu.classList.add('active');
    }
}
