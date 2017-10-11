import React from 'react';
import {
    FormGroup, FormControl, ControlLabel, Radio, ButtonToolbar
} from 'react-bootstrap';
import LoaderButton from './LoaderButton';
import './Note.css';

export class NewNote extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: null,
            noteTitle: "",
            noteText: "",
            notePri: "Low"
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    validateForm() {
        return (this.state.noteTitle.length > 0 && this.state.noteText.length > 0);
    }

    handleChange = event => {
        console.log(event.target.value);
        this.setState({[event.target.id]: event.target.value});
    };

    handleSubmit(event) {
        event.preventDefault();
        var value = [this.state.noteTitle, this.state.noteText, this.state.notePri]
        console.log(value);
        this.props.newNote(value);
        this.setState({
            isLoading: null,
            noteTitle: "",
            noteText: "",
        });
    };

    render() {
        return (
            <form id="noteForm" onSubmit={this.handleSubmit} onCancel={this.handleSubmit}>
                <FormGroup controlId="noteTitle">
                    <ControlLabel>Title</ControlLabel>
                    <FormControl
                        type="text"
                        onChange={this.handleChange}
                        value={this.state.noteTitle}
                        placeholder="Enter title" />
                </FormGroup>
                <FormGroup controlId="noteText">
                    <ControlLabel>Text</ControlLabel>
                    <FormControl
                        componentClass="textarea"
                        onChange={this.handleChange}
                        value={this.state.noteText}
                        placeholder="Enter text" />
                </FormGroup>

                <ControlLabel>Priority</ControlLabel>
                <FormGroup>
                    <Radio className="notePri" name="priority" inline onChange={this.handleChange} value="Low">
                        Low
                    </Radio>
                    {' '}
                    <Radio className="notePri" name="priority" inline onChange={this.handleChange} value="Mid">
                        Mid
                    </Radio>
                    {' '}
                    <Radio className="notePri" name="priority" inline onChange={this.handleChange} value="High">
                        High
                    </Radio>
                </FormGroup>

                <ButtonToolbar id="saveBtn">
                    <LoaderButton
                        bsSize="lg"
                        bsStyle="primary"
                        disabled={!this.validateForm()}
                        type="submit"
                        isLoading={this.state.isLoading}
                        text=" Save"
                        loadingText=" Saving..."
                    />
                </ButtonToolbar>
            </form>
        );
    }
}