/**
 * new URLSearchParams(window.location.search).get("index")
 * Questo è un modo per ottenere il valore di un parametro passato nell'url
 * In questo caso il parametro è "index" che è il numero dell'utente
 * Lo salvo nella variabile index per altre info https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams
 * @type {URLSearchParams}
 */
const params = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
});

let index = params.index;

/**
 * Questa funzione mi permette di andare ad impostare la pagina con i dati dell'utente
 * che ho selezionato nella pagina precedente
 * @param {*} index
 * @returns
 */
function setPage(){
    //reset page
    document.getElementById("cars").innerHTML = "";

    const params = new Proxy(new URLSearchParams(window.location.search), {
        get: (searchParams, prop) => searchParams.get(prop),
    });

    let index = params.index;

    //prendo gli utenti dal local storage
    let users = JSON.parse(localStorage.getItem("users"));
    //inserisco i dati dell'utente nella pagina html
    document.getElementById("user").innerHTML = users[index].name + " " + users[index].surname;
    document.getElementById("mail").innerHTML = users[index].mail;
    document.getElementById("country").innerHTML = users[index].country;

    //verifico se l'utente ha delle auto
    if (users[index].cars == null) {
        //creo un elemento li
        let li = document.createElement("li");
        //inserisco il testo No cars to show
        li.innerHTML = "No cars to show";
        //inserisco l' li nella lista
        document.getElementById("cars").appendChild(li);
    }else {
        //se l'utente ha delle auto le inserisco nella lista
        for (let i = 0; i < users[index].cars.length; i++) {
            //creo un elemento li
            let li = document.createElement("li");
            //inserisco il testo con i dati dell'auto
            li.innerHTML = "<a href='infoCar.html?index=" + index + "&car=" + i + "'>" + users[index].cars[i].model + "</a>";
            //inserisco l' li nella lista
            document.getElementById("cars").appendChild(li);
        }
    }
}

/**
 * Questa funzione permette di eliminare un utente
 * @param {*} index
 * @returns
 */
function deleteUser(){
    const params = new Proxy(new URLSearchParams(window.location.search), {
        get: (searchParams, prop) => searchParams.get(prop),
    });
    //indice dell'utente nell'array
    let index = params.index;
    //prendo gli utenti dal local storage
    let users = JSON.parse(localStorage.getItem("users"));
    //elimino l'utente dall'array
    users.splice(index, 1);
    //salvo l'array nel local storage
    localStorage.setItem("users", JSON.stringify(users));
    //notifico l'utente e lo reindirizzo alla home page
    alert("User deleted");
    window.location.href = "../index.html";
}

/**
 * Funzione che va a reindirizzare l'utente alla pagina dove può aggiungere una nuova auto
 * @returns
 */
function addCarPage(){
    window.location.href = "addCar.html?index=" + index;
}

/**
 * Funzione che mi permette di aggiungere una nuova auto
 * @returns
 */
function addCar(){
    //prendo gli utenti dal local storage e li salvo in variabili
    let users = JSON.parse(localStorage.getItem("users"));
    let brand = document.getElementById("brand");
    let model = document.getElementById("model");
    let year = document.getElementById("year");

    //creo un oggetto auto con i dati inseriti dall'utente
    let car = {
        brand: brand.value,
        model: model.value,
        year: year.value
    }

    //verifico se l'utente ha delle auto
    if (users[index].cars == null) {
        users[index].cars = [];
    }

    //inserisco la nuova auto nell'array delle auto dell'utente
    users[index].cars.push(car);
    //salvo l'array degli utenti nel local storage
    localStorage.setItem("users", JSON.stringify(users));
    //notifico l'utente
    alert("Car added");
    //resetto i campi del form
    brand.value = "";
    model.value = "";
    year.value = "";
    //reindirizzo l'utente alla pagina con i dati dell'utente
    window.location.href = "infoUser.html?index=" + index;
}

