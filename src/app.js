/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  const myEmojis = ["♠️", "♣️", "♦️", "♥"];
  const myNumbers = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];

  const randomNumber = Math.floor(Math.random() * myEmojis.length);
  const randomEmoji = myEmojis[randomNumber];

  const numeroAleatorio = Math.floor(Math.random() * myNumbers.length);
  const randomNumbers = myNumbers[numeroAleatorio];

  const primerDiv = document.getElementById("palo1");
  primerDiv.innerHTML = randomEmoji;

  const segundoDiv = document.getElementById("palo2");
  segundoDiv.innerHTML = randomEmoji;

  const numeroDiv = document.getElementById("numero");
  numeroDiv.innerHTML = randomNumbers;
};
