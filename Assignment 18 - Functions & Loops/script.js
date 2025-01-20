// function grinder() {
//     console.log("Grinding...")
// }

// grinder();
// grinder();
// grinder();

function grinder(item) {
    console.log("Grinding " + item);

}

grinder('Tomatoes');

grinder();

function add(a, b){
    console.log(a+b);
}

add(2,3);

function sqr(n){
    let result = n * n;
    return result;
}

let result = sqr(3);
console.log(result);

// arrow functions are widely accepted

const demo = () => {
    console.log("This is a demo arrow function.");
}
demo();


//implicit returns in arrow function

cube = n => n * n * n;

console.log(cube(2));


// loops => for, foreach, dowhile, while, forin and forof


let items = ['apple','bread', 'milk', 'cake'];

for(let i = 0; i < items.length; i++){
    console.log(items[i]);
}



