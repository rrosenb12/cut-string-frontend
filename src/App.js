import './App.css';
import React from "react"

class App extends React.Component {

  state = {
    stringToCut: "",
    returnString: ""
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    fetch('http://localhost:3000/test', {
      method: 'POST',
      headers: {
        'accepts': 'application/json',
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        string_to_cut: this.state.stringToCut
      })
    })
    .then(response => response.json())
    .then(stringObject => this.handleCut(stringObject))
  }

  handleCut = stringObject=> {
    this.setState({
      returnString: stringObject.return_string
    })
  }

  render() {
    return(
      <>
        <h1>Enter a String to Cut</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="stringToCut"
            placholder="Enter String to Cut"
            value={this.state.stringToCut}
            onChange={this.handleChange}
          />
          <input type="submit" value="Cut It Up!"></input>
        </form>
        {this.state.returnString !== "" && (
          <>
          <h1>Your Result:</h1>
          <h2>{this.state.returnString}</h2>
          </>
          )
        }
      </>
    )
  }
}

export default App;