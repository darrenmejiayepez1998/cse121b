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
    placesLived: [], 
    
};

/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push(
    {
        place: 'Veracruz, Mexico',
        length: '16 years',
       
    }
);
myProfile.placesLived.push(
    {
        place: 'Seattle, WA',
        length: '2 years',
    }    
);
myProfile.placesLived.push(
    {
        place: 'Salt lake city, Utah',
        length: '4 years',
    }
);
myProfile.placesLived.push(
    {
        place: 'Provo, Utah',
        length: '2 years',
    }
);
/* DOM Manipulation - Output */

/* Name */
document.querySelector('#name').textContent = myProfile.name;

/* Photo with attributes */
document.querySelector('#photo').setAttribute('src',myProfile.photo);

/* Favorite Foods List*/
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
myProfile.placesLived.forEach(place =>{
    let dt = document.createElement('dt');
    dt.textContent = place.place;
    document.querySelector('#places-lived').appendChild(dt);

    let dd = document.createElement('dd');
    dd.textContent = place.length;
    document.querySelector('#places-lived').appendChild(dd);
});