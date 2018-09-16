
let playerOneMoveOneType = undefined;
let playerOneMoveTwoType = undefined;
let playerOneMoveThreeType= undefined;
let playerTwoMoveOneType = undefined;
let playerTwoMoveTwoType= undefined;
let playerTwoMoveThreeType= undefined;
let playerOneMoveOneValue = undefined;
let playerOneMoveTwoValue = undefined;
let playerOneMoveThreeValue= undefined;
let playerTwoMoveOneValue = undefined;
let playerTwoMoveTwoValue = undefined;
let playerTwoMoveThreeValue= undefined;


function setPlayerMoves(player,  m1t,  m1v,
  m2t,   m2v,   m3t,   m3v){

  if ( checkIfExists &&
    validatePlayer(player) &&
  validateMoveType(m1t) &&
  validateMoveType(m2t) &&
  validateMoveType(m3t) &&
  validateMoveValue(m1v) &&
  validateMoveValue(m2v) &&
  validateMoveValue(m3v) &&
  sumOfValues(m1v,m2v,m3v)){
  if(player==="Player One"){
      playerOneMoveOneType=m1t;
      playerOneMoveOneValue=m1v;
      playerOneMoveTwoType=m2t;
      playerOneMoveTwoValue=m2v;
      playerOneMoveThreeType=m3t;
      playerOneMoveThreeValue=m3v;
  }
  if (player==="Player Two"){
      playerTwoMoveOneType=m1t;
      playerTwoMoveOneValue=m1v;
      playerTwoMoveTwoType=m2t;
      playerTwoMoveTwoValue=m2v;
      playerTwoMoveThreeType=m3t;
      playerTwoMoveThreeValue=m3v;
  }}
  function validatePlayer(player){
    if (player ==="Player One"||player==="Player Two"){
      return true;
    } else {
      return false;
    }
  }
  function validateMoveType(move){
    if (move ==="rock"||move==="paper" ||move==="scissors"){
      return true;
    } else {
      return false;
    }
  }
  function validateMoveValue(value){
    if (typeof value === "number" && value>0 && value<100){
      return true
    } else {
      console.log("invaled value")
      return false

    }
  }
    function sumOfValues(val1,val2,val3){
      if (val1+val2+val3>99){
        console.log("must be less than 99")
        return false
      }
      else {
        return true
      }
  }
  function checkIfExists(){
    if(!player || !m1t || !m1v
        || !m1t || !m2v|| !m3t
        || !m3v){
          console.log("missing input")
        return false
      }
      else {
        return true
      }
    }
}function getRoundWinner(round){
  switch(round){
    case 1:
      if (playerOneMoveOneType===playerTwoMoveOneType){
          if (playerOneMoveOneValue===playerTwoMoveOneValue){
            return "Tie"
          }
         if (playerOneMoveOneValue>playerTwoMoveOneValue){
           return "Player One"
         }else{
           return "Player Two"
         }
      }
       if (playerOneMoveOneType === "rock"){
        if (playerTwoMoveOneType==="scissors"){
          return "Player One";
        } else {
          return "Player Two"
        }
      }
      if (playerOneMoveOneType === "paper"){
        if (playerTwoMoveOneType==="scissors"){
          return "Player Two";
        } else {
          return "Player One"
        }
      }
      if (playerOneMoveOneType === "scissors"){
        if (playerTwoMoveOneType==="paper"){
          return "Player One";
        } else {
          return "Player Two"
        }
      }

    break;
    case 2:
    if (playerOneMoveTwoType===playerTwoMoveTwoType){
      if (playerOneMoveTwoValue===playerTwoMoveTwoValue){
            return "Tie"
          }
         if (playerOneMoveTwoValue>playerTwoMoveTwoValue){
           return "Player One"
         }else{
           return "Player Two"
         }
      }
      if (playerOneMoveTwoType === "rock"){
        if (playerTwoMoveTwoType==="scissors"){
          return "Player One";
        } else {
          return "Player Two"
        }
      }
      if (playerOneMoveTwoType === "paper"){
        if (playerTwoMoveTwoType==="scissors"){
          return "Player Two";
        } else {
          return "Player One"
        }
      }
      if (playerOneMoveTwoType === "scissors"){
        if (playerTwoMoveTwoType==="paper"){
          return "Player One";
        } else {
          return "Player Two"
        }
      }
    break;
    case 3:
    if (playerOneMoveThreeType===playerTwoMoveThreeType){
      if (playerOneMoveThreeValue===playerTwoMoveThreeValue){
            return "Tie"
          }
         if (playerOneMoveThreeValue>playerTwoMoveThreeValue){
           return "Player One"
         }else{
           return "Player Two"
         }
      }
      if (playerOneMoveThreeType === "rock"){
        if (playerTwoMoveThreeType==="scissors"){
          return "Player One";
        } else {
          return "Player Two"
        }
      }
      if (playerOneMoveThreeType === "paper"){
        if (playerTwoMoveThreeType==="scissors"){
          return "Player Two";
        } else {
          return "Player One"
        }
      }
      if (playerOneMoveThreeType === "scissors"){
        if (playerTwoMoveThreeType==="paper"){
          return "Player One";
        } else {
          return "Player Two"
        }
      }
    break;
    default:
    return null;
  }
}
function getGameWinner(){
  let player1wins =0;
  let player2wins=0;
  for (n=1;n<4;n++){
    if (getRoundWinner(n)==="Player One"){
     player1wins++
  } else if (getRoundWinner(n)==="Player Two"){
     player2wins++
  } else if (getRoundWinner(n)==="Tie"){
    return;
  }
 }
//  return player2wins;
  if (player1wins>player2wins){
    return "Player One"
  } else if (player1wins<player2wins){
    return "Player Two"
  } else if (player1wins===player2wins){
    return "Tie"
  }
}
