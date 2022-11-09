let z = 0;
function singIn(){
    let persons = JSON.parse(localStorage.getItem('persons'));
    if(persons === null){
        persons = [];
    }else{
        let persons = JSON.parse(localStorage.getItem('persons'));
    }
    if (document.getElementById("password").value == document.getElementById("passwordConfirm").value) {
        const person = {
            name: document.getElementById("name").value,
            email: document.getElementById("email").value,
            password: document.getElementById("password").value,
            passwordConfirm: document.getElementById("passwordConfirm").value
        }
        persons.push(person);
        localStorage.setItem('persons', JSON.stringify(persons));

    }else{
        alert("Password and password confirm are not the same");
    }

}

function logIn(){
    let username = document.getElementsByName('user')[0].value;
    let password = document.getElementsByName('pw')[0].value;
    let persons = JSON.parse(localStorage.getItem('persons'))
    let check = false;

    if (persons == null){
        alert('No user found, sign in first');
    }else{
        for (let i = 0; i < persons.length; i++){
            if (username == persons[i].username && password == persons[i].password){
                z = i
                check = true
            }
        }
        if (check == true){
            alert('Welcome ' + persons[z].name + ' ' + persons[z].surname);
            window.location.href = 'html/list.html';
        }else{
            alert('Wrong username or password');
        }
    }

}
