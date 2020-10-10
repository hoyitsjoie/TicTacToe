/*
  Joy Zou, CS169 Project
*/
import React, {Component} from 'react';
import Square from './Square';
import Header from './Header';
import logo from './logo.svg';
import './App.css';
/*

  Tutorials Referenced: Official React Tutorial
  https://www.youtube.com/watch?v=it54tShOsuI for another example
  https://www.youtube.com/watch?v=3HMtarQAt3A referenced for basics in React.js

*/
class App extends Component{

  state = {
    board: ["","","",
            "","","",
            "","",""],
    turn: 'X'
  }

  playerWon(){
    const board = this.state.board;
    const winningConditions = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6],
    ];

    for(let i=0; i<winningConditions.length; i++){
      const [a,b,c] = winningConditions[i];

      if(board[a] !== '' && board[a]===board[b] && board[b]===board[c]){
        return board[a] + " is the winner!";
      }
    }
    //check if the board is full
    let isBoardFull = true;
    for(let i=0; i<board.length;i++){
      if(board[i] ===''){
        isBoardFull = false;
        break;
      }
    }
    if(!isBoardFull){
      return 'Game in progress...';
    }
    else {
      return 'Game over: Tie';
    }
  }

  updateBoard(i){
    /*deep copies the current state of the board*/
    let board = this.state.board.slice();

    let turn = this.state.turn;

    if(board[i]==''){
      board[i] = turn;

      if(turn === 'O')
        turn = 'X';
      else
        turn = 'O';
    }
    this.setState({
      board,
      turn
    })
  }

/*<Square value={this.state.board[0]} handleClick={this.updateBoard.bind(this,0)}/>*/
  render() {
    return (
      <div className="App">
        <Header />

        <div className = "boardGame">
              <h1> {this.playerWon()}</h1>
              <div>
                <Square value={this.state.board[0]} handleClick={this.updateBoard.bind(this, 0)}/>
                <Square value={this.state.board[1]} handleClick={this.updateBoard.bind(this, 1)}/>
                <Square value={this.state.board[2]} handleClick={this.updateBoard.bind(this, 2)}/>
              </div>
              <div>
                <Square value={this.state.board[3]} handleClick={this.updateBoard.bind(this, 3)}/>
                <Square value={this.state.board[4]} handleClick={this.updateBoard.bind(this, 4)}/>
                <Square value={this.state.board[5]} handleClick={this.updateBoard.bind(this, 5)}/>
              </div>
              <div>
                <Square value={this.state.board[6]} handleClick={this.updateBoard.bind(this, 6)}/>
                <Square value={this.state.board[7]} handleClick={this.updateBoard.bind(this, 7)}/>
                <Square value={this.state.board[8]} handleClick={this.updateBoard.bind(this, 8)}/>
              </div>
              <p className = "current"> Current player's turn: {this.state.turn} </p>
            </div>
      </div>
    );
  }
}

export default App;
