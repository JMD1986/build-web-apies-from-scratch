
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
  if(!player || !m1t || !m1v
      || !m1t || !m2v|| !m3t
      || !m3v){
        console.log("missing input")
      return
    }
  if (validatePlayer(player) &&
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
}
