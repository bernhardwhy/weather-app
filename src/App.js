import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { getOffers } from './store/actions/actions'

class App extends Component {

  componentDidMount() {
    this.props.getApiData();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React {this.props.ctr}</h1>
        </header>
        <h1>I changed here dasd</h1>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ctr: state.counter
  };
}

const mapDispatchToProps = dispatch => {
  return {
    getApiData: () => dispatch(getOffers())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
