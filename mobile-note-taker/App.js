import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import {Platform} from 'react-native';
import {Navigation} from 'react-native-navigation';
import {COLOR, ThemeProvider} from 'react-native-material-ui';
import {NavBarContent} from './components/NavBarContent';
import {NavBarNavi} from './components/NavBarNavi';
import {NavBarPanel} from './components/NavBarPanel';
import {ContentManager} from './components/ContentManager';

export class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {menuOpen: false, currentItem: 'Calendar'};
    this.drawer = this.drawer.bind(this);
    this.changeView = this.changeView.bind(this);
  }

  changeView(newView) {
    this.setState({currentView: newView})
  }

  drawer() {
    this.setState({menuOpen: !this.state.menuOpen})
  }



  render(){
    return(
      <View>
        <View>
          <NavBarNavi showDrawer={this.drawer} />
            <View style={styles.wrapper}>
              {this.state.menuOpen ? <NavBarContent open={this.state.menuOpen} changeView={this.changeView} /> : null}
              <TouchableOpacity style={styles.content} onPress={this.drawer}></TouchableOpacity>
            </View>
        </View>
        <ContentManager currentItem={this.state.currentItem}/>
      </View>
    );
  }
  //DEFAULT APP MESSAGE
  /*
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
      </View>
    );
  }
  */
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  content: {
    flex: 1,
    alignSelf: 'stretch',
  },
  wrapper: {
    flex: 1,
    flexDirection: 'row',
  },
  sidebar: {
    flex: 1,
  },
  text: {
    textAlign: 'left',
    }
  }); 


