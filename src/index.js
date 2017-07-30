// ReactDOM.render(<App />, document.getElementById('root')) // <App /> SHOULD BE <Game />

        // <div className="board-row">
        //   <renderSqaure(1) className="square" /> //SHOULD BE {this.renderSquare(0)}
        //   <renderSqaure(2) className="square" />
        //   <renderSqaure(3) className="square" />
        // </div>

        // <div className="board-row">
        //   <renderSqaure(4) className="square" />
        //   <renderSqaure(5) className="square" />
        //   <renderSqaure(6) className="square" />
        // </div>

        // <div className="board-row">
        //   <renderSqaure(7) className="square" />
        //   <renderSqaure(8) className="square" />
        //   <renderSqaure(9) className="square" />
        // </div>
      // <button className="square">
      //   {...this.props.value}  //SHOULD BE {this.props.value}
      // </button>

  // renderSquare(i){
  //   return <Square value = i/> //SHOULD BE return <Square value ={i} />  
  // }      

import React from 'react';
import './index.css'
import ReactDOM from 'react-dom'

class Square extends React.Component{
  render(){
    return(
      <button className="square">
        {this.props.value}
      </button>
    )
  }
}

class Board extends React.Component{
  renderSquare(i){
    return <Square value = {i}/>
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