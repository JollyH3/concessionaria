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
```users.push(user)``` inserisce nell'array di utenti l'oggetto utente creato in precedenza 
[metodo push](https://www.w3schools.com/jsref/jsref_push.asp)

```localStorage.setItem("users", JSON.stringify(users))``` salva l'array nel [localStorage](https://www.w3schools.com/jsref/prop_win_localstorage.asp)

 ```JSON.stringify(users)``` trasforma in stringa l'array per poterlo salvare [JSON.stringify](https://www.w3schools.com/js/js_json_stringify.asp)
 
 ```alert("User added")``` compare un avviso dove avvisa che l'utente è stato aggiunto

# Script per le auto

>[Script commentato](https://github.com/JollyH3/concessionaria/blob/main/codiceCommentato/script.js)
Questo metodo mi permette di estrapolare dall'URL le informazioni che mi interessano, in questo caso nell URL passo l'indice dell array delle persone
e l'indice del auto per sapere che persona è auto volgio
```js
const params = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
});

let index = params.index;
let ncar = params.car;
```
```new Proxy(target, handler)``` 

Il proxy consente di creare un proxy per un altro oggetto, che puo prendere e ridefinire le operazioni fondamentali di quel oggetto [altre info](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy?retiredLocale=it)

target = L'oggetto originale che vuoi proxare 

handler = Oggetto per definire quali operazioni vanno intercentate e come ridefinire le operazioni intercettate 

```new URLSearchParams(options)```

L' [URLSearchParams(options)](https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams/URLSearchParams) costruttore crea e restituisce un nuovo [URLSearchParams()](https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams/URLSearchParams) oggetto

options = url che ci interessa 

```window.location.search```

Il [window.location.search](https://www.w3schools.com/jsref/prop_loc_search.asp) va a prendere la parte del url che inizia dal ?

```get: (searchParams, prop) => searchParams.get(prop)```

Questa funzione restituisce il valore del dato che ci interessa

```get(target, property)```

[get](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/get) è un metodo per ottenere un valore di proprietà

target = l'ogetto di destinazione

property = il nome o simbolo della proprietà da ottenere



# Script per i nuovi utenti

Script
