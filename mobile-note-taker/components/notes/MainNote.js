import React from 'react';
import NewNote from './NewNote';
import NoteList from './NoteList';
import { StyleSheet, Text, View, Button } from 'react-native';

var noteList = [["NoteTitle 1", "NoteText 1", "High"],
["NoteTitle 2", "NoteText 2", "Mid"],
["NoteTitle 3", "NoteText 3", "Low"]];
/*//Getting tasks from local storage
var notes = localStorage.getItem('savedNotes');
if (notes) {
    noteList = JSON.parse(notes);
}*/

export default class MainNote extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: noteList,
            open: false
        };
        this.newNote = this.newNote.bind(this);
        this.removeNote = this.removeNote.bind(this);
    }

    updateLocalStorage(updatedNotes) {
        console.log("updated");
        AsyncStorage.setItem('savedNotes', JSON.stringify(updatedNotes));
    }

    //this.updateLocalStorage(updatedTasks) updates the local storage every time a task gets added or removed
    newNote(text) {
        var updatedNotes = this.state.notes;
        updatedNotes.unshift([text[0], text[1], text[2]]);
        this.setState({notes: updatedNotes});
        //this.updateLocalStorage(updatedNotes);
    }

    removeNote(index) {
        var updatedNotes = this.state.notes;
        updatedNotes.splice(index, 1);
        this.setState({notes: updatedNotes});
        //this.updateLocalStorage(updatedNotes);
    }

    /* 
    <NoteList notes={this.state.notes} remove={this.removeNote} />
    <NewNote newNote={this.newNote} handleClose={this.handleClose}/>
    */

    render() {
        return (
            <View>
                <View className="mainTitles"><Text>My notes</Text></View>
                <View id="mainNote">
                    <NoteList notes={this.state.notes} remove={this.removeNote} />
                    <NewNote newNote={this.newNote} />
                </View>
            </View>
        );
    }
}