// var grid = [
//           [1,2,3],
//           [4,5,6],
//           [7,8,9]
// ];

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
    if ($("#0-0").text() === $("#0-1").text() && $("#0-0").text() === $("#0-2").text() && $("#0-0").text() !== ""){
        setTimeout(function(){ alert("You Win!"); }, 300);
    }
    if ($("#1-0").text() === $("#1-1").text() && $("#1-0").text() === $("#1-2").text() && $("#1-0").text() !== "") {
        setTimeout(function(){ alert("You Win!"); }, 300);
    }
    if ($("#2-0").text() === $("#2-1").text() && $("#2-0").text() === $("#2-2").text() && $("#2-0").text() !== "") {
        setTimeout(function(){ alert("You Win!"); }, 300);
    }
    if ($("#0-0").text() === $("#1-0").text() && $("#0-0").text() === $("#2-0").text() && $("#0-0").text() !== ""){
        setTimeout(function(){ alert("You Win!"); }, 300);
    }
    if ($("#0-1").text() === $("#1-1").text() && $("#0-1").text() === $("#2-1").text() && $("#0-1").text() !== "") {
        setTimeout(function(){ alert("You Win!"); }, 300);
    }
    if ($("#0-2").text() === $("#1-2").text() && $("#0-2").text() === $("#2-2").text() && $("#0-2").text() !== "") {
        setTimeout(function(){ alert("You Win!"); }, 300);
    }
    if ($("#0-0").text() === $("#1-1").text() && $("#0-0").text() === $("#2-2").text() && $("#0-0").text() !== "") {
        setTimeout(function(){ alert("You Win!"); }, 300);
    }
    if ($("#0-2").text() === $("#1-1").text() && $("#0-2").text() === $("#2-0").text() && $("#0-2").text() !== "") {
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
  var img = document.createElement("img");
  img.src = "pic3.png";
  var img1 = document.createElement("img");
  img1.src = "pic2.png";

  $(".tile").on("click", function(){
    $(this).html(img1);
    if (img1 === img1){
      img1 = img;
    } else {
      img = img1;
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
