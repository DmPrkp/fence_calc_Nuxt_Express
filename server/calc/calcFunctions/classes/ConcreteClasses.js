class PillarBase {
    constructor(obj) {
        this.name = "Бетон"
        this.char = "В25"
        this.unitOfMeasurement = "м³"
        this.type = "материал"
        this.cutPillar = 0.16
        this.pillVolume = (obj.baseDepth * this.cutPillar * obj.pillarsNum)
        this.quantity = this.pillVolume
        this.expandRow = `В случае замеса бетонной смеси вручную необходимо: Цемент М500 ${Math.ceil(this.quantity * 350)}кг;  Песок ${Math.ceil(this.quantity * 650)}кг;  Щебень(фр.5-20) ${Math.ceil(this.quantity * 1250)}кг;  Вода ${this.quantity * 200}л`
    }
}

class StripBase extends PillarBase {
    constructor(obj) {
        super(obj)
        this.cutStrip = 0.16
        this.stripVolume = +(((obj.overallLength - obj.pillarsNum * 0.4) * this.cutStrip).toFixed(2))
        this.quantity = (this.pillVolume + this.stripVolume).toFixed(2)
        this.expandRow = `В случае замеса бетонной смеси вручную необходимо: Цемент М500 ${Math.ceil(this.quantity * 350)}кг;  Песок ${Math.ceil(this.quantity * 650)}кг;  Щебень(фр.5-20) ${Math.ceil(this.quantity * 1250)}кг;  Вода ${Math.ceil(this.quantity * 200)}л`
    }
}

class Chair {
    constructor(objConcrete) {
        this.name = "Фиксатор"
        this.char = "пластиковый"
        this.type = "другое"
        this.quantity = Math.ceil(objConcrete.quantity * 30)
        this.unitOfMeasurement = "шт"
        this.expandRow = "для выполнения защиного слоя бетона для арматуры"
    }
}

class GlowersConc {
    constructor() {
        this.name = "Перчатки"
        this.char = "облитые латексом"
        this.type = "другое"
        this.quantity = 1
        this.unitOfMeasurement = "пара"
        this.expandRow = "для работы с бетоном рекомендуется использовать перчатки с покрытием"
    }
}

class Shovel {
    constructor() {
        this.name = "Лопата"
        this.char = "совковая"
        this.type = "инструмент"
        this.quantity = 2
        this.unitOfMeasurement = "шт"
        this.expandRow = "для работы с бетоном в опалубке"
    }
}

class Membrane {
    constructor(obj) {
        this.name = "Пленка"
        this.char = "техническая в рулонах"
        this.type = "другое"
        this.quantity = obj.overallLength
        this.unitOfMeasurement = "м/п"
        this.expandRow = "для предотвращения дегидратации бетона при жаркой погоде"
    }
}

class Twine {
    constructor(obj) {
        this.name = "Шнур"
        this.char = "кaпроновый"
        this.type = "другое"
        this.quantity = obj.overallLength;
        this.unitOfMeasurement = "м/п"
        this.expandRow = "для разметки"
    }
}

class Bucket {
    constructor(obj) {
        this.name = "Ведро"
        this.char = "12л"
        this.type = "другое"
        this.quantity = 1 + (Math.ceil(obj.overallLength / 100));
        this.unitOfMeasurement = "шт"
        this.expandRow = " "
    }
}

module.exports.Chair = Chair;
module.exports.Bucket = Bucket;
module.exports.Twine = Twine;
module.exports.Shovel = Shovel;
module.exports.Membrane = Membrane;
module.exports.GlowersConc = GlowersConc;
module.exports.StripBase = StripBase;
module.exports.PillarBase = PillarBase;