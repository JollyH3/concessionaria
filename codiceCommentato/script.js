/**
 * Funzione che mi reinidirizza l'utente alla pagina di aggiunta di un nuovo utente
 * @returns
 */
function addUser() {
    window.location.href = "html/newUser.html";
}

/**
 * Funzione che mi permette di aggiungere un nuovo utente
 * @returns
 */
function newUser(){
    //prendo l'array di utenti dal local storage
    let users = JSON.parse(localStorage.getItem("users"));
    //prendo i dati inseriti nel form di registrazione nuovo utente
    let name = document.getElementById("name");
    let surname = document.getElementById("surname");
    let mail = document.getElementById("mail");
    let country = document.getElementById("country");

    //verifico se l'array di utenti è vuoto
    if (users == null) {
        //se è vuoto inizializzo l'array
        users = [];
    }
    //creo un oggetto utente con i dati inseriti dall'utente
    let user = {
        name: name.value,
        surname: surname.value,
        mail: mail.value,
        country: country.value,
        cars: []
    }
    //inserisco l'utente nell'array di utenti
    users.push(user);
    //salvo l'array di utenti nel local storage
    localStorage.setItem("users", JSON.stringify(users));
    //notifico l'utente
    alert("User added");

    //resetto i campi del form
    name.value = "";
    surname.value = "";
    mail.value = "";
    country.value = "";

}

/**
 * Funzione che permette di vedere tutti gli utenti creando una lista
 * @returns
 */
function showUsers() {
    //reset list
    let list = document.getElementById("users");
    //ciclo while list.firstChild restituisce il primo figlio della lista quindi TRUE finchè la lista non è vuota
    //e quindi restituisce null che è FALSE
    while (list.firstChild) {
        //rimuovo il primo figlio della lista
        list.removeChild(list.firstChild);
    }

    //prendo gli utenti dal local storage
    let users = JSON.parse(localStorage.getItem("users"));
    //verifico se l'array di utenti è vuoto
    if (users == null) {
        //inizializzo l'array
        users = [];
        //creo l'elemento li
        let li = document.createElement("li");
        //creo il testo da inserire nell'elemento li
        li.innerHTML = "No users to show";
        //inserisco l'elemento li nella lista
        document.getElementById("users").appendChild(li);
    } else {
        //ciclo for per scorrere l'array di utenti
        for (let i = 0; i < users.length; i++) {
            //creo l'elemento li
            let li = document.createElement("li");
            //creo il testo da inserire nell'elemento li, il testo è un link che mi permette di andare alla pagina infoUser.html
            //passando come parametro l'indice dell'utente
            li.innerHTML = "<a href='html/infoUser.html?index=" + i + "'>" + users[i].name + " " + users[i].surname + "</a>";
            //inserisco l'elemento li nella lista
            document.getElementById("users").appendChild(li);
        }
    }



}

function changeBackground(x){

}