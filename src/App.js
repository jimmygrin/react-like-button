import React, { Component } from "react";

class Likes extends Component { 

    state = { 
            counter: 0,
            word: "Likes"
        } 

    handleClick = (e) => { 
    this.setState({
      word: (this.state.counter === 0 ? "Like": "Likes"),
        counter: this.state.counter + 1
       
    }) 

    } 

    
    
render() {
        return (
            <>
            <h1>{this.state.counter} {this.state.word}</h1>
            <button onClick={this.handleClick}>Like Me</button>
            </>
        )

    }
  } 

export default Likes                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         