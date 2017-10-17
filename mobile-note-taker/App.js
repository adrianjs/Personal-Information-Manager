import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MainTodo from './components/todo/MainTodo'
import MainNote from './components/notes/MainNote'
import {Font} from 'expo';

export default class App extends React.Component {
    state = {
        fontLoaded: false
    };

    async componentDidMount(){
        await Font.loadAsync({
            'roboto': require('./assets/fonts/Roboto-Regular.ttf'),
            'font-awesome': require('./assets/fonts/fontawesome-webfont.ttf')
        });

        this.setState({ fontLoaded: true });
    }

  render() {
    return (
      <View style={styles.container}>
          { this.state.fontLoaded ? appRender : null }
      </View>
    );
  }
}
const appRender = () => {
    return (
        <View>
            <Text>Open up App.js to start working on your app!</Text>
            <Text>Changes you make will automatically reload.</Text>
            <Text>Shake your phone to open the developer menu.</Text>
            <MainTodo />
            <MainNote />
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
