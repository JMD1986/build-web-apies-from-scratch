// Drum Arrays
let kicks = [
false, false, false, false,
false, false, false, false,
false, false, false, false,
false, false, false, false
]
let snares = [
false, false, false, false,
false, false, false, false,
false, false, false, false,
false, false, false, false ]
let hiHats = [
false, false, false, false,
false, false, false, false,
false, false, false, false,
false, false, false, false ]
let rideCymbals = [
false, false, false, false,
false, false, false, false,
false, false, false, false,
false, false, false, false ]


function toggleDrum(drum, num){

  if (num>16 || num<0){
    return null
  }else{
   switch (drum){
  case "kicks":
  drum = kicks;
  break;
  case "snares":
  drum = snares;
  break;
  case "hiHats":
  drum = hiHats;
  break;
  case "rideCymbals":
  drum = rideCymbals;
  break;
  default:
  console.log( "incorrect drum choice")
  return null;
}
    drum[num]=!drum[num];
  }
}
