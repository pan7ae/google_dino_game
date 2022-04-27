"use strict"

const DINO = document.getElementById("dino");
const CACTUS = document.getElementById("cactus");

document.addEventListener("keydown", function (event) {
	jump();
});

function jump() {
	if (DINO.classList != "jump") {
		DINO.classList.add("jump")
	}
	setTimeout(function () {
		DINO.classList.remove("jump")
	}, 300)
}

let isAlive = setInterval(function () {
	let dinoTop = parseInt(window.getComputedStyle(DINO).getPropertyValue("top"));
	let cactusLeft = parseInt(window.getComputedStyle(CACTUS).getPropertyValue("left"));

	if (cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 140) {
		alert("Game Over")
	}
}, 10)