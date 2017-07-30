  // renderSquare(i){
  //   return <Square 
  //            value = {this.state.squares[i]}
  //            onClick = {this.handleClick.bind(this)}//SHOULD BE {() => this.handleClick(i)}
  //          />
  // }
import React from 'react';
import './index.css'
import ReactDOM from 'react-dom'

class Square extends React.Component{

  render(){
    return(
      <button className="square" onClick={() => this.props.onClick()}>
        {this.props.value}
      </button>
    )
  }
}

class Board extends React.Component{
  constructor(){
    super()
    this.state = {
      // SHOULD NOT BE board: number(9).fill(null)
      squares: Array(9).fill(null)    //array(9)
    }
  }

  handleClick(i){
    const squares = this.state.squares.slice();
    squares[i] = 'X';
    this.setState({squares: squares}) 
  }

  renderSquare(i){
    return <Square 
             value = {this.state.squares[i]}
             onClick = {() => this.handleClick(i)}
           />
  }

  render(){
  	const status = 'Next Player: X'  //NOT let

  	return(
      <div>
        <div className="status"> {status} </div>
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
  render(){
    return(
      <div className="game">
        <div className="board">
            <Board />
        </div>
        <div className="game-info">
          <div>{/*status*/}</div>
        <div>{/*TODO*/}</div>
        </div>
      </div>
    )
  }
}

ReactDOM.render(<Game />, document.getElementById('root'))