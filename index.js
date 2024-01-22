let pscore = 0;
let cscore = 0;
let chosenNo;
let computerno;
let game = false;
const player = document.querySelector("#p-score");
const computer = document.querySelector("#c-score");
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const result = document.querySelector(".res-p");
const choices = document.querySelectorAll(".choice");
const reset= document.querySelector(".Reset");
const compNo = () => {
  computerno = Math.floor(Math.random() * 3) + 1;
  console.log(computerno);
};
rock.addEventListener("click", () => {
  game = true;
  chosenNo = 1;
  console.log(chosenNo);
  compNo();
  gameresult();
});
paper.addEventListener("click", () => {
  game = true;
  chosenNo = 2;
  console.log(chosenNo);
  compNo();
  gameresult();
});
scissors.addEventListener("click", () => {
  game = true;
  chosenNo = 3;
  console.log(chosenNo);
  compNo();
  gameresult();
});
const gameresult = () => {
  if (game == true) {
    if (chosenNo == computerno) {
      console.log("you won");
      result.innerText = "You Won";
      pscore += 1;
      player.innerText=pscore;
      game = false;
    } else {
        console.log("you lose");
        result.innerText = "You Lose";
        cscore += 1;
        computer.innerText=cscore;
        game = false;
    }
  }
};
const Reset=()=>{
    cscore=0;
    pscore=0;
    result.innerText ="Choose Your Move";
    computer.innerText=cscore;
    player.innerText=pscore;
    game=false;
}
reset.addEventListener("click",Reset)
