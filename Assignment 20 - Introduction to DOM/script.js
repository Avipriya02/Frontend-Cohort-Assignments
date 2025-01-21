function unlocked() {

    let title = document.getElementById('heading');

    title.innerText = 'Congrats! Now you can start learning DOM';

    let btn = document.getElementById('btn');

    btn.style.display = 'none';

}

function welcome() {
    let studentName = document.getElementById('name');
    let nameSpan = document.getElementById('nameSpan');
    nameSpan.innerText = studentName.value;
    studentName.value = "";
}

function split() {
    let amount = document.getElementById('amount');
    let persons = document.getElementById('persons');

    let result = (amount.value / persons.value).toFixed(2);
    let resultDiv = document.getElementById('result');
    resultDiv.innerText = result;
}

function increment() {
    let counterElement = document.getElementById('counterResult');
    let counter = counterElement.innerText;
    counter = parseInt(counter) + 1;
    counterElement.innerText = counter;
}


function decrement() {
    let counterElement = document.getElementById('counterResult');
    let counter = counterElement.innerText;
    if(parseInt(counter) > 0){
        counter = parseInt(counter) - 1;
        counterElement.innerText = counter;
    }
}


