import * as math from 'mathjs';
// a place to store all the calculator operation functions

// addition function
export const addNumbers = (num1, num2) => {
    
}


// percentage rounding function
export const roundPercentage = num => { //TODO FIGURE OUT HOW TO GET ERROR TO RETURN WHEN NUMBER GOES PAST RANGE
    let newNum = num
    try {
        if(newNum < 1e-10) {
            newNum = Number.parseFloat(newNum);
            console.log(newNum);
            newNum = math.evaluate(newNum / 100);
            console.log(newNum);
        } else {
            newNum = Number.parseFloat(Number.parseFloat(num / 100).toFixed(20));
        } 
        
    } catch (e) {
        if(e instanceof RangeError) {
            console.log(e, true);
        } else {
            console.log(e, false);
        }
    }

    return newNum;
}