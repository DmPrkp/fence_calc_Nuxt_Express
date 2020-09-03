class Boards {
    constructor() {
        this.name = "Доска"
        this.unitOfMeasurement = "шт"
        this.type = "материал"
    }
}

class WoodPickets extends Boards {
    constructor(obj) {
        super()
        this.char = 'сечение: 25х150. длинна: 6м'
        this.width = 0.15
        this.quantity = (obj.fenceHeight < 2.01) ? Math.ceil((obj.overallLength / (this.width + 0.005)) / 3) : Math.ceil((obj.overallLength / (this.width + 0.005)) / 2);
        this.paintSquare = (0.15 + 0.025)*2*6*this.quantity
        this.expandRow = 'для обшивки ограждения по горизонтальным направляющим';
    }
}

module.exports.WoodPickets = WoodPickets;