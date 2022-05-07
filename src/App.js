import './App.css';
import React from "react"

class App extends React.Component {

  state = {
    stringToCut: ""
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

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
    .then(response => console.log(response.json()))
    // .then(console.log(response))
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
          <input type="submit" value="Submit"></input>
        </form>
      </>
    )
  }
}

export default App;
