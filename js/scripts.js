function roll(){
  return parseInt(Math.random()*6+1);
}
function play(){
  this.score=0;
  this.tempscore=0;
}

playerOne=new play();
playerTwo=new play();



$(document).ready(function(){
  $(".btn1").click(function(){
    var rand=roll();
    playerOne.tempscore+=rand;
    if (rand===1){
      playerOne.tempscore=0;
      $(".btn1").prop("disabled",true);
      $(".btn2").prop("disabled",true);
      $(".pl1").prop("disabled",false);
      $(".pl2").prop("disabled",false);
    }
    $("#tempscore1").text(playerOne.tempscore)
  });
  $(".btn2").click(function(){
    playerOne.score+=playerOne.tempscore;
    playerOne.tempscore=0;
    $(".btn1").prop("disabled",true);
    $(".btn2").prop("disabled",true);
    $(".pl1").prop("disabled",false);
    $(".pl2").prop("disabled",false);
    $("#tempscore1").text(playerOne.tempscore);
    $("#score1").text(playerOne.score);
  });
  $(".pl1").click(function(){
    var rand=roll();
    playerTwo.tempscore+=rand;
    if (rand===1){
      playerTwo.tempscore=0;
      $(".btn1").prop("disabled",false);
      $(".btn2").prop("disabled",false);
      $(".pl1").prop("disabled",true);
      $(".pl2").prop("disabled",true);
    }
    $("#tempscore2").text(playerTwo.tempscore)
  });
  $(".pl2").click(function(){
    playerTwo.score+=playerTwo.tempscore;
    playerTwo.tempscore=0;
    $(".pl1").prop("disabled",true);
    $(".pl2").prop("disabled",true);
    $(".btn1").prop("disabled",false);
    $(".btn2").prop("disabled",false);
    $("#tempscore2").text(playerTwo.tempscore);
    $("#score2").text(playerTwo.score);
  });
})
