class BrickClass {
    constructor() {
        this.name = "Кирпич"
        this.char = `облицовочный`
        this.unitOfMeasurement = "шт"
        this.type = "материал"       
        this.oneBrickVolume = 0.25*0.12*0.065
    }
}

class BrickCoverClass extends BrickClass {
    constructor(obj) {
        super()
        this.volume =  +(((obj.overallLength - obj.pillarsNum * 0.4) * obj.fenceHeight * 0.065).toFixed(3));        
        this.quantity = Math.ceil(this.volume/this.oneBrickVolume);
        this.expandRow = `объем из расчета сплошного заполнения в пол кирпича (${this.volume}м³)`;
    }
}

class BrickPillarClass extends BrickClass {
    constructor(obj) {
        super()
        this.volume = +((obj.fenceHeight * 0.16 * obj.pillarsNum).toFixed(3))              
        this.quantity = Math.ceil(obj.fenceHeight/0.075) * obj.pillarsNum * 4 ;
        this.expandRow = ` `;
    }
}

module.exports.BrickPillarClass = BrickPillarClass;
module.exports.BrickClass = BrickClass;
module.exports.BrickCoverClass = BrickCoverClass;
