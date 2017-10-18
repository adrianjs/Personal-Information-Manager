import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Routes from './Routes';
import './assets/App.css';
import { AppBar} from 'material-ui';

class App extends Component {
  render() {
    return (
      <div className="App container">
          <AppBar
              title="Your Personal Manager"
              showMenuIconButton={false}
          />
        <Routes />
      </div>
    );
  }
}

export default withRouter(App);
