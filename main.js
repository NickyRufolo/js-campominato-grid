const griglia = document.getElementById(`griglia`);
console.log( griglia );



// creiamo una funzione per creare un div quadrato dentro la griglia
function creazioneQuadrato(param){ // setto un parametro che mi servira per inserire un testo nel div lo assoccio a qualcosa che a me serve
    const div = document.createElement(`div`);
    div.classList.add(`quadrato`);
    div.innerHTML = param;
    return div; 
}

console.log( creazioneQuadrato() );

//inseriamo il quadrato creato dalla funzione nella griglia
//griglia.append(creazioneQuadrato());

let num = 0 //creo variabile numero 
//100 quadrati
for(let i = 0; i<100; i++){
    num = num + 1;
    let elementoCorrente = creazioneQuadrato(num); //L'ho chiamata elementoCorrente la variabile, perchè non avrei potuto usare creazioneQuadrato dato che è funziona
    console.log(elementoCorrente); //controlliamo se crea div con classe quadrato

    elementoCorrente.addEventListener(`click`, function(){ //mi creo un evento al click proprio in quell elemento associa evento al click
        console.log(this); //la possibilita di andare a targhetizzare l'elemento con cui stiamo lavorando
        this.classList.toggle(`yellow`); //di tutto quello che è l'html aggiungo la classe con il toggle active

    })

    griglia.append(elementoCorrente);

}


