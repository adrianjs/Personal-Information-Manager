import React, {Component} from 'react';
import {Text,View, StyleSheet, Button} from 'react-native';


export class NavBarContent extends React.Component{
    constructor(props) {
        super();
    }


    render()
    {
        return(
            //TODO Add on press
            <View style={style.view}>
                <Button 
                    onPress={() => this.props.changeView("Calendar")} 
                    title = "Calendar" />
                <Button 
                    onPress={() => this.props.changeView("Todo")} 
                    title = "Todo" />
                <Button 
                    onPress={() => this.props.changeView("Notes")}
                    title = "Notes"/>
            </View>
            );
        }
    }

const style = StyleSheet.create({
        view:{
            flex: 1,
            backgroundColor: '#888888',
        },
    });
