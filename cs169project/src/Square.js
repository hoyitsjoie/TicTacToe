import React, { Component} from 'react'

const style = {

  backgroundColor: "#b3d5e3",
  border: "white solid 7px",
  textAlign: "center",
  fontSize: "25px",
  width: "50px",
  height: "50px",
  margin: -1,
  display: "inline-block",
  verticalAlign: "top",
}

class Square extends Component {

  render(){
    return <div style={style} onClick={this.props.handleClick}> {this.props.value} </div>;
  }
}

export default Square;
