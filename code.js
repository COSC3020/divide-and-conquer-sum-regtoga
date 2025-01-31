function divideAndConquerSum(a) {
    //calculate the length
    var length = a.length;

    //These are the base cases where we stop dividing.
    if (length == 0) {
        return 0;
    } else if (length == 1) {
        return a[0];
    } else if (length == 2) { //this isnt needed but should massivly reduce the ammount of recursive calls needed (i think :) )
        return a[0] + a[1];
    }

    //we need to find the two points where we split the array round.
    var midpointleft = Math.floor(length / 3);
    var midpointright = Math.floor((2 * length) / 3);

    //console.log("(" + a + ")" + ", Midpointleft: " + midpointleft + ", MidpointRight: " + midpointright)
    //console.log("1/3: (" + a.slice(0, midpointleft) + "), 2/3: (" + a.slice(midpointleft, midpointright) + "), 3/3: (" + a.slice(midpointright) + ") \n")

    //divide the arrays in three parts
    return divideAndConquerSum(a.slice(0, midpointleft)) + divideAndConquerSum(a.slice(midpointleft, midpointright)) + divideAndConquerSum(a.slice(midpointright));
}


// great timer class, can start() stop() reset() and getTime()
class Timer {
    constructor () {
      this.isRunning = false;
      this.startTime = 0;
      this.overallTime = 0;
    }
  
    _getTimeElapsedSinceLastStart () {
      if (!this.startTime) {
        return 0;
      }
    
      return Date.now() - this.startTime;
    }
  
    start () {
      if (this.isRunning) {
        return console.error('Timer is already running');
      }
  
      this.isRunning = true;
  
      this.startTime = Date.now();
    }
  
    stop () {
      if (!this.isRunning) {
        return console.error('Timer is already stopped');
      }
  
      this.isRunning = false;
  
      this.overallTime = this.overallTime + this._getTimeElapsedSinceLastStart();
    }
  
    reset () {
      this.overallTime = 0;
  
      if (this.isRunning) {
        this.startTime = Date.now();
        return;
      }
  
      this.startTime = 0;
    }
  
    getTime () {
      if (!this.startTime) {
        return 0;
      }
  
      if (this.isRunning) {
        return this.overallTime + this._getTimeElapsedSinceLastStart();
      }
  
      return this.overallTime;
    }
  }


var random = [];
for (var i = 0; i < 100000000; i++){
    random.push(Math.floor(Math.random() * 10));
}

function iterativesum(b) {
    var sum = 0;
    for (var i = 0; i < b.length; i++){
        sum += b[i];
    }
    return sum;
}

const timer = new Timer();
  timer.start();
  setInterval(() => {
    const timeInSeconds = Math.round(timer.getTime() / 1000);
    document.getElementById('time').innerText = timeInSeconds;
  }, 100)

console.log(iterativesum(random));
console.log("time = " + timer.getTime());

timer.reset();
console.log(divideAndConquerSum(random));
console.log("time = " + timer.getTime());
timer.stop();


//some of my test cases
//console.log(divideAndConquerSum([]) + "\n"); //0
//console.log(divideAndConquerSum([0, 1, 2]) + "\n"); // 3
//console.log(divideAndConquerSum([1, 5, 5]) + "\n"); //6
//console.log(divideAndConquerSum([0, 1, -2, 3]) + "\n"); //2
//console.log(divideAndConquerSum([1, 2, 3, 9, 10 ,11]) + "\n"); //36
//console.log(divideAndConquerSum([1, 2, 3, 9,-10, 10, 11]) + "\n"); //26
//console.log(divideAndConquerSum([1, 2, 3, 9,-10, 10, 11, 21, -41, 1, 1, 2, 3, 9,-10, 10, 11, 21, -41, 1,1, 2, 3, 9,-10, 10, 11, 21, -41, 1,1, 2, 3, 9,-10, 10, 11, 21, -41, 1,1, 2, 3, 9,-10, 10, 11, 21, -41, 1,1, 2, 3, 9,-10, 10, 11, 21, -41, 1,1, 2, 3, 9,-10, 10, 11, 21, -41, 1,1, 2, 3, 9,-10, 10, 11, 21, -41, 1,1, 2, 3, 9,-10, 10, 11, 21, -41, 1,1, 2, 3, 9,-10, 10, 11, 21, -41, 1,1, 2, 3, 9,-10, 10, 11, 21, -41, 1,1, 2, 3, 9,-10, 10, 11, 21, -41, 1,1, 2, 3, 9,-10, 10, 11, 21, -41, 1,1, 2, 3, 9,-10, 10, 11, 21, -41, 1,1, 2, 3, 9,-10, 10, 11, 21, -41, 1,1, 2, 3, 9,-10, 10, 11, 21, -41, 1,1, 2, 3, 9,-10, 10, 11, 21, -41, 1,1, 2, 3, 9,-10, 10, 11, 21, -41, 1,1, 2, 3, 9,-10, 10, 11, 21, -41, 1,1, 2, 3, 9,-10, 10, 11, 21, -41, 1,1, 2, 3, 9,-10, 10, 11, 21, -41, 1,1, 2, 3, 9,-10, 10, 11, 21, -41, 1,1, 2, 3, 9,-10, 10, 11, 21, -41, 1,1, 2, 3, 9,-10, 10, 11, 21, -41, 1,1, 2, 3, 9,-10, 10, 11, 21, -41, 1,1, 2, 3, 9,-10, 10, 11, 21, -41, 1,1, 2, 3, 9,-10, 10, 11, 21, -41, 1,1, 2, 3, 9,-10, 10, 11, 21, -41, 1,1, 2, 3, 9,-10, 10, 11, 21, -41, 1,1, 2, 3, 9,-10, 10, 11, 21, -41, 1,1, 2, 3, 9,-10, 10, 11, 21, -41, 1,1, 2, 3, 9,-10, 10, 11, 21, -41, 1,1, 2, 3, 9,-10, 10, 11, 21, -41, 1,1, 2, 3, 9,-10, 10, 11, 21, -41, 1,1, 2, 3, 9,-10, 10, 11, 21, -41, 1,1, 2, 3, 9,-10, 10, 11, 21, -41, 1,1, 2, 3, 9,-10, 10, 11, 21, -41, 1,1, 2, 3, 9,-10, 10, 11, 21, -41, 1,1, 2, 3, 9,-10, 10, 11, 21, -41, 1,1, 2, 3, 9,-10, 10, 11, 21, -41, 1,1, 2, 3, 9,-10, 10, 11, 21, -41, 1,1, 2, 3, 9,-10, 10, 11, 21, -41, 1,1, 2, 3, 9,-10, 10, 11, 21, -41, 1,1, 2, 3, 9,-10, 10, 11, 21, -41, 1,1, 2, 3, 9,-10, 10, 11, 21, -41, 1,1, 2, 3, 9,-10, 10, 11, 21, -41, 1,1, 2, 3, 9,-10, 10, 11, 21, -41, 1,1, 2, 3, 9,-10, 10, 11, 21, -41, 1,1, 2, 3, 9,-10, 10, 11, 21, -41, 1,1, 2, 3, 9,-10, 10, 11, 21, -41, 1,1, 2, 3, 9,-10, 10, 11, 21, -41, 1,1, 2, 3, 9,-10, 10, 11, 21, -41, 1,1, 2, 3, 9,-10, 10, 11, 21, -41, 1,1, 2, 3, 9,-10, 10, 11, 21, -41, 1,1, 2, 3, 9,-10, 10, 11, 21, -41, 1]) + "\n"); //26