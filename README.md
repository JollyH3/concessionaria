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

```js

```
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
