/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.getElementById("#temples");
let templeList = [
    
];
templeList.forEach(displayTemples);
/* async displayTemples Function */
const displayTemples = (temples) => {
    article = document.createElement("Article"),
    h3 = document.createElement("h3"),
    element.setAttribute("h3", "templeName"),
    img = document.createElement("img"),
    document.querySelector("img").setAttribute("src",ImageUrl),
    document.querySelector("img").setAttribute("alt", location);
}


/* async getTemples Function using fetch()*/
const getTemples = async () => {
    const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json")
    const templeList = await response.json();

    console.log(templeList);
}

/* reset Function */
document.getElementById("#temples").reset();

/* sortBy Function */
const sortby = temples.sort();

console.log(sortby);




/* Event Listener */
