let nameInput = document.querySelector('input');

let btn = document.querySelector('button');

let form = document.querySelector('#welcomeForm');

let nameSpan = document.querySelector('#name');

btn.addEventListener('click', () => {
    let name = nameInput.value;
    localStorage.setItem('name', name);
    checkForm();
})

function checkForm() {
    let userExists = 'name' in localStorage;
    if (userExists) {
        form.classList.add('hidden');
        nameSpan.innerText = localStorage.getItem('name');
    }
}

checkForm();


let incrementBtn = document.querySelector('#increment');
let decrementBtn = document.querySelector('#decrement');
let counter = document.querySelector('#counter');



incrementBtn.addEventListener('click', () => {
    let count = parseInt(sessionStorage.getItem('counter')) || 0;
    count = count + 1;
    sessionStorage.setItem('counter', count);
    updateCounter();
})

decrementBtn.addEventListener('click', () => {
    let count = parseInt(sessionStorage.getItem('counter')) || 0;
    count = count - 1;
    sessionStorage.setItem('counter', count);
    updateCounter();
})


function updateCounter() {
    let count = parseInt(sessionStorage.getItem('counter')) || 0
    counter.innerText = count;
}

updateCounter();