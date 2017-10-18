import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

/*
    Component for rendering saved notes in a list.
 */

export default class NoteList extends React.Component {
    render() {
        var items = this.props.notes.map((element, i) => {
            return <View style={styles.note} key={i}>
                <View style={styles.noteText}>
                    <Text style={styles.noteTextTitle}>{element[0]}</Text>
                    <Text style={styles.noteTextDesc}>{element[1]}</Text>
                    <Text style={styles.noteTextPri}>{element[2]} priority</Text>
                </View>
                <Button style={styles.noteBtn} onPress={(e) => this.props.remove(i)} title="Delete" color="#ff4081" />
            </View>
        });
        return (
            <View id="allNotes">{items}</View>
        );
    }
}

const styles = StyleSheet.create({
    note: {
        backgroundColor: "#eeeeee",
        padding: 5,
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-around",
        marginBottom: 15,
        width: 300,
    },

    noteText: {
        flex: 6,
        padding: 20,
    },

    noteTextTitle: {
        fontSize: 15,
    },

    noteTextDesc: {
        fontSize: 15,
    },

    noteTextPri: {
        fontSize: 15,
    },

    noteBtn: {
        flex: 1,
        height: 10,
    }
});