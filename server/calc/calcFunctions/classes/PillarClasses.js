class PillarClasses {
    constructor(obj) {
        this.name = "Столб"
        this.char = `длинна: ${obj.baseDepth + obj.fenceHeight} м`
        this.unitOfMeasurement = "шт"
        this.type = "материал"        
        this.quantity = obj.pillarsNum
        this.expandRow = ""
    }
}

class FastenPlace {
    constructor(obj) {
        this.name = "Место крепеления"
        this.char = ``
        this.unitOfMeasurement = "шт"
        this.type = "другое"        
        this.quantity = obj.pillarsNum * 2
        this.expandRow = "Это наименование обозначет количество мест в которых горизонтальная балка крепится к колонне. Так как существует множество способов крепления (cварка, уголки, хомуты и тд) я не расписываю их по пунктам, но указываю чтоб вы не забыли указать материал для них"
    }
}

module.exports.FastenPlace = FastenPlace;
module.exports.PillarClasses = PillarClasses;