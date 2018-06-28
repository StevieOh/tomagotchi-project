console.log("Running");

let time = 0;

class Tomagotchi{
  constructor(){
    this.hunger = 0;
    this.sleepy = 0;
    this.bored = 0;
  }

  updateStats() {
    $("#sleepy").text("Sleepiness: " + edward.sleepy); 
    $("#hunger").text("Hunger: " + edward.hunger); 
    $("#bored").text("Boredom: " + edward.bored); 

  }
  resetStats() {
    this.hunger = 0;
    this.sleepy = 0;
    this.bored = 0;
  }
}

$("#sleep-btn").on("click", (event) => {
  edward.sleepy--
  console.log("ZzzZZZzzZZ");
});

$("#feed-btn").on("click", (event) => {
  edward.hunger--
  console.log("yum yum");
});

$("#play-btn").on("click", (event) => {
  edward.bored--
  console.log("yay!");
});

const edward = new Tomagotchi(0, 0, 0);
console.log(edward)

const startGame = () => {
  const intervalId = setInterval( () => {
     
    time = time + 1;
      
    if(time % 3 === 0){
      edward.sleepy++
    } 
    if(edward.sleepy === 10){
      alert("Edward has died of exhaustion");
      clearInterval(intervalId);
      alert("GAME OVER")
      edward.resetStats();
    }
    else if(time % 1 === 0){
      edward.hunger++
    }

    if(edward.hunger === 10){
        alert("Edward has died of starvation");
        clearInterval(intervalId);
        alert("GAME OVER")
        edward.resetStats();
    }
    else if(time % 2 === 0){
      edward.bored++
    } 
    if(edward.bored === 10){
        alert("Edward has died of boredom");
        clearInterval(intervalId);
        alert("GAME OVER")
        edward.resetStats();
    }
    edward.updateStats();
    
  }, 1000) 
}
$("#start").on("click", (event) => {
  startGame();
  console.log("Start Game");

});












