const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

class Game {
  constructor(){
    this.stacks = [[3,2,1],[],[]];
  }

  promptMove(){
    let that = this;
    console.log(this.stacks);
    reader.question("Enter start tower: ", function (startTower) {
      reader.question("Enter end tower: ", function (endTower) {
        const startTowerIdx = startTower;
        const endTowerIdx = endTower;
        reader.close();

        that.move(startTower, endTower);
      });
    });
  }

  isValidMove(startTowerIdx, endTowerIdx) {
    const startTower = this.stacks[startTowerIdx];
    const endTower = this.stacks[endTowerIdx];

    if(startTower[startTower.length - 1] > endTower[endTower.length - 1]
      || !startTower.length){
      // console.log(false);
      return false;
    }
    // console.log(true);
    return true;
  }

  move(startTowerIdx, endTowerIdx){
    if(this.isValidMove(startTowerIdx, endTowerIdx)){
      const startTower = this.stacks[startTowerIdx];
      const endTower = this.stacks[endTowerIdx];

      endTower.push(startTower.pop());
      console.log(true);
      this.print();
      return true;
    }
    console.log(false);
    this.print();
    return false;
  }

  print(){
    console.log(JSON.stringify(this.stacks));
  }

  isWon(){
    if(this.stack[1] === [3, 2, 1] || this.stack[2] === [3, 2, 1]){
      return true;
    }
    return false;
  }

}

const game = new Game;
game.promptMove();
