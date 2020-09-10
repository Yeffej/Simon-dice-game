const button = document.querySelector("#btstart")
const red = document.querySelector("#red")
const green = document.querySelector("#green")
const violet = document.querySelector("#violet")
const purple = document.getElementById("purple")
const colorsTable = document.getElementById("colorsTable")
const colorsTableStyle = window.getComputedStyle(colorsTable)
const colorsTableValue = colorsTableStyle.getPropertyValue("display")
const colorsAttribute = colorsTable.getAttribute("style") 
const audio = document.getElementById("audio1")
const audio2 = document.getElementById("audio2")
const audio3 = document.getElementById("audio3")
const audio4 = document.getElementById("audio4")
const max_level = 3 

class game {
    constructor() {
        this.gameboardStart()
        this.randomShow()
        setTimeout(()=> this.nextLevel(), 500 )   
    }
        gameboardStart () {
            this.checkOutEvent = this.checkOutEvent.bind(this)
            button.classList.toggle("hide")
            this.hideTheGameboard()
            // console.log(swal)
            this.level = 1
            this.colors = {
                red, 
                green,
                violet,
                purple,
            }
            this.audios = {audio, audio2, audio3, audio4,} 
        }
        hideTheGameboard() {
            const style = colorsTable.style.display
            if(style === "initial") {
                colorsTable.style.setProperty("display", "none")
            }else {
                colorsTable.style.setProperty("display", "initial")
            }
        }
        nextLevel () {
            this.shine()
            this.sublevel = 0
            this.addinglisteners()
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
            this.randomNumbers = new Array(max_level).fill(0).map(n => n = Math.floor(Math.random()*4))

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
                const colorChose = this.transformAColor(this.randomNumbers[i])
                const audioChose = this.transformAaudio(colorChose)
                // console.log(audioChose)
                setTimeout(() => this.turnOn(colorChose, audioChose), 2800*i) 
            }      
        }
        turnOn(color, audiox) {
            this.audios[audiox].play()
            this.colors[color].classList.add("light")
            setTimeout(() => this.tunroff(color), 2000);
        }
        tunroff(color) {
            this.colors[color].classList.remove("light")
        }
        levelup() {
            // this.level ++
            if (this.level !== max_level) {
                this.level ++
               setTimeout(() => this.nextLevel(), 2000); 
            }else {
                this.removinglisteners()
                swal("Felicidades!, ¡Ganaste el juego!", "Completaste todos los niveles", "success")
                .then(this.gameboardStart())
                .catch(() => alert("Lo siento ha habido un error del sistema"))
            }

        }
        turnclick(clickedColor) {
            this.colors[clickedColor].classList.add("click")
            const audioClicked = this.transformAaudio(clickedColor)
            this.audios[audioClicked].play()
            setTimeout(() => this.turnClickOff(clickedColor), 800)
        }
        turnClickOff(click) {
            this.colors[click].classList.remove("click")
        }
        transformANumber(color) {
            switch (color) {
                case "red": 
                    return 0;
                case "green":
                    return 1;
                case "violet": 
                    return 2;
                case "purple": 
                    return 3;
            }
        }

        checkOutEvent(ev) {
            const clickedColor = ev.target.dataset.color
            this.turnclick(clickedColor)
            const clickedColorNumber = this.transformANumber(clickedColor)
            if (clickedColorNumber === this.randomNumbers[this.sublevel]) {
                this.sublevel ++
                if (this.level === this.sublevel) {
                    this.levelup()
                    this.removinglisteners()
                }
            }else {
                this.removinglisteners()
                // if (swal) {
                    swal("ups, Perdiste el juego", "Intentalo de nuevo", "error")
                    .then(this.gameboardStart())
                    .catch(() => alert("Lo sentimos ha habido un error del sistema"))
                // } else {
                //     alert("Lo sentimos al parecer ha ocurrido un error en la conexión")
                // }
    
            }  
            
        }

        addinglisteners() {
            red.addEventListener("click", this.checkOutEvent)
            purple.addEventListener("click", this.checkOutEvent)
            violet.addEventListener("click", this.checkOutEvent)
            green.addEventListener("click", this.checkOutEvent)
        }
        removinglisteners() {
            red.removeEventListener("click", this.checkOutEvent)
            purple.removeEventListener("click", this.checkOutEvent)
            violet.removeEventListener("click", this.checkOutEvent)
            green.removeEventListener("click", this.checkOutEvent)
        }
      
    }


function StartThegame() {
    let Game
    Game = new game()
}
