import React from 'react';
import '../../assets/Note.css';
import {RadioButton, RadioButtonGroup, RaisedButton, TextField} from "material-ui";

/*
    Component class for displaying textfields and radio buttons for making a new note.
    Component is rendered inside a popup dialog.
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

    //Simple validation. Simply checks that none of the textfields are empty
    validateForm() {
        return (this.state.noteTitle.length > 0 && this.state.noteText.length > 0);
    }

    //Function for updating state in title textfield
    handleTitleChange = event => {
        this.setState({ noteTitle: event.target.value });
    };

    //Function for updating state in text textfield
    handleTextChange = event => {
        this.setState({ noteText: event.target.value });
    };

    //Function for updating priority using radio buttons
    onRadioChange(value){
        this.setState({
            notePri: value,
        });
    }

    //Function for handling submit. Takes in current state and passes it to a function that saves it.
    //Then resets state for next note.
    handleSubmit(event) {
        event.preventDefault();
        var value = [this.state.noteTitle, this.state.noteText, this.state.notePri];
        this.props.newNote(value);
        this.setState({
            noteTitle: "",
            noteText: "",
        });
        this.props.handleClose();
    };

    render() {
        return (
            <form id="noteForm" onSubmit={this.handleSubmit}>
                <TextField
                    hintText="Enter title here"
                    floatingLabelText="Title"
                    onChange={this.handleTitleChange}
                    value={this.state.noteTitle}
                /><br/><br/>
                <TextField
                    hintText="Enter note text here"
                    floatingLabelText="Text"
                    multiLine={true}
                    rows={1}
                    onChange={this.handleTextChange}
                /><br/><br/>
                <RadioButtonGroup name="priority" defaultSelected="Low" onChange={(e) => this.onRadioChange(e.target.value)}>
                    <RadioButton
                        value="Low"
                        label="Low"
                    />
                    <RadioButton
                        value="Med"
                        label="Med"
                    />
                    <RadioButton
                        value="High"
                        label="High"
                    />
                </RadioButtonGroup>

                <RaisedButton
                    className="saveBtn"
                    label="Submit"
                    primary={true}
                    type="submit"
                    disabled={!this.validateForm()}
                />
            </form>
        );
    }
}