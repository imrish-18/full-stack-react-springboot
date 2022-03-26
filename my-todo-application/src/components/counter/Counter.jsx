import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './Counter.css'

class Counter extends Component {

    constructor() {

        super(); //Error 1

        this.state = {
            counter: 0
        }

        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
        this.reset = this.reset.bind(this);
    }

    render() {
        return (
            <div className="counter">
                <CounterButton by={1} incrementMethod={this.increment} decrementMethod={this.decrement} />
                <CounterButton by={5} incrementMethod={this.increment} decrementMethod={this.decrement} />
                <CounterButton by={10} incrementMethod={this.increment} decrementMethod={this.decrement} />
                <span className="count">{this.state.counter}</span>
                <div><button className="reset" onClick={this.reset}>Reset</button></div>
            </div>
        );
    }

    reset() {
        this.setState({ counter: 0 });
    }

    increment(by) {
        //console.log(`increment from child - ${by}`)
        this.setState(
            (prevState) => {
                return { counter: prevState.counter + by }
            }
        );
    }

    decrement(by) {
        //console.log(`increment from child - ${by}`)
        this.setState(
            (prevState) => {
                return { counter: prevState.counter - by }
            }
        );
    }

}

class CounterButton extends Component {
    //Define the initial state in a constructor
    //state => counter 0
    constructor() {
        super(); //Error 1

        //   this.state = {
        //       counter : 0
        //   }

        //   this.increment = this.increment.bind(this);
        //   this.decrement = this.decrement.bind(this);
    }

    render() {
        //render = () =>  {
        //const style = {fontSize : "50px", padding : "15px 30px"};
        return (
            <div className="counter">
                <button onClick={() => this.props.incrementMethod(this.props.by)} >+{this.props.by}</button>
                <button onClick={() => this.props.decrementMethod(this.props.by)} >-{this.props.by}</button>
                {/*<span className="count" 
            >{this.state.counter}</span>*/}
            </div>
        )
    }

    //   increment() { //Update state - counter++
    //     //console.log('increment');
    //     //this.state.counter++; //Bad Practice
    //     this.setState({
    //         counter: this.state.counter + this.props.by
    //     });

    //     this.props.incrementMethod(this.props.by);
    //   }

    //   decrement () {
    //     this.setState({
    //         counter: this.state.counter - this.props.by
    //     });

    //     this.props.decrementMethod(this.props.by);
    //   }
}

CounterButton.defaultProps = {
    by: 1
}

CounterButton.propTypes = {
    by: PropTypes.number
}

export default Counter
////import  React, { Component } from 'react';
////import'./Counter.css'
////// class component

////export default class Counter extends Component

////{
////    render()
////    {
////        return (
////            <div className="counter">
////                <CounterButton by={1}></CounterButton>
////    <CounterButton by={5}></CounterButton>
////    <CounterButton by={10}></CounterButton>
////            </div >
////                );
////    }
////}
//// class CounterButton extends Component {

////    // define the initial state in constructor
////    // state => counter 0
////    constructor() {
////        super();// error 1 always use super before using this 
////        this.state = {
////            counter: 0
////        }

////        this.increment = this.increment.bind(this);
////        // use arrow function then  no need to bind the function 
////    }
////    render() {
////        return (
////            <div className="counter">
////                <button onClick={this.increment}>+{this.props.by}</button>
////                <span className="count">{this.state.counter}</span>
////            </div>
////        );

////    }
////    increment() {
////        console.log('increment')
////        //this.state.counter++;
////        this.setState({
////            counter: this.state.counter + this.props.by
////        });

////    }
////}
////   /* render =() => {
////        return (
////            <div className="counter">
////                <button onClick={this.increment}>+1</button>
////                <span className="count">{this.state.counter}</span>
////            </div>
////        );

////    }
////    increment=()=> {
////        console.log('increment')
////        //this.state.counter++;
////        this.setState({
////            counter: this.state.counter + 1
////        });

////    }*/

