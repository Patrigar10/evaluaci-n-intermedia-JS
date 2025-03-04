"use strict";

/*
-Generar un número aleatorio
-Seleccionar el input, el botón, item1 y item2

- Cuando la usuaria hace click en prueba
    PRIMERA PARTE
    - recoger el input introducido
    -comprobar si el input es igual aal número aleatorio
        si el número es igual al aleatorio -> mensaje Has ganado campeona!!!
        si el número es mayor que el aleatorio -> mensaje Demasiado alto
        si el número es menor que el aleatorio -> mensaje Demasiado bajo
        si el número es menor que uno o mayor que 100 -> mensaje El número debe estar entre 1 y 100

    SEGUNDA PARTE
    - cada vez que pulse contador 
    acc = 0 

*/

const numberInput = document.querySelector(".js-number-input");
const btn = document.querySelector(".js-btn");
const listItem1 = document.querySelector(".js-list-item1");
const listItem2 = document.querySelector(".js-list-item2");

function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

const randomNumber = getRandomNumber(100);

console.log("El número aleatorio es " + randomNumber);

const handleclick = (event) => {
  event.preventDefault();
  console.log("has hecho click");

  //Primera parte
  const selectedNumber = parseFloat(numberInput.value);
  console.log("El número seleccionado es " + selectedNumber);
  if (selectedNumber === randomNumber) {
    listItem1.innerHTML = "Has ganado campeona!!!";
  }
  if (selectedNumber > randomNumber) {
    listItem1.innerHTML = "Demasiado alto";
  }
  if (selectedNumber < randomNumber) {
    listItem1.innerHTML = "Demasiado bajo";
  }
  if (selectedNumber < 1 || selectedNumber > 100) {
    listItem1.innerHTML = "El número debe estar entre 1 y 100";
  }
};

btn.addEventListener("click", handleclick);
