import React, { Component } from 'react';

class Squares extends Component {


  
  renderSquares(){
    const style={
	  background: 'tomato',
    width: 100+'%',
    height: 90+'%',
    padding: 20+'px'
  }
    return [...Array(+this.props.squares)].map((cuadro,i,col) => {
    
     let filas=Math.ceil(this.props.squares/3)
     let cfila=Math.floor(i/3)+1;
     let bla="col-sm-4";

     if(cfila==filas) {
       debugger
       switch(this.props.squares%3) {
          case 1:
            bla = 'col-sm-12'
          break;
          case 2:
          bla=(this.props.squares-1)==(i)?'col-sm-8': 'col-sm-4'
          break
          case 3:
            bla= 'col-sm-4';
          break;
       }
     }

     

    return (
    
    <div className={bla} style={{height: 200}}key={i}>
      <div style={style}> square: {[i +1]} </div>
    </div>)})
  }



  render() {
    return (
        <div className="row">
            {this.renderSquares()}
        </div>
    );
  }
}

export default Squares;