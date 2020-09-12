class PowerTools {
    constructor() {     
        this.unitOfMeasurement = "шт"
        this.type = "инструмент"        
        this.quantity = 1
        this.expandRow = ""
    }
}

class Saw extends PowerTools {
    constructor() {
        super() 
        this.name = "Циркулярная пила"
        this.char = "любая"
        this.expandRow = "для раскройки досок"
    }
}

module.exports.Saw = Saw;