/*
Task 1: Using forEach()
1. Create an array of five of your favorite cities.
2. Use forEach( ) to log each city name to the console in uppercase.
3. Submit the output format by adding comments to the code.
*/

let faveFiveCities = ["Chicago", "Floripa", "Morretes", "Miami", "Swellendam"];

faveFiveCities.forEach(city => {
    console.log(city.toUpperCase());
});

//Output: 
//CHICAGO
//FLORIPA
//MORRETES
//MIAMI
//SWELLENDAM

/*
Task 2: Transforming with map()
1. Create an array called numbers with the numbers 1-5.
2. Use map( ) to create an array where each number is squared. Call this array squares.
3. Log the new array.
4. Submit the output by adding comments to the code.
*/

let numbers = [1, 2, 3, 4, 5];
let squares = numbers.map(number => number * number)
console.log(squares);

//Output: [ 1, 4, 9, 16, 25 ]


/*
Task 3: Filtering with filter()
1. Create an array called scores containing the numbers 85, 42, 90, 75, 30, and 100.
2. Use filter ( ) to create a new array containing only the scores greater than or equal to 80. Call this array highScores.
3. Log the new array.
4. Submit the output by adding comments to the code.
*/

let scores = [85, 42, 90, 75, 30, 100];
let highScores = scores.filter(score => score >= 80);
console.log(highScores);

//Output: [ 85, 90, 100 ]

/* 
Task 4: Finding with find() and findIndex()
1. Create an array called favoriteFood that contains a list of your favorite dishes. Try to add 5 or 6 elements.
2. Use find() to locate the first food with more than 4 letters.
3. Use findIndex( ) to find the index of that fruit.
*/

let favoriteFood = ['barreado', 'feijoada', 'maduros', 'alfajor', 'timba', 'ropa vieja'];

fiveLetterFood = favoriteFood.find(food => food.length > 4);
console.log(fiveLetterFood);

//Output: "barreado"

let fiveLetterIndex = favoriteFood.findIndex(food => food === fiveLetterFood);
console.log(fiveLetterIndex);

//Output: 0