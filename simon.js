const button = document.querySelector("#btstart")
const red = document.querySelector("#red")
const green = document.querySelector("#green")
const violet = document.querySelector("#violet")
const purple = document.getElementById("purple")
const colorsTable = document.getElementById("colorsTable")
const colorsTableStyle = window.getComputedStyle(colorsTable)
const colorsTableValue = colorsTableStyle.getPropertyValue("display") 
const audio = document.getElementById("audio1")
const audio2 = document.getElementById("audio2")
const audio3 = document.getElementById("audio3")
const audio4 = document.getElementById("audio4")


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
            this.audios = {audio, audio2, audio3, audio4,}
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
        transformAaudio(color) {
            switch(color) {
                case "red": 
                    return "audio"
                case "green":
                    return "audio2"
                case "purple":
                    return "audio3"
                case "violet":
                    return "audio4"
            }
        }
        shine() {
            for (let i = 0; i < this.level; i++) {
                const colorChose = this.transformAColor(this.showAcolor[i])
                const audioChose = this.transformAaudio(colorChose)
                console.log(audioChose)
                setTimeout(() => this.turnOn(colorChose, audioChose), 3250*i) 
            }      
        }
        turnOn(color, audiox) {
            this.audios[audiox].play()
            this.colors[color].classList.add("light")
            setTimeout(() => this.tunroff(color, audiox), 2750);
        }
        tunroff(color, audiox) {
            this.audios[audiox].pause()
            this.colors[color].classList.remove("light")
        }
    }


function StartThegame() {
    let Game
    Game = new game()
}
