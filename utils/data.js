const names = [
    "Adam", 
    "Alex", 
    "Aaron", 
    "Ben", 
    "Carl", 
    "Dan", 
    "David", 
    "Edward", 
    "Fred", 
    "Frank", 
    "George", 
    "Hal", 
    "Hank", 
    "Ike", 
    "John", 
    "Jack", 
    "Joe", 
    "Larry", 
    "Monte", 
    "Matthew", 
    "Mark", 
    "Nathan", 
    "Otto", 
    "Paul", 
    "Peter", 
    "Roger", 
    "Roger", 
    "Steve", 
    "Thomas", 
    "Tim", 
    "Ty", 
    "Victor", 
    "Walter",
];

const thoughts = [
    "Nice!",
    "LOL",
    "OMG",
    "LMAO",
    "Gross!",
    "This is great!",
    "Amazing picture!",
    "Totally!",
    "Your mom goes to college",
    "Must be nice",
    "ROFL",
    "You look so good!",
    "YASSSSSS",
    "May the force be with you",
    "Stay humble king",
    "Chicken nuggies",
    "Bankai!",
    "Thunderbreathing First Form: Thunderclap and Flash",
    "Plus Ultra!",
    "Wingardium Leviosa!",
    "Slytherin is the best!",
];

// Get random item in given an array
const randomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

// Gets random user
const randomUser = () =>
`${randomArrItem(names)}${randomArrItem(names)}`;

// Generates random thought
const randomThought = () =>
`${randomArrItem(thoughts)}`;

//Export the functions for use in seed.js
module.exports = { randomUser, randomThought };