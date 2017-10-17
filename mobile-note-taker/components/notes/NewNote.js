import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, Form } from 'react-native';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';

var radio_props = [
    {label: 'Low', value: "Low" },
    {label: 'Mid', value: "Mid" },
    {label: 'High', value: "High" }
  ];

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

    validateForm() {
        return (this.state.noteTitle.length > 0 && this.state.noteText.length > 0);
    }

    handleTitleChange = event => {
        this.setState({ noteTitle: event.nativeEvent.text });
    };

    handleTextChange = event => {
        this.setState({ noteText: event.nativeEvent.text });
    };

    onRadioChange(value){
        this.setState({
            notePri: value,
        });
    }

    validateForm() {
        return (this.state.noteTitle.length > 0 && this.state.noteText.length > 0);
    }

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
                    animation={true}
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