import React, {Component} from 'react'
import './App.css'
import data from './data.json'
import Board from "react-trello";



class App extends Component {
    render() {
        return (
          <div className="App">
          <h1 className="heading">TODO</h1>
          <Board data={data}  draggable editable editLaneTitle collapsibleLanes/>
          </div>
        )
    }
}

export default App
