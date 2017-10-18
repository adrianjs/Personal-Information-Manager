import React, { Component } from 'react';
import './assets/App.css';
import { AppBar} from 'material-ui';
import Home from "./containers/Home";

/*
    Returns the page with the PIM, with a Material UI AppBar as the "header"
 */


class App extends Component {
  render() {
    return (
      <div className="App container">
          <AppBar
              title="Your Personal Manager"
              showMenuIconButton={false}
          />
        <Home />
      </div>
    );
  }
}

export default App;
