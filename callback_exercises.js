// Clock

class Clock {
  constructor() {
    const startTime = new Date();
    this.hour = startTime.getHours();
    this.minute = startTime.getMinutes();
    this.seconds = startTime.getSeconds();
    this.printTime();
    setInterval(this._tick.bind(this), 1000);
  }

  printTime() {
    console.log(`${this.hour}:${this.minute}:${this.seconds}`);
  }

  _tick() {
    this.seconds += 1;
    if (this.seconds >= 60) {
      this.seconds = 0;
      this.minute += 1;
    }
    if (this.minute >= 60) {
      this.minute = 0;
      this.hour += 1;
    }
    if (this.hour >= 24) {
      this.hour = 0;
    }

    this.printTime();
  }
}

// const clock = new Clock();

// addNumbers
const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function addNumbers(sum, numsLeft, completionCallback){
  if(numsLeft > 0){
    reader.question("Enter a number >> ", function(number){
      const num = parseInt(number);
      sum += num;
      console.log(sum);
      addNumbers(sum, numsLeft - 1, completionCallback);
    });
  }
  else if(numsLeft === 0){
    completionCallback(sum);
    reader.close();
  }
}

addNumbers(0, 3, sum => console.log(`Total Sum: ${sum}`));
