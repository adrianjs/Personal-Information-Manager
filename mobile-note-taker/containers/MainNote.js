import React from 'react';
import NewNote from '../components/notes/NewNote';
import NoteList from '../components/notes/NoteList';
import { StyleSheet, Text, View, AsyncStorage, ScrollView } from 'react-native';

//Dummy data passed to NoteList on first launch
var noteList = [["NoteTitle 1", "NoteText 1", "High"],
["NoteTitle 2", "NoteText 2", "Mid"],
["NoteTitle 3", "NoteText 3", "Low"]];

//Getting notes from local storage
var notes = AsyncStorage.getItem('savedNotes');

/*
    Main component of notes. Renders the other components (NewNote and NoteList) on the Note view.
 */

export default class MainNote extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: noteList,
            open: false,
            arrayLoaded: false
        };
        this.newNote = this.newNote.bind(this);
        this.removeNote = this.removeNote.bind(this);
    }

    //Loads the locally saved notes on mount
    componentDidMount() {
        this.loadData().done()
    }

    //Function for loading locally saved notes
    async loadData() {
        var array = [];
        notes.then((response) =>  {
            console.log("response", response)
            return JSON.parse(response);
        }).then((data) =>  {
            console.log("data", data);
            array = data;
            if (array == null) {
                array = [];
            }
            if (array.length > 0) {
                this.setState({notes: array});
                this.setState({arrayLoaded: true});
                console.log("states set!")
            } else {
                this.setState({notes: noteList});
                this.setState({arrayLoaded: true});
                console.log("array not found, using default");
            }
        });
    }

    //Fetches locally saved notes
    updateLocalStorage(updatedNotes) {
        console.log("updated");
        AsyncStorage.setItem('savedNotes', JSON.stringify(updatedNotes));
    }

    //this.updateLocalStorage(updatedTasks) updates the local storage every time a task gets added or removed
    newNote(text) {
        var updatedNotes = this.state.notes;
        updatedNotes.unshift([text[0], text[1], text[2]]);
        this.setState({notes: updatedNotes});
        this.updateLocalStorage(updatedNotes);
    }

    removeNote(index) {
        var updatedNotes = this.state.notes;
        updatedNotes.splice(index, 1);
        this.setState({notes: updatedNotes});
        this.updateLocalStorage(updatedNotes);
    }

    render() {
        setTimeout(() => {this.setState({timePassed: true})}, 2000);        
        if (!this.state.arrayLoaded) {
            return <Text>Loading</Text>
        } else {
            return (
                <View>
                    <View className="mainTitles"><Text>My notes</Text></View>
                    <View id="mainNote">
                        <ScrollView style={styles.contentContainer}>
                            <NoteList notes={this.state.notes} remove={this.removeNote} />
                        </ScrollView>    
                        <NewNote newNote={this.newNote} />
                    </View>
                </View>
            );
        }
    }    
}

//Stylesheet for the Note view
const styles = StyleSheet.create({
    contentContainer: {
         paddingHorizontal: 50,
         margin: 2,
         height: 200,
    }
});