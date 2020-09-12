const { baseCalcType1Arr } = require("./calcFunctions/baseCalcType1Arr");
const { baseCalcType2Arr } = require("./calcFunctions/baseCalcType2Arr");
const { baseCalcType3Arr } = require("./calcFunctions/baseCalcType3Arr");

function basementCalc() {
    return function (obj) {
        let basementMaterials = [];
        if (obj.baseType === 1.1) {
            //console.log("inside basement type 1")
            basementMaterials = baseCalcType1Arr(obj)
        } else if (obj.baseType === 1.2) {
            //console.log("inside basement type 2")
            basementMaterials = baseCalcType2Arr(obj)
        } else if (obj.baseType === 1.3) {
            //console.log("inside basement type 3")
            basementMaterials = baseCalcType3Arr()
        }
        return basementMaterials
    }
}

const { pillarCalcType1Arr } = require("./calcFunctions/pillarCalcType1Arr");
const { pillarCalcType2Arr } = require("./calcFunctions/pillarCalcType2Arr");


function pillarCalc() {
    return function (obj) {
        let pillarMaterials = [];
        if (obj.pillarType === 2.1) {            
            pillarMaterials = pillarCalcType1Arr(obj)
        } else if (obj.pillarType === 2.2) {            
            pillarMaterials = pillarCalcType2Arr(obj)
        } else if (obj.pillarType === 2.3) {            
            pillarMaterials = pillarCalcType3Arr(obj)
        }
        return pillarMaterials
    }
}

const { coverCalcType1Arr } = require("./calcFunctions/coverCalcType1Arr");
const { coverCalcType2Arr } = require("./calcFunctions/coverCalcType2Arr");

function coverCalc() {
    return function (obj) {
        let coverMaterials = [];
        if (obj.coverType === 3.1) {            
            coverMaterials = coverCalcType1Arr(obj)
        } else if (obj.coverType === 3.2) {            
            coverMaterials = coverCalcType2Arr(obj)
        } else if (obj.coverType === 3.3) {            
            coverMaterials = coverCalcType3Arr(obj)
        }
        return coverMaterials
    }
}

module.exports.basementCalc = basementCalc();
module.exports.pillarCalc = pillarCalc();
module.exports.coverCalc = coverCalc();