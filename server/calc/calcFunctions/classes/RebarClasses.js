class StripRebar {
    constructor(obj, diaN) {
        this.name = "Арматура"
        this.unitOfMeasurement = "м/п"
        this.type = "материал"        
        if (diaN === 12) {
            this.quantity = ((obj.overallLength + obj.pillarsNum * obj.baseDepth) * 4).toFixed(1);
            this.char = "Ø12. Класс: А500с либо А3(АЗ запрещено варить). Стержней по 11.7м/п с запасом 10%- " + (this.quantity / 11.7 * 1.1).toFixed(0) + " шт"
            this.expandRow = "Длинную арматуру разумно заменить на пластиковую"
        } else if (diaN === 6) {
            this.quantity = ((obj.overallLength + obj.pillarsNum * obj.baseDepth) * 1.6 / 0.5).toFixed(1);
            this.char = "Ø6. Класс: А1. Стержней по 11.7м/п с запасом 10% -" + (this.quantity / 11.7 * 1.1).toFixed(0) + " шт"
            this.expandRow = "Данная арматура используется для изготовления хомутов с шагом 50см. Не рекомендуется заменять на пластиковую в связи с невозможностью изготовления хомута"
        }
    }
}

class PillarRebar {
    constructor(obj, diaN) {
        this.name = "Арматура"
        this.unitOfMeasurement = "м/п"
        this.type = "материал"
        if (diaN === 12) {
            this.quantity = ((obj.pillarsNum * obj.baseDepth) * 4).toFixed(1);
            this.char = "Ø12. Класс: А500с либо А3(АЗ запрещено варить). Стержней по 11.7м/п с запасом 10%- " + (this.quantity / 11.7 * 1.1).toFixed(0) + " шт"            
        } else if (diaN === 6) {
            this.quantity = ((obj.pillarsNum * obj.baseDepth) * 1.6 / 0.3).toFixed(1);
            this.char = "Ø6. Класс: А1. Стержней по 11.7м/п с запасом 10% -" + (this.quantity / 11.7 * 1.1).toFixed(0) + " шт"
            this.expandRow = "Данная арматура используется для изготовления хомутов с шагом 50см. Не рекомендуется заменять на пластиковую в связи с невозможностью изготовления хомута"
        }
    }
}

class Wire {
    constructor(rebarClassObj) {
        this.name = "Вязальная проволока"
        this.unitOfMeasurement = "м/п"
        this.char = "Толщина: 1.2мм."
        this.type = "материал"
        this.quantity = (rebarClassObj.quantity * 1.93).toFixed(0);
        this.expandRow = "Расчтано для расхода 15кг проволоки на тонну арматуры. При толщине проволки 1.2мм вес одного метра 9гр."
    }
}

class TieWireTwister {
    constructor() {
        this.name = "Крюк"
        this.unitOfMeasurement = "шт"
        this.type = "инструмент"
        this.char = "для вязки арматуры"
        this.quantity = 1
        this.expandRow = "Для вязки арматуры с помощью вязальной проволоки. Расчитать на каждого арматурщика."
    }
}

module.exports.TieWireTwister = TieWireTwister;
module.exports.Wire = Wire;
module.exports.PillarRebar = PillarRebar;
module.exports.StripRebar = StripRebar;