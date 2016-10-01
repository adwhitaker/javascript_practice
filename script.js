var chessBoard = '';
var lines = 10;

for (var i = 0; i < lines; i++) {
  for (var x = 0; x < lines; x++) {
    if ((i + x) % 2 === 0) {
      chessBoard += '#';
    } else {
      chessBoard += ' ';
    }
  }
  chessBoard += '\n';
}

console.log(chessBoard);
