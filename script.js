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
    let z = 0;
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
        window.location.href = 'list.html';
        alert('Welcome ' + persons[z].username);

    }else {
        alert('Wrong username or password');
        }
    }
}