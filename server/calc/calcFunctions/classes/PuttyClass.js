class PuttyKnife {
    constructor() {
        this.name = "Шпатель"        
        this.type = "инструмент"
        this.quantity = 1
        this.unitOfMeasurement = "шт"
        
    }
}

class PuttyKnife300c extends PuttyKnife {
    constructor () {
        super()
        this.char = "Ширина 300мм"
        this.expandRow = "для выравнивания бетона на этапе бетонирования. Можно так же использовать кельму или мастерок"
    }
}

class PuttyKnife100c extends PuttyKnife {
    constructor () {
        super()
        this.char = "Ширина 100мм"
        this.expandRow = "для выравнивания бетона на этапе бетонирования. Можно так же использовать кельму или мастерок"
    }
}

module.exports.PuttyKnife100c = PuttyKnife100c;
module.exports.PuttyKnife300c = PuttyKnife300c;