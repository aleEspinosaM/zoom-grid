import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Squares from './Squares'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {divToShow: '1'};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({divToShow: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <div className="container" >
        <div className="row" >
          <form className="form-horizontal" onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label className="col-sm-2 control-label">Squares To show</label>
              <div className="col-sm-10">
                <select value={this.state.value} onChange={this.handleChange} className="form-control">
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                      <option value="4">Four</option>
                      <option value="5">Five</option>
                      <option value="6">Six</option>
                      <option value="7">Seven</option>
                      <option value="8">Eight</option>
                      <option value="9">Nine</option>
                    </select>
              </div>
            </div>
        </form>

        
        </div>

        <Squares squares={this.state.divToShow}/> 
      </div>
    );
  }
}

export default App;



