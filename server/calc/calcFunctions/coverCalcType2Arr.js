const { WoodenHorizontal } = require ("./classes/HorizontalClasses")
const { WoodPickets  } = require ('./classes/BoardClasses')
const { ScrewsPickets } = require ('./classes/ScrewsClasses')
const { FastenPlace } = require ('./classes/PillarClasses')
const { Enamel } = require ('./classes/EnamelClasses')
const { Saw } = require("./classes/PowerTools")

function coverCalcType2Arr(obj) {
    console.log("inside cover type 2 func")
    let equalArr = [];

    let objHorizontal = new WoodenHorizontal(obj)
    let objFasten = new FastenPlace(obj)
    let objEnemelHorizontal = new Enamel(objHorizontal)
    equalArr.push(objHorizontal, objFasten, objEnemelHorizontal)

    let objWoodPickets = new WoodPickets(obj)
    let objScrewsPickets = new ScrewsPickets(objWoodPickets)
    let objEnemelPickets = new Enamel(objWoodPickets)
    equalArr.push(objWoodPickets, objScrewsPickets, objEnemelPickets)

    let toolSaw = new Saw();
    equalArr.push(toolSaw);
    
    return equalArr
}

module.exports.coverCalcType2Arr = coverCalcType2Arr;