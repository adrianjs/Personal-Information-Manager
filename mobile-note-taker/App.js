import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import SegmentedControlTab from 'react-native-segmented-control-tab'

export default class App extends Component {

   constructor(){
     super()
     this.state = {
       selectedIndex: 0,
       tester: "reddit", 
       currentViews: [<Text> Hello obama </Text>, <Text> Hello trump </Text>, <Text> Hello bob </Text>],
      };
      {this.handleIndexChange}
   }

   handleIndexChange = (index) => {
     this.setState({
       ...this.state,
       selectedIndex: index,
       currentView: this.state.currentViews[index]
     });
   }

   render() {
       return (
           <View>
             <Text>Hei</Text>
             <Text>Hei</Text>
             <Text>tester: {this.state.tester}</Text>
             <Text>Hei</Text>
             <Text>Hei</Text>
             <Text>State: {this.state.selectedIndex}</Text>
             <Text>Hei</Text>
               <SegmentedControlTab
                   //style= {styles.buttonStyles}
                   values={['Calendar', 'ToDo', 'Notes']}
                   selectedIndex={this.state.selectedIndex}
                   onTabPress={this.handleIndexChange}
                   />
             <View style={styles.maincontainer}>{this.state.currentView}</View>
           </View>
       );
   }
}

const styles = StyleSheet.create({
  maincontainer:{
    //flex: 1,
    //flexDirection: "column",
    justifyContent: "center",
    backgroundColor: "red",
    height: 500,
  },

  buttonStyles:{
    flex: 1,
  }

}); 

