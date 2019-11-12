// a place to store all the calculator operation functions



// percentage rounding function
export const roundPercentage = num => { //TODO FIGURE OUT HOW TO GET ERROR TO RETURN WHEN NUMBER GOES PAST RANGE
    let newNum = num
    try {
        newNum = Number.parseFloat(Number.parseFloat(num / 100).toFixed(20));
    } catch (e) {
        if(e instanceof RangeError) {
            console.log(e, true);
        } else {
            console.log(e, false);
        }
    }

    return newNum;
}