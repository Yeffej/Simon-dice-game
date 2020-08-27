const button = document.querySelector("#btstart")
const red = document.querySelector("#red")
const green = document.querySelector("#green")
const violet = document.querySelector("#violet")
const purple = document.getElementById("purple")
const colorsTable = document.getElementById("colorsTable")
const colorsTableStyle = window.getComputedStyle(colorsTable)
const colorsTableValue = colorsTableStyle.getPropertyValue("display") 

class game {
    constructor() {
        // this.initial()
        this.gameboard()
    }
    gameboard () {
        button.classList.add("hide")
        if (colorsTableValue === "none"){
            colorsTable.style.setProperty("display", "initial")
        }
    }
}

function StartThegame() {
    let Game
     Game = new game()
}
