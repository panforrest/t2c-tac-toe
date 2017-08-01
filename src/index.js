      // return (
      //   <li key={move}>
      //     <a href="#" onClick={() => this.jumpTo(move)}>{desc}</a>
      //   </li>
      // )
import React from 'react';
import './index.css'
import ReactDOM from 'react-dom'

function Square(props){  //NOT function Square = () => {
    return(
      <button className="square" onClick={props.onClick}>
        {props.value}
      </button>
    )
}

class Board extends React.Component{
  renderSquare(i){
    return <Square 
             value = {this.props.squares[i]}
             onClick = {() => this.props.onClick(i)}
           />
  }

  render(){
  	return(
      <div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>

        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>

        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
  	)
  }
}

class Game extends React.Component{
  constructor(){
    super()
    this.state = {
      history: [{
        squares: Array(9).fill(null),
        clickedLocation: [0, 0],  
      }],   
      stepNumber: 0,     
      xIsNext: true
    };
  }

  handleClick(i){
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = (this.state.xIsNext) ? 'X' : 'O';
    this.setState({
      history: history.concat([{
        squares: squares,
        clickedLocation: [Math.floor(i / 3) + 1, i % 3 + 1],
      }]),
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext
    }) 
  } 

  jumpTo(step){
    this.setState({
      stepNumber: step,
      xIsNext: (step % 2) === 0
    })
  } 

  render(){

    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares);

    let status;
    if (winner) {
      status = 'Winner: ' + winner;
    } else {
      status = 'Next Player: ' + (this.state.xIsNext ? 'X' : 'O')
    }

    const moves = history.map((step, move) => {
      const clickedLocation = step.clickedLocation
      const desc = move ?
        'Move #' + move + '(' + clickedLocation[0] + ', ' + clickedLocation[1] +')':
        'Game Start'

      if (move == history.length - 1){
        return (
          <li key={move}>
            <a href="#" onClick={() => this.jumpTo(move)} style={{fontWeight:"bold", fontSize:"22px"}}>{desc}</a>
          </li>
        )
      } else {
        return (
          <li key={move}>
            <a href="#" onClick={() => this.jumpTo(move)}>{desc}</a>
          </li>
        )        
      }
    })

    return(
      <div className="game">
        <div className="board">
            <Board 
              squares={current.squares}
              onClick={(i) => this.handleClick(i)}
            />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol>{moves}</ol>
        </div>
      </div>
    )
  }
}

ReactDOM.render(<Game />, document.getElementById('root'))

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i=0; i<lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[b] === squares[b] && squares[a]  === squares[c]){
      return squares[a];
    }
  }
  return null;
}