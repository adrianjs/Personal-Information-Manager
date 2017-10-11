import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Navbar } from 'react-bootstrap';
import Routes from './Routes';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App container">
        <Navbar fluid>
          <Navbar.Header>
            <Navbar.Brand>
              <Link to="/">Your Personal Manager</Link>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
        </Navbar>
        <Routes />
      </div>
    );
  }
}

export default withRouter(App);
