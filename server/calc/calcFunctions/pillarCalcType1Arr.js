const { PillarClasses } = require("./classes/PillarClasses")
const { BrickPillarClass } = require("./classes/BrickClasses")
const { MortarClass } = require("./classes/MortarClass")

function pillarCalcType1Arr(obj) {
    //console.log("inside pillar type 1 func")
    let equalArr = [];

    let objPillars = new PillarClasses(obj);
    equalArr.push(objPillars)

    let objBricks = new BrickPillarClass(obj);
    let objMortar = new MortarClass(objBricks);
    equalArr.push(objBricks, objMortar)

    return equalArr
}

module.exports.pillarCalcType1Arr = pillarCalcType1Arr;