// Mail
// Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo.

// lista mail
var email = ["mario@gmail.com", "franco@gmail.com", "antonio@gmail.com", "alessandro@gmail.com", "rossi@gmail.com"]

// per chiedere la mail all'utente
var emailUtente = prompt('inserisci la tua email')
var emailTrovata = false;

// per cercare la mail nella lista (se possibile)
for ( var i = 0; i < email.length; i++ ) {
    var mailCorrente = email[i];
    
    // se la mail é giusta
    if (emailUtente == mailCorrente) {
        emailTrovata = true;
    }
}

// stampo il risultato a seconda dei casi
if ( emailTrovata ) {
    document.getElementById('result').innerHTML = (emailUtente)
    alert('mail trovata!')

} else {
    document.getElementById('result').innerHTML = ('ricarica la pagina :(')
    alert('mail non trovata!')
}