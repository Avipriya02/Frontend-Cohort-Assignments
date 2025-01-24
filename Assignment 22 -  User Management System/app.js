let users = [];
let usersContainer = document.getElementById('usersContainer');
let alert = document.getElementById('alert');
 
function deleteRecord (email){
    let recordIndex = users.findIndex(user=>user.email===email);
    users.splice(recordIndex,1);
    alert.classList.add('danger');
    alert.innerText = 'User Deleted Successfully!';
    hideAlert();
    renderUsers(users);

}
function renderUsers(users) {
    usersContainer.innerHTML = ''; // Clear the container before re-rendering
    users.forEach(user => {
        let div = document.createElement('div');
        let name = document.createElement('p');
        let email = document.createElement('p');
        div.classList.add('user');
        name.innerText = user.name;
        email.innerText = user.email;
        div.appendChild(name);
        div.appendChild(email);
        let button = document.createElement('button');
        button.classList.add('deletebtn');
        button.innerText='Delete';
        button.addEventListener('click',()=>deleteRecord(user.email));
        div.appendChild(button);
        usersContainer.appendChild(div);
    });
}
function hideAlert(){
    setTimeout(()=>{
        alert.classList.remove('success','danger');
        alert.innerText='';
    },2000);
    
}
function checkUser(email) {
    let user = users.filter(user => user.email === email);
    return user.length > 0 ? true : false;
}

function addUser() {
    let name = document.getElementById('name');
    let email = document.getElementById('email');

    let user = {
        name: name.value,
        email: email.value
    };
    if(!user.name || !user.email){
        alert.classList.add('danger');
        alert.innerText = 'Email And Name both required!'
        hideAlert();
        return;
    }
    let doesUserExists = checkUser(user.email);
    if(doesUserExists===false){
        users.push(user);
        alert.classList.add('success');
        alert.innerText = 'User Added Successfully!';
        hideAlert();
    }
    else{
        alert.classList.add('danger');
        alert.innerText = 'Email Already Exists!'
        hideAlert();
    }
    renderUsers(users);
    name.value = '';
    email.value = '';
}

