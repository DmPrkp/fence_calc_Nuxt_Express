const { BrickCoverClass } = require ("./classes/BrickClasses")
const { MortarClass } = require ('./classes/MortarClass')

function coverCalcType1Arr(obj) {
    console.log("inside cover type 1 func")
    let equalArr = [];

    let objBrick = new BrickCoverClass (obj);
    let objMortar = new MortarClass (objBrick);
    equalArr.push(objBrick, objMortar)

    return equalArr
}

module.exports.coverCalcType1Arr = coverCalcType1Arr;