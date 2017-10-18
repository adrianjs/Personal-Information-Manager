import React, {Component} from 'react';
import {Text,View, StyleSheet} from 'react-native';

export class ContentManager extends React.Component{
    constructor(props) {
        super();
    }

    render() {
        if(this.props.currentItem == "Calendar"){
            //Connect to main program
            return(<Text> kmkm </Text>)
        }
        else if(this.props.currentItem == "Notes"){
            //Connect to main program
            return(<Text> Notes </Text>)
        }
        else if(this.props.currentItem == "Todo"){
            //Connect to main program
            return(<Text> ToDoable </Text>)
        }
        else{
            return(<Text> No Match found  </Text>)
        }
    }
        
    
}