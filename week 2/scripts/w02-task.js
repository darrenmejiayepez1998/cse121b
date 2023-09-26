/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = 'Darren Mejia';
let currentYear = currentYear; 
let profilePicture = 'images/myprofileimage.jpg';

/* Step 3 - Element Variables */
const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
const yearElement = document.querySelector('#year');
const imageElement = document.getElementById('Profile');

/* Step 4 - Adding Content */
imageElement.setAttribute('src', profilePicture);
nameElement.innerHTML = `<strong>${nameElement}</strong>`;


/* Step 5 - Array */
const favoriteFoods = ["Pizza", "Grilled cheese", "Empanadas", "Mac N Cheese", "Palag paneer"];
let length = favoriteFoods.push("Ramen");
document.getElementById('food').innerHTML = favoriteFoods.toString();
foodElement.innerHTML += `<br>${favoriteFoods}`;
let removefirstfood = favoriteFoods.pop(0);
foodElement.innerHTML += `<br>${favoriteFoods}`;
let removelastfood = favoriteFoods.pop();
foodElement.innerHTML += `<br>${favoriteFoods}`;






