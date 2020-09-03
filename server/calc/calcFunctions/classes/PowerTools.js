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
        this.char = "если деньги есть возьмите гипойдную"
        this.expandRow = "для раскройки досок"
    }
}

module.exports.Saw = Saw;