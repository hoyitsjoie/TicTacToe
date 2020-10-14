import React, { Component} from 'react'


const style = {
  backgroundColor: '#ed4a32',
  fontSize: "20px",
  height: "70px",
  verticalAlign: "top",
  color: "white"
}


class Header extends Component {

  render(){
    return(
      <div style = {style}>
        <h>  2 Player Tic Tac Toe Game </h>
      </div>
    );
  }
}

export default Header;
