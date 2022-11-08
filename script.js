function signIn(){
    let utenti = JSON.parse(localStorage.getItem('utenti'));
    const utente = {
        username: document.getElementById("username").value,
        email: document.getElementById("email").value,
        password: document.getElementById("password").value,
        passwordConfirm: document.getElementById("passwordConfirm").value,
    }
    utenti.push(utente);
    localStorage.setItem("utenti", JSON.stringify(utenti));
    alert("User created");
}

function login(){
    const utenti = JSON.parse(localStorage.getItem('utenti'));
    if(utenti == null){
        alert("No user found, sign in first");
    }else{
        for (let i = 0; i < utenti.length; i++){
            if (utenti[i].username == document.getElementById("username").value && utenti[i].password == document.getElementById("password").value){
                alert("Welcome " + utenti[i].username);
                window.location.href = "welcome.html";
            }else{
                alert("Wrong username or password");
            }
        }
    }
}
