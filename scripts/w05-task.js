/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.getElementById("temples");
let templeList = [
    
];

/* async displayTemples Function */
const displayTemples = (temples) => {
    temples.forEach(TempleInfo =>{
    let article = document.createElement("article");
    let h3 = document.createElement("h3");
    h3.innerHTML = TempleInfo.templeName;
    let img = document.createElement("img");
    img.src = TempleInfo.imageUrl;
    img.alt = TempleInfo.location; 
    article.appendChild(img);
    article.appendChild(h3);   
    templesElement.appendChild(article);
    });
}


/* async getTemples Function using fetch()*/
const getTemples = async () => {
    const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json")
    templeList = await response.json();
    displayTemples(templeList);
    console.log(templeList);
}
getTemples();

/* reset Function */
const reset = function(){
    templesElement;
};


/* sortBy Function */
const sortBy = function(temples){
    reset();
    filter = document.getElementById("sortBy");
    switch (filter){
        case "utah":
          displayTemples(temples.filter(utah_temples => {text.includes("Utah")}));
        case "notutah":
            displayTemples(temples.filter(notUtah_temples => {text.includes("Utah")}));
        case "older":
            displayTemples(temples.filter(older_temples => {new_date(1950,0,1)}));
        case "all":
            temples;
    }
}


/* Event Listener */
document.querySelector("sortBy").addEventListener("change", () => {sortBy(templeList) });