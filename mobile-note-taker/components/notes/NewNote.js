import React from 'react';
import { Text, View, Button, TextInput } from 'react-native';
import RadioForm from 'react-native-simple-radio-button';

//Values for priority on radio buttons
const radio_props = [
    {label: 'Low', value: "Low" },
    {label: 'Mid', value: "Mid" },
    {label: 'High', value: "High" }
];

/*
    Component class for textfields and radio buttons used in creating a new note.
 */

export default class NewNote extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            noteTitle: "",
            noteText: "",
            notePri: "Low"
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleTextChange = this.handleTextChange.bind(this);
    }

    //Very basic validation. Simply checks that none of the textfields are empty.
    validateForm() {
        return (this.state.noteTitle.length > 0 && this.state.noteText.length > 0);
    }

    //Handles state change when typing in title textfield
    handleTitleChange = event => {
        this.setState({ noteTitle: event.nativeEvent.text });
    };

    //Handles state change when typing in text textfield
    handleTextChange = event => {
        this.setState({ noteText: event.nativeEvent.text });
    };

    //Handle submit of new note. Saves note, then resets fields.
    handleSubmit(event) {
        event.preventDefault();
        var value = [this.state.noteTitle, this.state.noteText, this.state.notePri];
        this.props.newNote(value);
        this.setState({
            noteTitle: "",
            noteText: "",
        });
    };

    render() {
        return (
            <View>
                <Text>Add a new note:</Text>
                <TextInput
                    style={{height: 40, width: 180, borderColor: 'gray', borderWidth: 1}}
                    onChange={(e) => this.handleTitleChange(e)}
                    value={this.state.noteTitle}
                />
                <TextInput
                    style={{height: 80, width: 180, borderColor: 'gray', borderWidth: 1}}
                    multiline = {true}
                    onChange={(e) => this.handleTextChange(e)}
                    value={this.state.noteText}
                />

                <RadioForm
                    radio_props={radio_props}
                    initial={0}
                    formHorizontal={true}
                    labelHorizontal={true}
                    buttonColor={'#2196f3'}
                    animation={false}
                    onPress={(value) => {this.setState({notePri:value})}}
                />

                <Button
                    disabled={!this.validateForm()}
                    title="Submit"
                    onPress={(e) => this.handleSubmit(e)}
                />
            </View>
        );
    }
}