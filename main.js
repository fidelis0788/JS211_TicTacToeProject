'use strict';

document.turn = "X";
 
function move(square){
  if (square.innerText == ''){
   
   square.innerText = document.turn
   switchTurn();
   
  }else{
   console.log('pick another square')
  }
   
 
 }
function switchTurn(){
  if (checkwinner(document.turn)){
    console.log(document.getElementById('message').innerText= `${document.turn} is winner`)  
  }
  if(document.turn == "X"){
    document.turn = "O"
  }
  else{
   document.turn = "X"
  }
  
 }
 function checkwinner(move){
var result = false
if(checkRow(1,2,3,move)|| 
checkRow(4,5,6,move)||
checkRow(7,8,9,move)||
checkRow(1,4,7,move)||
checkRow(2,5,8,move)||
checkRow(3,6,9,move)||
checkRow(1,5,9,move)||
checkRow(3,5,7,move)){
  return true;
}
result = true;
 }
function checkRow(a,b,c, move){
var result = false
if(getbox(a)== move && getbox(b)== move && getbox(c)== move){
  result = true

}
return result
}
function getbox(number){
return document.getElementById("b"+number).innerText

}


