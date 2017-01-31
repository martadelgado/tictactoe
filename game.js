$(document).ready(function() {
  $(".tile").click(function() {
    $(this).toggle(
      function() {
        $(this).addClass("player1");
      },
      function() {
        $(this).addClass("player2");
      }
    );
  });
  $(".newGame").click(function() {
    location.reload();
});
});


function startGame () {

}

function markX() {

}

function threeRow(x,y) {
  for (i=0; i<row.length; i++) {
    if (x != y) {
      break;
    }
    else if (x != ) {
      break;
    }
    else {
      console.log("You Win!")
    }
  }


}

var player1 = 'X';
var player2 = 'O';

function changePlayer(){
if (player1 === true)   {
  return player2;
}
else {
  return player1;
}
}
