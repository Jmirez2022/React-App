import { Component } from 'react';
import ListDesign from './ListDesign';
import './App.css';

class App extends Component {
constructor(props) {
  super(props);
  
  this.state = {
    isClicked: true,
    inputValue: "",
    listOfTodo: []
  };
}

handleClick = () => {
  this.state.isClicked ?
  this.setState({isClicked : false}) :
  this.setState({isClicked : true})
}

handleChange = (event) => {
  this.setState({inputValue: event.target.value})
}

handleSubmit = (event) => {
  event.preventDefault()
  this.setState({listOfTodo: [...this.state.listOfTodo, this.state.inputValue]})
  this.setState({inputValue: ''})
}

handleDelete = (index) => {
  let newList = this.state.listOfTodo;
  newList.splice(index, 1);
  this.setState({listOfTodo: [...newList]})
}

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <form onSubmit={this.handleSubmit}>
            <input type='text' value={this.state.inputValue} onChange={this.handleChange}></input>
            <button type="submit">submit</button>
          </form>
          <h2>
            {this.state.listOfTodo.map((todo, index) => {
              return <ListDesign key={index} index={index} title={todo} clickToDelete={this.handleDelete}/>
            })}
          </h2>
          <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
            >
          </a>
        </header>
      </div>
    )
    
  }
}
export default App;
