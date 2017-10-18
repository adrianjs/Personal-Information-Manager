import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class AddList extends React.Component {
    render() {
        //keeps control over the list by adding/removing elements and buttons whenever a task is added/removed
        var items = this.props.tasks.map((element, i) => {
            return <View className="todoTask" key={i} id={i}><Text className="todoTxt">{element}</Text><Button onPress={(e) => this.props.remove(i)} title="Delete" color="#841584" /></View>
        });
        return (
            <View id="allTasks">{items}</View>
        );
    }
}