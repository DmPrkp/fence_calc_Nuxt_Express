const { PillarClasses } = require ("./classes/PillarClasses") 

function pillarCalcType2Arr(obj) {
    //console.log("inside pillar type 2 func")
    let equalArr = [];

    let objPillars = new PillarClasses(obj);
    equalArr.push(objPillars)

    return equalArr
}

module.exports.pillarCalcType2Arr = pillarCalcType2Arr;