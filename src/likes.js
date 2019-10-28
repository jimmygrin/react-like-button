import React, { Component } from "react";

class Likes extends Component {

    state = {
            counter: 0
        }

    handleClick = (e) => {
    this.setState({
        counter = counter + 1
    })
    }
render() {
        return (
            <>
            <h1>{this.state.counter} Likes</h1>
            <button onClick={this.handleClick}>Like Me</button>
            </>
        )

    }
}
export default Likes