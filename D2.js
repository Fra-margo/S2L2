/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
/*
const num1 = parseInt(prompt("Inserisci numero 1"))
const num2 = parseInt(prompt("Inserisci numero 2"))

if(num1 > num2){
  alert(`${num1} è maggiore di ${num2}`)
}
else if(num2 > num1){
  alert(`${num2} è maggiore di ${num1}`)
}
else if(num1 == num2){
  alert("Nessun numero maggiore")
}
else {
  alert("Dati non inseriti correttamente")
}
*/
/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
/*
const num3 = parseInt(prompt("Inserisci numero 3"))

if(num3 != 5){
  console.log("Not Equal")
}
else{
  console.log("Equal")
}
*/
/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
/*
const num4 = parseInt(prompt("Inserisci numero 4"))
if(num4 % 5 == 0){
  console.log("divisibile per 5")
}
else {
  console.log("non divisibile per 5")
}
*/
/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
/*
const num5 = parseInt(prompt("Inserisci numero 5"))
const num6 = parseInt(prompt("Inserisci numero 6"))

if(num5 == 8|| num6 == 8){
  alert("Uno dei due valori è pari a 8")
}
else if(num5 + num6 == 8 || num5 - num6 == 8 || num6 - num5 == 8){
  alert("Il risultato dell'operazione è pari a 8")
}
else {
  alert("Il risultato non contiene il valore 8")
}
*/
/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
/*
let totalShoppingCart = parseFloat(prompt("Saldo totale del carrello"))
const Spedizione = 10
let SaldoTotale = parseFloat(totalShoppingCart + Spedizione)

if(totalShoppingCart <= 50){
  alert(`Il totale della spesa è ${SaldoTotale}`)
}
else if(totalShoppingCart > 50){
  alert("Hai diritto alla spedizione gratuita!")
}
else (
  alert("Errore inserimento dati")
)
/*
/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
/*
let totalShoppingCart = parseFloat(prompt("Saldo totale del carrello"))
const Spedizione = 10
let Blackfriday = parseFloat((totalShoppingCart * 80) / 100)
let SaldoTotale = parseFloat(Blackfriday + Spedizione)

if(Blackfriday <= 50){
  alert(`Il totale della spesa è ${SaldoTotale}`)
}
else if(Blackfriday > 50){
  alert("Hai diritto alla spedizione gratuita!")
}
else (
  alert("Errore inserimento dati")
)
*/
/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
/*
const numero9 = parseInt(prompt("Inserisci un numero"))
let risultato = numero9 % 2

if (risultato == 0){
  alert("Il numero è pari")
}
else if (risultato == 1){
  alert("Il numero è dispari")
}
else{
  alert("Non è un numero intero")
}
*/

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

/* SCRIVI QUI LA TUA RISPOSTA */
/*
let val = parseFloat(prompt("Inserisci qui il numero"))

if (val < 10) {
    console.log("Meno di 10");
  } else if (val < 5) {
    console.log("Meno di 5");
  } else {
    console.log("Uguale a 10 o maggiore");
  }
*/

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}

/* SCRIVI QUI LA TUA RISPOSTA */
/*
me.city = "Toronto"
*/

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
/*
delete me.lastName
*/

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
/*
me.skills.splice(2, 1)
console.log(me)
*/

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
/*
let numeri = []
const numero1 = 1
const numero2 = 2
const numero3 = 3
const numero4 = 4
const numero5 = 5
const numero6 = 6
const numero7 = 7
const numero8 = 8
const numero9 = 9
const numero10 = 10
numeri[0] = numero1
numeri[1] = numero2
numeri[2] = numero3
numeri[3] = numero4
numeri[4] = numero5
numeri[5] = numero6
numeri[6] = numero7
numeri[7] = numero8
numeri[8] = numero9
numeri[9] = numero10
console.log(numeri)
*/
/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
/*
numeri.splice(9, 1, 100)
console.log(numeri)
*/