
//Business Logic
function roll(){
  var roll1,roll2;
  roll1=parseInt(Math.random()*6+1);
  roll2=parseInt(Math.random()*6+1);

  document.getElementById("dice").innerHTML=roll1+"   and    "+roll2
}
