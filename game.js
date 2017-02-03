function makeGrid(){
  for (var i = 0; i < 3; i++) {
    var row = $("<tr>");
    for (var j = 0; j < 3; j++) {
      var field = $("<td>").addClass("tile").attr("id", "tile"+i+"-"+j);
      row.append(field);
    }
    $("#game-board").append(row);
  }
}

function threeRow() {
    if ($("#tile0-0").text() === $("#tile0-1").text() && $("#tile0-0").text() === $("#tile0-2").text() && $("#tile0-0").text() !== ""){
        setTimeout(function(){ alert("You Win!"); }, 300);
    }
    if ($("#tile1-0").text() === $("#tile1-1").text() && $("#tile1-0").text() === $("#tile1-2").text() && $("#tile1-0").text() !== "") {
        setTimeout(function(){ alert("You Win!"); }, 300);
    }
    if ($("#tile2-0").text() === $("#tile2-1").text() && $("#tile2-0").text() === $("#tile2-2").text() && $("#tile2-0").text() !== "") {
        setTimeout(function(){ alert("You Win!"); }, 300);
    }
    if ($("#tile0-0").text() === $("#tile1-0").text() && $("#tile0-0").text() === $("#tile2-0").text() && $("#tile0-0").text() !== ""){
        setTimeout(function(){ alert("You Win!"); }, 300);
    }
    if ($("#tile0-1").text() === $("#tile1-1").text() && $("#tile0-1").text() === $("#tile2-1").text() && $("#tile0-1").text() !== "") {
        setTimeout(function(){ alert("You Win!"); }, 300);
    }
    if ($("#tile0-2").text() === $("#tile1-2").text() && $("#tile0-2").text() === $("#tile2-2").text() && $("#tile0-2").text() !== "") {
        setTimeout(function(){ alert("You Win!"); }, 300);
    }
    if ($("#tile0-0").text() === $("#tile1-1").text() && $("#tile0-0").text() === $("#tile2-2").text() && $("#tile0-0").text() !== "") {
        setTimeout(function(){ alert("You Win!"); }, 300);
    }
    if ($("#tile0-2").text() === $("#tile1-1").text() && $("#tile0-2").text() === $("#tile2-0").text() && $("#tile0-2").text() !== "") {
        setTimeout(function(){ alert("You Win!"); }, 300);
    }
}

var moves = 0;
function countMoves() {
  if (moves === 9) {
    setTimeout(function(){ alert("Tie Game!"); }, 300);
  }
}

$(document).ready(function() {
  makeGrid();
  var symbol = "X";

  $(".tile").on("click", function(){
    $(this).html(symbol);
    if (symbol === "X"){
      symbol = "O";
    } else {
      symbol = "X";
    }
    threeRow();
    });
    $(".tile").on("click", function(){
      moves++;
      countMoves();
    });
    });
  $(".newGame").click(function() {
    location.reload();
});
