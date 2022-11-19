[![Website](https://img.shields.io/website?down_color=red&down_message=offline&up_color=green&up_message=online&url=http%3A%2F%2Fconcessionariadejolly.works%2F)](http://concessionariadejolly.works/)
![Languages](https://img.shields.io/github/languages/count/JollyH3/concessionaria)
# concessionaria
Sito che mi permette di gestire le auto degli utenti

**Funzioni:**

Vedere gli utenti, aggiungere utenti, eliminare utenti, vedere le info degli utenti
Aggiungere auto ad un utente, eliminare auto dell'utente e modificare i paramteri dell'auto

# Documentazione

Qui potete trovare tutta la documentazione e la spiegazione degli script, in alternativa:
> [CODICE COMMENTATO](https://github.com/JollyH3/concessionaria/tree/main/codiceCommentato)

- [Script.js](#script-base)
- [Script4car.js](#script-per-le-auto)
- [Script4newUser](#script-per-i-nuovi-utenti)


# Script base

>Questa funzione reinderizza il browser ad un altra pagina html
```js
    function addUser() {
         window.location.href = "html/newUser.html";
}
```
```window.location.href``` serve per cambiare il link della pagina
[Guarda su w3school](https://www.w3schools.com/js/js_window_location.asp)

### Function newUser()

>Questa funzione permette di salvare in un utente (come oggetto) i dati in input e poi aggiunge l'utente in un array di utenti infine lo salva sul [localStorage](https://www.w3schools.com/jsref/prop_win_localstorage.asp)
```js
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
```

Questo if verifica che l'array dove vengono salvati gli utenti non sia vuoto, in caso lo crea
```js
if (users == null) {
        users = [];
    }
```
Crea l'oggetto utente e lo riempie con i valori dell'input
```js
 let user = {
        name: name.value,
        surname: surname.value,
        mail: mail.value,
        country: country.value,
        cars: []
    }
```

```js
    users.push(user);
    localStorage.setItem("users", JSON.stringify(users));
    alert("User added");
```
users.push(user) inserisce nell'array di utenti l'oggetto utente creato in precedenza 
[metodo push](https://www.w3schools.com/jsref/jsref_push.asp)

localStorage.setItem("users", JSON.stringify(users)) salva l'array nel [localStorage](https://www.w3schools.com/jsref/prop_win_localstorage.asp)

 JSON.stringify(users) trasforma in stringa l'array per poterlo salvare [JSON.stringify](https://www.w3schools.com/js/js_json_stringify.asp)
 
 alert("User added") compare un avviso dove avvisa che l'utente è stato aggiunto

# Script per le auto

>[Script commentato](https://github.com/JollyH3/concessionaria/blob/main/codiceCommentato/script.js)
```js
const params = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
});

let index = params.index;
let ncar = params.car;
```

# Script per i nuovi utenti
