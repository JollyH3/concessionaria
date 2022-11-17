/**
 *new URLSearchParams(window.location.search).get("index")
 *Questo è un metodo che mi permette di prendere il valore di un parametro passato nell'url
 *In questo caso prendo il valore del parametro "index" che è stato passato nell'url
 *E lo salvo nella variabile index stesa cosa faccio per il parametro "car"
 *Per altre info https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams
 *@type {URLSearchParams}
 */
const params = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
});

let index = params.index;
let ncar = params.car;

/**
 * Questa funzione mi permette di andare ad impostare la pagina con i dati dell'utente
 * che vado a prendere dal localStorage e li imposto nella pagina
 * @param {number} index
 * @param {number} ncar
 * @returns {void}
 */
function setPage(){
    //prendo gli utenti dal localStorage e lo salvo nella variabile users per altre info leggere il README
    let users = JSON.parse(localStorage.getItem("users"));
    document.getElementById("car").innerHTML = users[index].name + "'s " +  users[index].cars[ncar].model;
    document.getElementById("brand").innerHTML = "Brand: " + users[index].cars[ncar].brand;
    document.getElementById("model").innerHTML = "Model: " + users[index].cars[ncar].model;
    document.getElementById("year").innerHTML = "Registration year: " + users[index].cars[ncar].year;
}

/**
 * Questa funzione mi permette di rimuovere un auto da un utente e di aggiornare il localStorage
 * @param {number} index
 * @param {number} ncar
 * @returns {void}
 */
function removeCar(){
    //prendo gli utenti dal localStorage e lo salvo nella variabile users per altre info leggere il README
    let users = JSON.parse(localStorage.getItem("users"));
    //rimuovo l'auto dall'utente
    users[index].cars.splice(ncar, 1);
    //aggiorno il localStorage
    localStorage.setItem("users", JSON.stringify(users));
    //alert per avvisare l'utente che l'auto è stata rimossa e faccio un redirect alla pagina infoUser.html
    alert("Car deleted");
    window.location.href = "infoUser.html?index=" + index;
}

/**
 * Questa funzione fa modificare i dati dell'auto all'utente
 * @param {number} index
 * @param {number} ncar
 * @returns {void}
 */
function editCar(){
    //prendo gli utenti dal localStorage e lo salvo nella variabile users per altre info leggere il README
    let users = JSON.parse(localStorage.getItem("users"));
    //scrive i dati dell'auto nella pagina
    document.getElementById("brand").innerHTML = "<input type='text' id='brand2' value='" + users[index].cars[ncar].brand + "'>";
    document.getElementById("model").innerHTML = "<input type='text' id='model2' value='" + users[index].cars[ncar].model + "'>";
    document.getElementById("year").innerHTML = "<input type='text' id='year2' value='" + users[index].cars[ncar].year + "'>";
    //cambia il bottone di modifica con il bottone di salvataggio
    document.getElementById("edit").setAttribute("onclick", "saveCar()");
    document.getElementById("edit").innerHTML = "Save";
    //cambia il bottone di cancellazione con il bottone di annullamento
    document.getElementById("remove").setAttribute("onclick", "cancel()");
    document.getElementById("remove").innerHTML = "Cancel";

}

/**
 * Questa funzione mi permette di salvare i dati modificati dell'auto
 * @param {number} index
 * @param {number} ncar
 * @returns {void}
 */
function saveCar(){
    //prendo gli utenti dal localStorage e lo salvo nella variabile users per altre info leggere il README
    let users = JSON.parse(localStorage.getItem("users"));
    //prendo i dati modificati dall'utente e li salvo nelle variabili del array di utenti
    users[index].cars[ncar].brand = document.getElementById("brand2").value;
    users[index].cars[ncar].model = document.getElementById("model2").value;
    users[index].cars[ncar].year = document.getElementById("year2").value;
    //aggiorno il localStorage
    localStorage.setItem("users", JSON.stringify(users));
    //alert per avvisare l'utente che i dati sono stati salvati e faccio un redirect alla pagina infoUser.html
    alert("Car edited");
    window.location.href = "infoCar.html?index=" + index + "&car=" + ncar;
}

/**
 * Questa funzione mi permette di annullare le modifiche fatte all'auto
 * @param {number} index
 * @param {number} ncar
 * @returns {void}
 */
function cancel(){
    //redirect alla pagina infoCar.html per annullare le modifiche fatte
    window.location.href = "infoCar.html?index=" + index + "&car=" + ncar;
}