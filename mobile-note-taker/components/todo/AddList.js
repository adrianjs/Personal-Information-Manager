import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class AddList extends React.Component {
    render() {
        //keeps control over the list by adding/removing elements and buttons whenever a task is added/removed
        var items = this.props.tasks.map((element, i) => {
            return <View style={styles.todoTask} key={i}>
                <Text style={styles.todoText}>{element}</Text>
                <Button style={styles.todoBtn} onPress={(e) => this.props.remove(i)} title="Delete" color="#ff4081" />
            </View>
        });
        return (
            <View id="allTasks">{items}</View>
        );
    }
}

const styles = StyleSheet.create({
    todoTask: {
        backgroundColor: "#eeeeee",
        padding: 5,
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-around",
        marginBottom: 15,
        width: 300,
    },

    todoText: {
        flex: 6,
        fontSize: 20,
        padding: 20,
    },

    todoBtn: {
        flex: 1,
    }
});