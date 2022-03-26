import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import FirstComponent from './components/learning-examples/FirstComponent'
import Counter from './components/counter/Counter'
// any java script file is known as module 

class App extends Component {
    render() {

        return (
            <div className="App">
               {/* <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>
                        Edit <code>src/App.js</code> and save to reload.
                    </p>
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn React
                    </a>
                </header>*/}
                my todo app
                <FirstComponent>
                </FirstComponent>
                <SecondComponent>
                </SecondComponent>
                <Counter ></Counter>
            </div>
        );
    }
}

// function component
function SecondComponent()
{
    return (
        <div className="App">
            my second  component
        </div>
        );

}
export default App;
