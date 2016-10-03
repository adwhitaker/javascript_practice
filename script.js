// Eloquent JavaScript Practice Questions

// Chapter 2: chess board
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

// Chapter 3: Minimum

function min (x, y) {
  if (x < y) {
    return x;
  } else {
    return y;
  }
}

console.log(min(3, 5));

// Chapter 3: Recursion

function isEven (number) {
  if (number === 0) {
    return true;
  } else if (number === 1) {
    return false;
  } else if (number < 0) {
    return isEven (-number);
  } else {
    return isEven (number - 2);
  }
}

console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1));

// Chapter 3: Bean Counting
function countChar (string, char) {
  var charCount = 0;
  for (var i = 0; i < string.length; i++) {
    if (string.charAt(i) === char) {
      charCount++;
    }
  }
  return charCount;
}

function countBs (string) {
  /* var numberOfBs = 0;
  for (var i = 0; i < string.length; i++) {
    if (string.charAt(i) === "B") {
      numberOfBs++;
    }
  }
  return numberOfBs; */
  return countChar (string, "B");
}
