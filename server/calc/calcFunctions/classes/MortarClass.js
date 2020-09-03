class MortarClass {
    constructor(obj) {
        this.name = "ЦПС"
        this.char = `М150`
        this.unitOfMeasurement = "кг"
        this.type = "материал"       
        this.quantity = Math.ceil(obj.volume * 1900 * 0.189)
        this.expandRow = `Объем раствора: ${(obj.volume * 0.189).toFixed(3)}м³`
    }
}


module.exports.MortarClass = MortarClass;
