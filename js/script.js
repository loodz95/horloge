// Séléctionner les aiguilles de montre
const AIGUILLEHR = document.querySelector("#hour");
const AIGUILLEMIN = document.querySelector("#minute");
const AIGUILLESEC = document.querySelector("#second");
//Extraire l'heure actuel à l'aide de l'objet Date()
let date = new Date();
let hours = ((date.getHours() + 11) % 12) + 1;
let minutes = date.getMinutes();
let seconds = date.getSeconds();
let degHeure = 0;
00833;
let degMinute = 0.1;
let degSeconde = 6;

let hour =
  hours * degHeure * 3600 + degHeure * 60 * minutes + degHeure * seconds;
let second = seconds * degSeconde;
let minute = minutes * 60 * degMinute + degMinute * seconds;

document.querySelector("#hour").style.transform = `rotate(${hour}deg)`;
document.querySelector("#minute").style.transform = `rotate(${minute}deg)`;
document.querySelector("#second").style.transform = `rotate(${second}deg)`;

function demarrerLaMontre() {
  document.querySelector("#hour").style.transform += `rotate(${degHeure}deg)`;
  document.querySelector(
    "#minute"
  ).style.transform += `rotate(${degMinute}deg)`;
  document.querySelector(
    "#second"
  ).style.transform += `rotate(${degSeconde}deg)`;
}
// Exercuter la fonction chaque second
var interval = setInterval(demarrerLaMontre, 1000);
