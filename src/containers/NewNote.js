import React from 'react';
import {
    FormGroup, FormControl, ControlLabel, Radio, Glyphicon, Button,
    ButtonToolbar
} from 'react-bootstrap';
import LoaderButton from '../components/LoaderButton';
import './NewNote.css';

export default class NewNote extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            isLoading: null,
            noteTitle: "",
            noteText: ""
        };
    }

    validateForm() {
        return (this.state.noteTitle.length > 0 && this.state.noteText.length > 0);
    }

    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
    };

    handleSubmit = async event => {
        event.preventDefault();

        this.setState({ isLoading: true });
    };


    render() {
        return(
            <form onSubmit={this.handleSubmit} oncancel={this.handleSubmit}>
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
                    <Radio name="priority" inline>
                        1
                    </Radio>
                    {' '}
                    <Radio name="priority" inline>
                        2
                    </Radio>
                    {' '}
                    <Radio name="priority" inline>
                        3
                    </Radio>
                </FormGroup>

                <ButtonToolbar>
                    <LoaderButton
                        bsSize="lg"
                        bsStyle="primary"
                        disabled={!this.validateForm()}
                        type="submit"
                        isLoading={this.state.isLoading}
                        text=" Save"
                        loadingText=" Saving..."
                    />
                    <Button type="cancel" bsStyle="danger" bsSize="lg"><Glyphicon glyph="remove" /> Cancel</Button>
                </ButtonToolbar>
            </form>
        );
    }
}