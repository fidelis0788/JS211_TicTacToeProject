'use strict';

// brings in the assert module for unit testing
const assert = require('assert');
// brings in the readline module to access the command line
const readline = require('readline');
// use the readline module to print out to the command line
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// creates and empty "board" for the user to see where marks can be placed.
// using let because the variable is expected to change with more 'X's and 'O's to add
let board = [
  [' ', ' ', ' '],
  [' ', ' ', ' '],
  [' ', ' ', ' ']
];

// assigns the first mark as 'X'
// using let because the variable is expected to change from 'X' to 'O' and back
let playerTurn = 'X';

// is a function that print the current status of the board using the variable - board
const printBoard = () => {
  console.log('   0  1  2');
  console.log('0 ' + board[0].join(' | '));
  console.log('  ---------');
  console.log('1 ' + board[1].join(' | '));
  console.log('  ---------');
  console.log('2 ' + board[2].join(' | '));
}
// if a player won horizontally on any column return true otherwise return false
const horizontalWin = () => {
for(let i =0; i < 3; i++){
  if(board[i][0]== board[i][1]== board[i][2]){
    return true;

  }
  else{
    return false;
  }
}
  
}
// if a player won vertically on any row,return true otherwise return false
const verticalWin = () => {
  for(let i =0; i < 3; i++){
    if(board[0][i]== board[1][i]== board[2][i]){
    
    return true;
  }

  
  else{
    return false;
  }
}
}


// if a player won diagonally on any diagonal,return true otherwise return false
const diagonalWin = () => {
  for(let i =0; i < 3; i++){
    if(board[0][0]== board[1][1] && board[1][1]==board[2][2] || board[2][0]== board[1][1] && board[1][1]== board[0][2]){
      console.log('player win')
  
    }
  }
}


  const checkForWin = () => {
    if(horizontalWin() || verticalWin() || diagonalWin()) {
    console.log(`Player ${currentMarker} won!`)
    } else {
      changeMarker()
    }
  }

const ticTacToe = (row, column) => {
    board[row][column] = playerTurn
    if(board[0][0]){
     changeMarker[0][0]
    }
    else if(board[0][1]){
      changeMarker[0][1]
    }
    else if(board[0][1]){
        changeMarker[0][2]
    }
    else if(board[1][0]){
      changeMarker[1][0]
    }
    else if(board[1][1]){
      changeMarker[1][1]
    }
    else if(board[1][2]){
      changeMarker[1][2]
    }
     else if(board[2][0]){
  changeMarker[2][0]
   }
   else if(board[2][1]){
  changeMarker[2][1]
   }
  else if(board[2][2]){
  changeMarker[2][2]
   }


      const changeMarker = () => {
        if(currentMarker === "X"){
          currentMarker = "O"
        } else {
          currentMarker = "X"
        
    
    }
    const resetBoard = () => {
      for (i=0; i < board.length; i++) {
        console.log(board[i].id)
        board[i] = null
       
      }  

}

const getPrompt = () => {
  printBoard();
  console.log("It's Player " + playerTurn + "'s turn.");
  rl.question('row: ', (row) => {
    rl.question('column: ', (column) => {
      ticTacToe(row, column);
      getPrompt();
    });
  });
}


// Unit Tests
// You use them run the command: npm test main.js
// to close them ctrl + C
if (typeof describe === 'function') {

  describe('#ticTacToe()', () => {
    it('should place mark on the board', () => {
      ticTacToe(1, 1);
      assert.deepEqual(board, [ [' ', ' ', ' '], [' ', 'X', ' '], [' ', ' ', ' '] ]);
    });
    it('should alternate between players', () => {
      ticTacToe(0, 0);
      assert.deepEqual(board, [ ['O', ' ', ' '], [' ', 'X', ' '], [' ', ' ', ' '] ]);
    });
    it('should check for vertical wins', () => {
      board = [ [' ', 'X', ' '], [' ', 'X', ' '], [' ', 'X', ' '] ];
      assert.equal(verticalWin(), true);
    });
    it('should check for horizontal wins', () => {
      board = [ ['X', 'X', 'X'], [' ', ' ', ' '], [' ', ' ', ' '] ];
      assert.equal(horizontalWin(), true);
    });
    it('should check for diagonal wins', () => {
      board = [ ['X', ' ', ' '], [' ', 'X', ' '], [' ', ' ', 'X'] ];
      assert.equal(diagonalWin(), true);
    });
    it('should detect a win', () => {
      assert.equal(checkForWin(), true);
    });
  });
} else {

  getPrompt();

}
      }
    }
