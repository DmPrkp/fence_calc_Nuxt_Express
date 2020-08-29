const { PillarBase,  GlowersConc, Shovel, Twine, Bucket} = require('./classes/ConcreteClasses.js')
const { PillarRebar, Wire, TieWireTwister } = require('./classes/RebarClasses.js')
const { PillarFormClass } = require('./classes/FormworkClasses.js')
const { RubbleClass } = require('./classes/RubbleClass.js')
const { PuttyKnife100c} = require('./classes/PuttyClass.js')

function baseCalcType2Arr(obj) {
    console.log("inside basement type 2 func")
    let equalArr = [];   

    let objConcrete = new PillarBase(obj),
        objShovel = new Shovel(obj),
        odjGlovers = new GlowersConc();
        objPutty100 = new PuttyKnife100c();        
    equalArr.push(objConcrete, objShovel, odjGlovers, objPutty100)

    let objRebar12 = new PillarRebar(obj, 12),
        objRebar6 = new PillarRebar(obj, 6),
        objWire = new Wire(objRebar12),
        objTWT = new TieWireTwister();
    equalArr.push(objRebar12, objRebar6, objWire, objTWT)

    let objTwine = new Twine(obj),
        objBucket = new Bucket(obj)
    equalArr.push(objTwine, objBucket);

    let objForm = new PillarFormClass(obj);
    equalArr.push(objForm)

    let objRubble = new RubbleClass(obj);
    equalArr.push(objRubble)

    return equalArr
}

module.exports.baseCalcType2Arr = baseCalcType2Arr;