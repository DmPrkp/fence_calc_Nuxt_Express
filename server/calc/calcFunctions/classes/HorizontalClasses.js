class Horizontal {
    constructor(obj) {
        this.name = "Горизонтальные элементы"
        this.char = "длинна: 6м"
        this.unitOfMeasurement = "шт"
        this.type = "материал"
        this.expandRow = 'Обрезать по месту. Горизонтальные элементы крепятся(рекомендованно) на 3 столба в разбежку.'
        this.quantity = obj.overallLength > 6 ? Math.ceil(obj.overallLength/6)*2 : 2;
    }
}

class WoodenHorizontal extends Horizontal {
    constructor(obj) {
        super(obj) 
        this.char = "длинна: 6м; мин.сечение: 100 х 40мм"
        this.paintSquare = (0.1 + 0.04)*2*6*this.quantity
    }
}



module.exports.WoodenHorizontal = WoodenHorizontal;