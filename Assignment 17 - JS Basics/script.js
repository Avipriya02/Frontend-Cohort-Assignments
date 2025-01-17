let shoppingList = [
    "Milk",
    "Eggs",
    "Bread",
    ["Apples", "Bananas", "Oranges"],
    ["Potatoes", "Tomatoes", "Onions"]
];

// Accessing Specific Value:

// First item in the grocery list

console.log(`First item in the grocery list: ${shoppingList[0]}`);

// Add "Carrots" to the end of the grocery items list.Log the updated grocery items list.

shoppingList.push("Carrots");

console.log(`Before removing the last item from grocery list: `);

console.log(shoppingList);

// Remove the last item from the grocery items list.Log the updated grocery items list before and after the removal

shoppingList.pop();

console.log(`After removing the last item from grocery list: `);

console.log(shoppingList);

// Remove "Tomatoes" and "Onions" from the grocery items list, and add "Cucumbers" and "Bell Peppers" in their place.Log the updated grocery items list before and after the splice operation.


console.log(`The grocery items before the splice operation: `);

console.log(shoppingList);

console.log(`The grocery items after the splice operation: `);

shoppingList[4].splice(1, 2, "Cucumbers", "Bell Peppers");

console.log(shoppingList);


let student = {
    name: "Amit",
    age: 20,
    grade: "A",
    address: {
        street: "123 Main St",
        city: "Anytown",
        country: "India"
    }
};

//To fetch the student's name.

console.log(`The name of the student is: ${student.name}`);

//To add a new property phone with the value "123-456-7890" to the student object.Log the updated student object.

student.phone = "123-456-7890";

console.log(`The updated student object is: ${student.phone}`);

// To remove the grade property from the student object.Log the updated student object before and after the removal.

delete(student.grade);
console.log(`The object student after deleting grade field is:`);
console.log(student);

//to modify the student's age to 21

student.age = 21;
console.log(`The object student after updating age field is:`);
console.log(student);


// function that takes a number as input and returns "Positive" if the number is greater than 0, "Negative" if it's less than 0, and "Zero" if it's equal to 0.

function checkNumber(number){
    if(number === 0){
        console.log("Zero");
    }
    else if(number > 0){
        console.log("Positive");
    }
    else{
        console.log("Negative");
    }
}
// checkNumber(5);
// checkNumber(-5);
// checkNumber(0);

// Program that evaluates a student's grade based on their score. The program should output "A" if the score is between 90 and 100, "B" if it's between 80 and 89, "C" if it's between 70 and 79, "D" if it's between 60 and 69, and "F" if it's below 60.

function grades(score){
    if(score >= 90 && score <= 100){
        console.log("A");
    }
    else if(score >= 80 && score < 90){
        console.log("B");
    }
    else if (score >= 70 && score < 80) {
        console.log("C");
    }
    else if (score >= 60 && score < 70) {
        console.log("D");
    }
    else{
        console.log("F");
    }
}

// grades(80);
// grades(70);
// grades(58);

// Function that takes a string as input and returns "Truthy" if the string is not empty, "Falsy" otherwise.

function checkString(str){
    if(str){
        console.log("Truthy");
    }
    else{
        console.log("Falsy");
    }
}
// checkString("I am good");

// checkString("");
