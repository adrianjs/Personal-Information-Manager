import React, {Component} from 'react';
import {Text,View} from 'react-native';


export class NavBarContent extends React.Component{
    constructor(props) {
        super();
    }

    setItems(){

    }


    render()
    {
        return(
            //TODO Add on press
            <View style={styles.view}>
            <Button onPress={() => this.props.changeView("Calendar")}> Calendar </Button>
            <Button onPress={() => this.props.changeView("Todo")}>Todos</Button>
            <Button onPress={() => this.props.changeView("Notes")}>Notes</Button>
            </View>
            );
        }
    }

const tabStyles = StyleSheet.create({
    
        view: {
            flex: 1,
            backgroundColor: '#888888',
        }
        
    });