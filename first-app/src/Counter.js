import React, { Component } from 'react';

class Counter extends Component{
    // state 선언
    state = {
        counter: 0
    };

    // state 변경 함수(화살표 함수)
    handleIncrease = () => {
        this.setState({
            counter: this.state.counter + 1
        });
    };

    handleDecrease = () =>{
        this.setState({
            counter: this.state.counter -1
        });
    };

    render(){
        return(
            <div>
                <h1>{this.state.counter}</h1>
                <button onClick={this.handleIncrease}> +1 </button>
                &nbsp;&nbsp;&nbsp;
                <button onClick={this.handleDecrease}> -1 </button>
            </div>
        )
    }
}

export default Counter;