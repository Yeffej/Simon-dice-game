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
        this.gameboardStart()
    }
    gameboardStart () {
        button.classList.add("hide")
        if (colorsTableValue === "none"){
            colorsTable.style.setProperty("display", "initial")
        }
        showAndClick()
    }
    showAndClick() {
        randomShow()
    }
    randomShow() {
        let colorchose
       const randomNumber = Math.floor(Math.random()* 4)
       switch (randomNumber) {
           case 0:
                colorchose = red
                break;
            case 1: 
                colorchose = green
                break;
            case 2: 
                colorchose = purple
                break;
            case 3: 
                colorchose = violet
       }
       return colorchose
    }
}

function StartThegame() {
    let Game
     Game = new game()
}
