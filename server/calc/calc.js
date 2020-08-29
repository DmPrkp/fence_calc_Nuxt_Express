const { baseCalcType1Arr } = require("./culcFunctions/baseCalcType1Arr.js");
const { baseCalcType2Arr } = require("./culcFunctions/baseCalcType2Arr.js");
const { baseCalcType3Arr } = require("./culcFunctions/baseCalcType3Arr.js");

function basementCalc() {
    return function (obj) {
        let basementMaterials = [];
        if (obj.baseType === 1.1) {
            console.log("inside basement type 1")
            basementMaterials = baseCalcType1Arr(obj)
        } else if (obj.baseType === 1.2) {
            console.log("inside basement type 2")
            basementMaterials = baseCalcType2Arr(obj)
        } else if (obj.baseType === 1.3) {
            console.log("inside basement type 3")
            basementMaterials = baseCalcType3Arr()
        }
        return basementMaterials
    }
}

function pillarCalc() {
    return function (obj) {
        let basementMaterials = [];
        if (obj.baseType === 1.1) {
            console.log("inside basement type 1")
            basementMaterials = baseCalcType1Arr(obj)
        } else if (obj.baseType === 1.2) {
            console.log("inside basement type 2")
            basementMaterials = baseCalcType2Arr(obj)
        } else if (obj.baseType === 1.3) {
            console.log("inside basement type 3")
            basementMaterials = baseCalcType3Arr()
        }
        return basementMaterials
    }
}

function coverCalc() {
    return function (obj) {
        let basementMaterials = [];
        if (obj.baseType === 1.1) {
            console.log("inside basement type 1")
            basementMaterials = baseCalcType1Arr(obj)
        } else if (obj.baseType === 1.2) {
            console.log("inside basement type 2")
            basementMaterials = baseCalcType2Arr(obj)
        } else if (obj.baseType === 1.3) {
            console.log("inside basement type 3")
            basementMaterials = baseCalcType3Arr()
        }
        return basementMaterials
    }
}

module.exports.basementCalc = basementCalc();
module.exports.pillarCalc = pillarCalc();
module.exports.coverCalc = coverCalc();