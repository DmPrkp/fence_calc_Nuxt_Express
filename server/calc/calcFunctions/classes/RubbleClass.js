class RubbleClass {
    constructor (obj) {
        this.name = "Щебень"
        this.char = "Фракция 5-20мм"
        this.unitOfMeasurement = "кг"
        this.type = "материал"
        this.quantity = (obj.pillarsNum*0.2*0.15*1350).toFixed(1)
        this.expandRow = "для устойства щебеночного основания толщиной до 15см под фундамент столбов"
    }
}

module.exports.RubbleClass = RubbleClass;