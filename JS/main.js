const nomeUtente = prompt("Inserisci il tuo nome")
const cognomeUtente = prompt("Inserisci il tuo cognome")
const colorePreferito = prompt("Inserisci il tuo colore preferito")

const nomePassword = document.getElementById("password")
nomePassword.innerHTML = `${nomeUtente}${cognomeUtente}${colorePreferito}21`