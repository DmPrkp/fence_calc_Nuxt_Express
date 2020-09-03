class Enamel {
    constructor(obj) {
        this.name = "Карска-эмаль"
        this.char = "ПФ-115"
        this.type = "материал"
        this.consumption = 0.084        
        this.unitOfMeasurement = "кг"
        this.quantity = Math.ceil(obj.paintSquare * this.consumption)
        this.expandRow = `Из расчета ${this.consumption*100}кг на 100м2`
        this.idName = obj.paintSquare
    }
}

module.exports.Enamel = Enamel;
