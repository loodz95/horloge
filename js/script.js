// Séléctionner les aiguilles de montre
const AIGUILLEHR = document.querySelector("#hour");
const AIGUILLEMIN = document.querySelector("#minute");
const AIGUILLESEC = document.querySelector("#second");
//Extraire l'heure actuel à l'aide de l'objet Date()
function demarrerLaMontre() {
  const date = new Date();
  const hours = ((date.getHours() + 11) % 12) + 1;
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  const hour = hours * 30;
  const minute = minutes * 6;
  const second = seconds * 6;

  //Stocker l'heure , minute , seconde  dans des varaiables

  // Calculer de degré de mouvement de l'aiguille heure, de l'aiguille minute, de l'aiguille seconde
  //pour l'aiguille heure 360/12 pour avoir 12 fois tour de l'horloge
  // Hint : Tous les aiguilles doivent se déplacer chaque second selon un degré

  // Déplacer les aiguilles

  document.querySelector("#hour").style.transform = `rotate(${hour}deg)`;
  document.querySelector("#minute").style.transform = `rotate(${minute}deg)`;
  document.querySelector("#second").style.transform = `rotate(${second}deg)`;
}
// Exercuter la fonction chaque second
var interval = setInterval(demarrerLaMontre, 1000);
