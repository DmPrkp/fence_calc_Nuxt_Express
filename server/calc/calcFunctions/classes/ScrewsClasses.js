class ScrewsClass {
    constructor() {
        this.name = "Саморез"
        this.unitOfMeasurement = "шт"
        this.type = "другое"
    }
}

class ScrewsPickets extends ScrewsClass {
    constructor(obj) {
        super()
        this.char = 'оцинкованный; длинна: от 45 до 60мм; толщ: от 3мм.'      
        this.quantity = Math.ceil(obj.quantity*4*3*1.1);
        this.expandRow = 'Не желательно брать минимальную длинну! из расчета 4 самореза на одну заборную доску';
    }
}

module.exports.ScrewsPickets = ScrewsPickets;