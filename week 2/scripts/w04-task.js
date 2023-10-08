/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name: "Darren Mejia",
    photo: "images/myprofileimage.jpg",
    favoriteFoods: [
        "Pizza",
        "Hamburger",
        "Empanadas",
        "Grilled cheese"
    ],
    hobbies: [
        "Playing Videogames",
        "Watching Movies",
    ],
    
};

/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push(
    {
        place: 'Veracruz, Mexico',
        length: '16 years',
        place: 'Seattle, WA',
        length: '2 years',
        place: 'Salt lake city, Utah',
        length: '4 years',
        place: 'Provo, Utah',
        length: '2 years'
    }
);

/* DOM Manipulation - Output */

/* Name */
document.querySelector('#name').textContent = myProfile.name;

/* Photo with attributes */
document.setAttribute("src", photo);
document.querySelector('#photo').textContent = myProfile.photo;

/* Favorite Foods List*/places-lived
myProfile.favoriteFoods.forEach(food =>{
    let li = document.createElement('li');
    li.textContent = food;
    document.querySelector('#favorite-foods').appendChild(li);
});

/* Hobbies List */
myProfile.hobbies.forEach(hobbie =>{
    let li = document.createElement('li');
    li.textContent = hobbie;
    document.querySelector('#hobbies').appendChild(li);
});

/* Places Lived DataList */
placesLived.place.forEach(places =>{
    let dt = document.createElement('dt');
    dt.textContent = places;
    document.querySelector('#places-lived').appendChild(dt);
});

placesLived.length.forEach(lengths => {
    let dd = document.createElement('dd');
    dd.textContent = lengths;
    document.querySelector('#places-lived').appendChild(dd);
});