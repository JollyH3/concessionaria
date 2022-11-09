let z;
let u;
function singIn(){
    let persons = JSON.parse(localStorage.getItem('persons'));
    if(persons === null){
        persons = [{username: 'admin', password: 'admin'}];
    }else{
        let persons = JSON.parse(localStorage.getItem('persons'));
    }
    if (document.getElementById("password").value == document.getElementById("passwordConfirm").value) {
        const person = {
            username: document.getElementById("username").value,
            email: document.getElementById("email").value,
            password: document.getElementById("password").value,
            auto: []
        }
        persons.push(person);
        localStorage.setItem('persons', JSON.stringify(persons));

    }else{
        alert("Password and password confirm are not the same");
    }

}

function logIn() {
    let persons = JSON.parse(localStorage.getItem('persons'));
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let found = false;

    if(persons === null){
        alert('No user found, sign in first');
        persons = [{username: 'admin', password: 'admin'}];
    }else{
        let persons = JSON.parse(localStorage.getItem('persons'));
        for(let i = 0; i < persons.length; i++){
            if(username == persons[i].username && password == persons[i].password) {
                z = i
                found = true;
            }
    }
    if(found == true){
        if (username === "admin" && password === "admin") {
            window.location.href = 'admin.html';
            alert("Admin logged in");
        }else{
            window.location.href = 'list.html';
            alert('Welcome ' + persons[z].username);
        }
    }else {
        alert('Wrong username or password');
        }
    }
}

function setPage(){
    let persons = JSON.parse(localStorage.getItem('persons'));

}

function setPageAdmin(){
    location.reload();
    let persons = JSON.parse(localStorage.getItem('persons'));
    let list = document.getElementById('list');
    for (let i = 0; i < persons.length; i++) {
        let li = document.createElement('li');
        li.innerHTML = "<a href='info-User.html?name=" + persons[i].username + "'>" + persons[i].username + "</a>";
        li.id = i;
        list.appendChild(li);
    }
}

function setPageInfo(){
    let persons = JSON.parse(localStorage.getItem('persons'));
    document.getElementById("id").innerHTML = persons[i].username;
}