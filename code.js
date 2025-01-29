function divideAndConquerSum(a) {
    //calculate the length
    var length = a.length;

    //These are the base cases where we stop dividing and actually do some calculating.
    if (length == 0) {
        return 0;
    } else if (length == 1) {
        return a[0];
    } else if (length == 2) {
        return a[0] + a[1];
    }
    
    //calculate the mid point
    var midpoint = Math.floor((length)/2);
    //console.log("mid point: " + midpoint + ", Length: " + a.length);

    //calculate the mid point of the mid point
    var midpointleft = Math.floor((midpoint)/2) + 1;
    //midright = length - midleft
    var midpointright = Math.floor((length-midpointleft));

    //console.log("(" + a + "), Midpoint: " + midpoint)
    //console.log("Midpointleft: " + midpointleft + ", MidpointRight: " + midpointright);
    //console.log("1/3: (" + a.slice(0, midpointleft) + "), 2/3: (" + a.slice(midpointleft, midpointright) + "), 3/3: (" + a.slice(midpointright) + ") \n")

    //divide the arrays in three parts
    return divideAndConquerSum(a.slice(0, midpointleft)) + divideAndConquerSum(a.slice(midpointleft, midpointright)) + divideAndConquerSum(a.slice(midpointright));
}

//some of my test cases
//console.log(divideAndConquerSum([]) + "\n"); //0
//console.log(divideAndConquerSum([0, 1, 2]) + "\n"); // 3
//console.log(divideAndConquerSum([0, 1, 2, 3]) + "\n"); //6
//console.log(divideAndConquerSum([0, 1, -2, 3]) + "\n"); //2
//console.log(divideAndConquerSum([1, 2, 3, 9, 10 ,11]) + "\n"); //36
//console.log(divideAndConquerSum([1, 2, 3, 9,-10, 10, 11]) + "\n"); //26
//console.log(divideAndConquerSum([1, 2, 3, 9,-10, 10, 11, 21, -41, 1]) + "\n"); //26