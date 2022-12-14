[![Website](https://img.shields.io/website?down_color=red&down_message=offline&up_color=green&up_message=online&url=http%3A%2F%2Fconcessionariadejolly.works%2F)](http://concessionariadejolly.works/)
![Languages](https://img.shields.io/github/languages/count/JollyH3/concessionaria)
[![CodeQuality](https://www.codefactor.io/repository/github/jollyh3/concessionaria/badge)](https://www.codefactor.io/repository/github/jollyh3/concessionaria)
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

>Script per tutte le funzionalit√† dell'index

### Funzione addUser()
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
 
 ```alert("User added")``` compare un avviso dove avvisa che l'utente √® stato aggiunto

### Funzione showUsers()

>Questa funzione va a mostrare tutti gli utenti che ci sono nell'array

```js
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
```

```
let list = document.getElementById("users");
```

Vado a salvare in una variabile il tag lista

```
    while (list.firstChild) {
        list.removeChild(list.firstChild);
    }
```

[list.firstChild](https://www.w3schools.com/jsref/prop_node_firstchild.asp) restituisce il primo figlio del nodo (lista)

[list.removeChild(list.firstChild)](https://www.w3schools.com/jsref/met_node_removechild.asp) rimuove il primo figlio del nodo (lista)

>Come fa a funzionare questo ciclo?
>Questo cuclo funziona grazie hai [valori booleani di js](https://www.w3schools.com/js/js_booleans.asp), in questo caso [list.firstChild](https://www.w3schools.com/jsref/prop_node_firstchild.asp) ci restituisce il primo figlio quindi √® come se ci fosse un valore, mentre quando non ci saranno pi√Ļ figli restituira Null quindi False

```let users = JSON.parse(localStorage.getItem("users"));```

[getItem](https://www.w3schools.com/jsref/met_storage_getitem.asp) restituisce l'elemento specifiacato, in questo caso l'array di utenti

[JSON.parse](https://www.w3schools.com/js/js_json_parse.asp) va a trasformare da JSON (stringa) a linguaggio js

```if (users == null) users = [];``` Se l'array di utenti non esiste vado a inizializzare un array di utenti vuoto

```let li = document.createElement("li");``` [Creo l'elemento](https://www.w3schools.com/jsref/met_document_createelement.asp) li e lo salvo in una variabile

```li.innerHTML = "No users to show";``` Vado a scrivere all'interno del TAG "no users to show"

```document.getElementById("users").appendChild(li);``` [appendChild()](https://www.w3schools.com/jsref/met_node_appendchild.asp) va ad aggiungere ad un nodo (lista) come ultimo figlio di un nodo

```
else {
        for (let i = 0; i < users.length; i++) {
            let li = document.createElement("li");
            li.innerHTML = "<a href='html/infoUser.html?index=" + i + "'>" + users[i].name + " " + users[i].surname + "</a>";
            document.getElementById("users").appendChild(li);
        }
```

# Script per le auto

>[Script commentato](https://github.com/JollyH3/concessionaria/blob/main/codiceCommentato/script.js)
Questo metodo mi permette di estrapolare dall'URL le informazioni che mi interessano, in questo caso nell URL passo l'indice dell array delle persone
e l'indice del auto per sapere che persona √® auto volgio
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

```window.location.search```    Il [window.location.search](https://www.w3schools.com/jsref/prop_loc_search.asp) va a prendere la parte del url che inizia dal ?

```get: (searchParams, prop) => searchParams.get(prop)``` Questa funzione restituisce il valore del dato che ci interessa

```get(target, property)``` [get](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/get) √® un metodo per ottenere un valore di propriet√†

target = l'ogetto di destinazione

property = il nome o simbolo della propriet√† da ottenere

[=>](https://www.w3schools.com/js/js_arrow_function.asp) La funzione freccia ci consente di scrivere una sintassi della funzione pi√Ļ breve

```params.index``` params √® l'oggetto proxy, index √® il nome del dato che volgio ricevere

### Funzione setPage()

>Questa funzione mi permette di andare ad impostare la pagina con i dati dell'utente presi dal local storage

```js
    function setPage(){
    let users = JSON.parse(localStorage.getItem("users"));
    document.getElementById("car").innerHTML = users[index].name + "'s " +  users[index].cars[ncar].model;
    document.getElementById("brand").innerHTML = "Brand: " + users[index].cars[ncar].brand;
    document.getElementById("model").innerHTML = "Model: " + users[index].cars[ncar].model;
    document.getElementById("year").innerHTML = "Registration year: " + users[index].cars[ncar].year;
}
```

```let users = JSON.parse(localStorage.getItem("users"));```

[getItem](https://www.w3schools.com/jsref/met_storage_getitem.asp) restituisce l'elemento specifiacato, in questo caso l'array di utenti

[JSON.parse](https://www.w3schools.com/js/js_json_parse.asp) va a trasformare da JSON (stringa) a linguaggio js

```document.getElementById("car").innerHTML = users[index].name + "'s " +  users[index].cars[ncar].model;```

Il ```document.getElementById("car")``` va a prendere il TAG, ```.innerHTML``` va a scrivere all'interno del TAG = ```users[index].name + "'s " +  users[index].cars[ncar].model;``` nome del proprietario della macchina

### Funzione removeCar()

>Questa funzion epermette di rimuovere un auto da u utente e di aggiornare il local storage

```js
function removeCar(){
    let users = JSON.parse(localStorage.getItem("users"));
    users[index].cars.splice(ncar, 1);
    localStorage.setItem("users", JSON.stringify(users));
    alert("Car deleted");
    window.location.href = "infoUser.html?index=" + index;
}
```

```let users = JSON.parse(localStorage.getItem("users"));```

[getItem](https://www.w3schools.com/jsref/met_storage_getitem.asp) restituisce l'elemento specifiacato, in questo caso l'array di utenti

[JSON.parse](https://www.w3schools.com/js/js_json_parse.asp) va a trasformare da JSON (stringa) a linguaggio js

```users[index].cars.splice(ncar, 1);``` [splice()](https://www.w3schools.com/jsref/jsref_splice.asp) va a rimuovere dall'array l' auto selezionata

```localStorage.setItem("users", JSON.stringify(users))``` salva l'array nel [localStorage](https://www.w3schools.com/jsref/prop_win_localstorage.asp) trasfromandolo in JSON (stringa leggibile)

```alert("Car deleted");``` Avviso l'utente che l amacchina √® stata rimossa

```window.location.href = "infoUser.html?index=" + index;``` Reinderizzo il browser alla pagina infoUser, passando sempre come indice la posizione nell'array della persona

Funzione editCar()

>Questa funzione permette di modificare le informazioni di un auto o tornare indietro (annulo le modifiche)

```js
function editCar(){
    let users = JSON.parse(localStorage.getItem("users"));
    document.getElementById("brand").innerHTML = "<input type='text' id='brand2' value='" + users[index].cars[ncar].brand + "'>";
    document.getElementById("model").innerHTML = "<input type='text' id='model2' value='" + users[index].cars[ncar].model + "'>";
    document.getElementById("year").innerHTML = "<input type='text' id='year2' value='" + users[index].cars[ncar].year + "'>";
    document.getElementById("edit").setAttribute("onclick", "saveCar()");
    document.getElementById("edit").innerHTML = "Save";
    document.getElementById("remove").setAttribute("onclick", "cancel()");
    document.getElementById("remove").innerHTML = "Cancel";
}
```

```let users = JSON.parse(localStorage.getItem("users"));```

[getItem](https://www.w3schools.com/jsref/met_storage_getitem.asp) restituisce l'elemento specifiacato, in questo caso l'array di utenti

[JSON.parse](https://www.w3schools.com/js/js_json_parse.asp) va a trasformare da JSON (stringa) a linguaggio js

>In poche parole vado a cambiare i paragrafi in iinput cosi da poterci scrivere all'interno e vado a cambiare i bottoni cambiandogli nome e funzione

### Funzione saveCar()

>Questa funzione va a salvare l'auto nel local storage con i parametri aggiornati

```js
function saveCar(){
    let users = JSON.parse(localStorage.getItem("users"));
    users[index].cars[ncar].brand = document.getElementById("brand2").value;
    users[index].cars[ncar].model = document.getElementById("model2").value;
    users[index].cars[ncar].year = document.getElementById("year2").value;
    localStorage.setItem("users", JSON.stringify(users));
    alert("Car edited");
    window.location.href = "infoCar.html?index=" + index + "&car=" + ncar;
}
```

```let users = JSON.parse(localStorage.getItem("users"));```

[getItem](https://www.w3schools.com/jsref/met_storage_getitem.asp) restituisce l'elemento specifiacato, in questo caso l'array di utenti

[JSON.parse](https://www.w3schools.com/js/js_json_parse.asp) va a trasformare da JSON (stringa) a linguaggio js

```
    users[index].cars[ncar].brand = document.getElementById("brand2").value;
    users[index].cars[ncar].model = document.getElementById("model2").value;
    users[index].cars[ncar].year = document.getElementById("year2").value;
```

Aggiorno i valori dell'oggetto prendendo i dati modificati dall'utente

```localStorage.setItem("users", JSON.stringify(users))``` salva l'array nel [localStorage](https://www.w3schools.com/jsref/prop_win_localstorage.asp) trasfromandolo in JSON (stringa leggibile)

```alert("Car edited");``` Avviso l'utente che la macchina √® stata modificata

```window.location.href = "infoCar.html?index=" + index + "&car=" + ncar;``` Reinderizzo il browser alla pagina infoCar, passando sempre come indice la posizione nell'array della persona e la macchina scelta

### Funzione cancel()

>Questa funzione semplicemente va ad annulare l'azione di modifica

```js
function cancel(){
    window.location.href = "infoCar.html?index=" + index + "&car=" + ncar;
}
```
[ window.location.href](https://www.w3schools.com/js/js_window_location.asp) va a reinderizzare il browser alla pagina infoCar, passando sempre come indice la posizione nell'array della persona e la macchina scelta

# Script per i nuovi utenti

>Questo metodo mi permette di estrapolare dall'URL le informazioni che mi interessano, in questo caso nell URL passo l'indice dell array delle persone
e l'indice del auto per sapere che persona √® auto volgio
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

```window.location.search```    Il [window.location.search](https://www.w3schools.com/jsref/prop_loc_search.asp) va a prendere la parte del url che inizia dal ?

```get: (searchParams, prop) => searchParams.get(prop)``` Questa funzione restituisce il valore del dato che ci interessa

```get(target, property)``` [get](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/get) √® un metodo per ottenere un valore di propriet√†

target = l'ogetto di destinazione

property = il nome o simbolo della propriet√† da ottenere

[=>](https://www.w3schools.com/js/js_arrow_function.asp) La funzione freccia ci consente di scrivere una sintassi della funzione pi√Ļ breve

```params.index``` params √® l'oggetto proxy, index √® il nome del dato che volgio ricevere

### funzione setPage() 
