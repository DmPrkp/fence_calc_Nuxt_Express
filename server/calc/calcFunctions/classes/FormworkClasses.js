class PillarFormClass {
    constructor(obj) {
        this.name = "Опалубка (общая площадь)"
        this.char = "Если площадь слишком большая пердусмотрите оборачиваемость"
        this.unitOfMeasurement = "м²"
        this.type = "материал"
        this.pillarForm = +((obj.pillarsNum * obj.baseDepth * 0.4 * 4).toFixed(1))
        this.quantity = this.pillVolume
        this.expandRow = "Установка опалубки не описанна подробно в связи с тем, что имеется множество вариантов и материалов для устанивки. Мы обычно используем фанеру,доски и 'шпильки'"
    }
}

class StripForm extends PillarFormClass {
    constructor(obj) {
        super(obj)
        this.stripForm = +((obj.overallLength - obj.pillarsNum * 0.4) * 0.4 * 2).toFixed(1)
        this.quantity = (this.stripForm + this.pillarForm).toFixed(1)       
    }
}

module.exports.PillarFormClass = PillarFormClass;
module.exports.StripForm = StripForm;