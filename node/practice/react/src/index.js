import  ReactDOM  from "react-dom";
import React, { Component} from 'react'
import { w3cwebsocket as W3CWebSocket } from "websocket"; 

const client = new W3CWebSocket('ws://127.0.0.1:8000')

export default class App extends Component{

    // To get feedback msg weather connected or not
    // called life cycle
    componentDidMount(){
        client.onopen = () =>{
            console.log('WebSocket Client Connected');
        };
    }


    render(){
        return (
            <div>
                Testing the app!
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));