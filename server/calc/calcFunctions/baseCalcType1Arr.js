const { StripBase, Chair, GlowersConc, Shovel, Membrane, Twine, Bucket} = require('./classes/ConcreteClasses.js')
const { StripRebar, Wire, TieWireTwister } = require('./classes/RebarClasses.js')
const { StripForm } = require('./classes/FormworkClasses.js')
const { RubbleClass } = require('./classes/RubbleClass.js')
const { PuttyKnife100c, PuttyKnife300c } = require('./classes/PuttyClass.js')

function baseCalcType1Arr(obj) {
    //console.log("inside basement type 1 func")
    let equalArr = [];   

    let objConcrete = new StripBase(obj),
        objShovel = new Shovel(obj),
        odjGlovers = new GlowersConc();
        objPutty100 = new PuttyKnife100c();
        objPutty300 = new PuttyKnife300c();
        objMenbrane = new Membrane(obj);
        objChair = new Chair(objConcrete);
    equalArr.push(objConcrete, objChair, objShovel, odjGlovers, objPutty100, objPutty300, objMenbrane)

    let objRebar12 = new StripRebar(obj, 12),
        objRebar6 = new StripRebar(obj, 6),
        objWire = new Wire(objRebar12),
        objTWT = new TieWireTwister();
    equalArr.push(objRebar12, objRebar6, objWire, objTWT)

    let objTwine = new Twine(obj),
        objBucket = new Bucket(obj)
    equalArr.push(objTwine, objBucket);

    let objForm = new StripForm(obj);
    equalArr.push(objForm)

    let objRubble = new RubbleClass(obj);
    equalArr.push(objRubble)

    return equalArr
}

module.exports.baseCalcType1Arr = baseCalcType1Arr;