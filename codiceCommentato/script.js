function addUser() {
    window.location.href = "html/newUser.html";
}


function newUser(){
    let users = JSON.parse(localStorage.getItem("users"));
    let name = document.getElementById("name");
    let surname = document.getElementById("surname");
    let mail = document.getElementById("mail");
    let country = document.getElementById("country");

    if (users == null) {
        users = [];
    }
    let user = {
        name: name.value,
        surname: surname.value,
        mail: mail.value,
        country: country.value,
        cars: []
    }
    users.push(user);
    localStorage.setItem("users", JSON.stringify(users));
    alert("User added");

    name.value = "";
    surname.value = "";
    mail.value = "";
    country.value = "";

}

function showUsers() {
    //reset list
    let list = document.getElementById("users");
    while (list.firstChild) {
        list.removeChild(list.firstChild);
    }
    let users = JSON.parse(localStorage.getItem("users"));
    if (users == null) {
        users = [];
        let li = document.createElement("li");
        li.innerHTML = "No users to show";
        document.getElementById("users").appendChild(li);
    } else {
        for (let i = 0; i < users.length; i++) {
            let li = document.createElement("li");
            li.innerHTML = "<a href='html/infoUser.html?index=" + i + "'>" + users[i].name + " " + users[i].surname + "</a>";
            document.getElementById("users").appendChild(li);
        }
    }

    
    
}

function changeBackground(x){
    
 }