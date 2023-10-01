// example 1
const steps = ["one", "two", "three"];
const stepsHtml = steps.map(function (step) {
    return `<li>${step}</li>`;
})
document.getElementById("myList").innerHTML = stepsHtml.join();

//example 2 
const grades = ["A", "B", "A"];
function convertGradeToPoints(grade) {
    let points = 0;
    if (grade === "A") {
        points = 4;
    } else if (grade === "B") {
        points = 3; 
    }
    return points
}
const gpaPoints = grades.map(convertGradeToPoints);

//example 3
const pointsTotal = gpaPoints.reduce(function (total, item) {
    return total + item;
});
const gpa = pointsTotal / gpaPoints.length;

// example 4 
fruits = ["Watermelon", "Peach", "Apple", "Tomato", "Grape"];
const shortWords = fruits.filter(function (fruit){
    return fruit.length < 6; 
});

//same thing with an arrow function
// const shortWords = words.filter((word) => word.length < 6);

// Example 5 
// Declare an array with the following value: [12, 34, 21, 54]
const myArray = [12, 34, 21, 54];
// Declare a luckNumber variable with the value 21;
const luckyNumber = 21;
// Use indexOf to see if the luckyNumber is in the Array.
let luckyIndex = myArray.indexOf(luckyNumber);