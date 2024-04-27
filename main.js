let textNew = prompt("Enter your text...")
let mainBackground = prompt("Enter your Background...")
let textColor = prompt("Enter your color...")
const title = document.createElement("h1")

const text = document.createTextNode(textNew)
title.appendChild(text)
const main = document.querySelector("body")
main.appendChild(title)
console.log(textNew);

title.style.color = textColor
main.style.backgroundColor = mainBackground

