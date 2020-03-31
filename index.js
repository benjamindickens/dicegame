"use strict";
let name1 = prompt("Player 1 name");
let name2 = prompt("Player 2 name");
let ch1 = (document.querySelectorAll("p")[0].innerText = `${name1}`);
let ch2 = (document.querySelectorAll("p")[1].innerText = `${name2}`);
function diceGame() {
  let player1 = getRandom();
  let player2 = getRandom();
  function getRandom() {
    return Math.floor(Math.random() * 6);
  }

  console.log(player1);
  console.log(player2);

  function winner() {
    if (player1 === player2) {
      document.querySelector("h1").innerHTML = "NO <span>🐱‍👤</span>‍ BODY";
    } else if (player1 > player2) {
      document.querySelector(
        "h1"
      ).innerHTML = `<span>🐱‍👤</span>‍ ${name1} won!`;
    } else if (player1 < player2) {
      document.querySelector(
        "h1"
      ).innerHTML = `${name2} won! <span>🐱‍👤</span>‍`;
    }
  }

  function getPic1() {
    switch (player1) {
      case 0: {
        document
          .querySelector(".img1")
          .setAttribute("src", "./images/dice1.png");
        break;
      }
      case 1: {
        document
          .querySelector(".img1")
          .setAttribute("src", "./images/dice2.png");
        break;
      }
      case 2: {
        document
          .querySelector(".img1")
          .setAttribute("src", "./images/dice3.png");
        break;
      }
      case 3: {
        document
          .querySelector(".img1")
          .setAttribute("src", "./images/dice4.png");
        break;
      }
      case 4: {
        document
          .querySelector(".img1")
          .setAttribute("src", "./images/dice5.png");
        break;
      }
      case 5: {
        document
          .querySelector(".img1")
          .setAttribute("src", "./images/dice6.png");
        break;
      }
    }
  }

  function getPic2() {
    switch (player2) {
      case 0: {
        document
          .querySelector(".img2")
          .setAttribute("src", "./images/dice1.png");
        break;
      }
      case 1: {
        document
          .querySelector(".img2")
          .setAttribute("src", "./images/dice2.png");
        break;
      }
      case 2: {
        document
          .querySelector(".img2")
          .setAttribute("src", "./images/dice3.png");
        break;
      }
      case 3: {
        document
          .querySelector(".img2")
          .setAttribute("src", "./images/dice4.png");
        break;
      }
      case 4: {
        document
          .querySelector(".img2")
          .setAttribute("src", "./images/dice5.png");
        break;
      }
      case 5: {
        document
          .querySelector(".img2")
          .setAttribute("src", "./images/dice6.png");
        break;
      }
    }
  }
  winner();
  getPic1();
  getPic2();
}
