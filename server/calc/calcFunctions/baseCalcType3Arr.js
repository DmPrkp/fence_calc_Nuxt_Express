
function baseCalcType3Arr(obj) {
    console.log("inside basement type 3 func")
    let equalArr = [];  

    let objTwine = new Twine(obj)        
    equalArr.push(objTwine);

    return equalArr
}

module.exports.baseCalcType3Arr = baseCalcType3Arr;