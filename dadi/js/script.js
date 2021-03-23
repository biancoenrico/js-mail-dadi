// Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. 
// Stabilire il vincitore, in base a chi fa il punteggio più alto.

// Generare numero random per il giocatore 
var dadoGiocatore = Math.floor(Math.random() * 6 ) + 1;


// Generare numero random per il computer
var dadoComputer = Math.floor(Math.random() * 6 ) + 1;


// scelta del vincitore
if (dadoGiocatore > dadoComputer) {

    // vittoria giocatore
    alert('Hai vinto');

} else if (dadoComputer > dadoGiocatore) {
    
    // vittoria computer
    alert('Hai Perso');

} else {

    // pareggio
    alert('Paregio')
}