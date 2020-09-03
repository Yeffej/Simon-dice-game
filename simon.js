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
        // this.randomShow = this.randomShow.bind(game)
        this.gameboardStart()
        this.randomShow()
        this.nextLevel()
    }
        gameboardStart () {
            button.classList.add("hide")
            if (colorsTableValue === "none"){
                colorsTable.style.setProperty("display", "initial")
            } 
            this.level = 7
            this.colors = {
                red, 
                green,
                violet,
                purple,
            }
        }
        nextLevel () {
            this.shine()
        }
        transformAColor(number) {
            
            switch (number) {
                case 0: 
                    return "red";
                case 1:
                    return "green";
                case 2: 
                    return "violet";
                case 3: 
                    return "purple";
            }
        }
        
        randomShow() {
            this.showAcolor = new Array(12).fill(0).map(n => n = Math.floor(Math.random()*4))

        }
        shine() {
            for (let i = 0; i < this.level; i++) {
                const colorChose = this.transformAColor(this.showAcolor[i])
                setTimeout(() => this.turnOn(colorChose), 2000*i) 
            }      
        }
        turnOn(color) {
            this.colors[color].classList.add("light")
            setTimeout(() => this.tunroff(color), 1000);
             
        }
        tunroff(color) {
            this.colors[color].classList.remove("light")
        }
    }


function StartThegame() {
    let Game
    Game = new game()
}
