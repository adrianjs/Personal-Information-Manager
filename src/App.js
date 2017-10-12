import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Routes from './Routes';
import './components/css/App.css';
import { AppBar} from 'material-ui';
import {FileFolder} from "material-ui/svg-icons/index";

class App extends Component {
  render() {
    return (
      <div className="App container">
          <AppBar
              title="Your Personal Manager"
              iconElementLeft={<FileFolder style={{color: 'white', marginTop: '10px'}} /> }
          />
        <Routes />
      </div>
    );
  }
}

export default withRouter(App);
