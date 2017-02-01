var grid = [
  [0,0,0],
  [0,0,0],
  [0,0,0]
];

function makeGrid(){
  for (var i = 0; i < 3; i++) {
    var row = $("<tr>");
    for (var j = 0; j < 3; j++) {
      var field = $("<td>").addClass("tile").attr("id", i+"-"+j);
      row.append(field);
    }
    $("#game-board").append(row);
  }
}

function threeRow() {
    if ($("#0-0").text() === $("#0-1").text() && $("#0-0").text() === $("#0-2").text() && $("#0-0").text() !== ""){
        alert("You Win!");
    }
    if ($("#1-0").text() === $("#1-1").text() && $("#1-0").text() === $("#1-2").text() && $("#1-0").text() !== "") {
        alert("You Win!");
    }
    if ($("#2-0").text() === $("#2-1").text() && $("#2-0").text() === $("#2-2").text() && $("#2-0").text() !== "") {
        alert("You Win!");
    }
    if ($("#0-0").text() === $("#1-0").text() && $("#0-0").text() === $("#2-0").text() && $("#0-0").text() !== ""){
        alert("You Win!");
    }
    if ($("#0-1").text() === $("#1-1").text() && $("#0-1").text() === $("#2-1").text() && $("#0-1").text() !== "") {
        alert("You Win!");
    }
    if ($("#0-2").text() === $("#1-2").text() && $("#0-2").text() === $("#2-2").text() && $("#0-2").text() !== "") {
        alert("You Win!");
    }
    if ($("#0-0").text() === $("#1-1").text() && $("#0-0").text() === $("#2-2").text() && $("#0-0").text() !== "") {
        alert("You Win!");
    }
    if ($("#0-2").text() === $("#1-1").text() && $("#0-2").text() === $("#2-1").text() && $("#0-2").text() !== "") {
        alert("You Win!");
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
  });
  $(".newGame").click(function() {
    location.reload();
});

  //
  // var playerOne = 1;
  // var playerTwo = 2;
  // if ( player_one == 1 ){
  //     document.getElementById("#game-board").innerHTML = "X";
  //     playerOne = 1;
  //
  // } else {
  //     document.getElementById("#game-board").innerHTML = "O";
  //     playerTwo = 2;
  //   }
  //
// });




// function markX() {
//
// }

// function threeRow() {
//   for ( var i =0; i<row.length; i++) {
//     if ($("#0-0") === $("#0-1") && $("#0-0") === $("#0-2")){
//         alert("You Win!");
//     }
//     else changePlayer();
//     if ("1-0" === "1-1") {
//       continue;
//       }
//       if ("1-0" === "1-2")  {
//         console.log("You Win!");
//     }
//     else changePlayer();
//     if ("2-0" === "2-1") {
//       continue;
//       }
//       if ("2-0" === "2-2")  {
//         console.log("You Win!");
//   }
//     else changePlayer();
//   }
// }
//
// function threeColumn() {
//   for ( var j =0; j<column.length; j++) {
//     if ("0-0" === "1-0") {
//       continue;
//       }
//       if ("0-0" === "2-0")  {
//         console.log("You Win!");
//     }
//     else changePlayer();
//     if ("0-1" === "1-1") {
//       continue;
//       }
//       if ("1-0" === "2-1")  {
//         console.log("You Win!");
//     }
//     else changePlayer();
//     if ("0-2" === "1-2") {
//       continue;
//       }
//       if ("0-2" === "2-2")  {
//         console.log("You Win!");
//       }
//       else changePlayer();
//   }
// }
//
// var player1 = 'X';
// var player2 = 'O';

// function changePlayer(){
// if (player1 === true)   {
//   return player2;
// }
// else {
//   return player1;
// }
// }

// function changePlayer(square){
//
// var player_one = 1;
// if ( player_one == 1 ){
//     document.getElementById(square).innerHTML = "X";
//     player_one = 0;
//
// } else {
//     document.getElementById(square).innerHTML = "O";
//     player_one = 1;
//   }
// }
