/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = "Darren Mejia";
//const d = new Date();
//const currentYear = d.getFullYear(); 
let profilePicture = "images/myprofileimage.jpg"

/* Step 3 - Element Variables */
const nameElement = document.getElementById("name");
const foodElement = document.getElementById("food");
const yearElement = document.querySelector("#year");
const imageElement = document.getElementById("PlaceholderImage")

/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
//yearElement.innerHTML = `<strong>${currentYear}</strong> `;
//imageElement.setAttribute("src", profilePicture);
//imageElement.innerHTML = `<strong>${profilePicture}</strong>`


/* Step 5 - Array */
const favoriteFoods = ["Pizza", "Grilled cheese", "Empanadas", "Mac N Cheese", "Palag paneer"];
let length = favoriteFoods.push("Ramen");
document.getElementById('food').innerHTML = favoriteFoods.toString();
foodElement.innerHTML += `<br>${favoriteFoods}`;
let removefirstfood = favoriteFoods.pop(0);
foodElement.innerHTML += `<br>${favoriteFoods}`;
let removelastfood = favoriteFoods.pop();
foodElement.innerHTML += `<br>${favoriteFoods}`;






