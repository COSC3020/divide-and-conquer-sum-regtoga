function divideAndConquerSum(a) {
    //calculate the length
    var length = a.length;

    //These are the base cases where we stop dividing the array.
    if (length == 0) {
        return 0;
    } else if (length == 1) {
        return a[0];
    }

    //we need to find the two points where we split the array round.
    var midpointleft = Math.floor(length / 3);
    var midpointright = Math.floor((2 * length) / 3);

    //divide the arrays in three parts
    return divideAndConquerSum(a.slice(0, midpointleft)) + divideAndConquerSum(a.slice(midpointleft, midpointright)) + divideAndConquerSum(a.slice(midpointright));
}
