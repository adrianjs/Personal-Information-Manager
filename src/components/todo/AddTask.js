import React from 'react';
import {
    FormGroup, FormControl
} from 'react-bootstrap';

export class AddTask extends React.Component {
    constructor(props) {
        super(props);
        this.state = {todoText: ""}
        this.submitted = this.submitted.bind(this);
    }

    //prevents refreshing of window and submits the text from the form to the list
    submitted(event) {
        event.preventDefault();
        this.props.updateList(this.state.todoText);
        this.setState({todoText: ""});
    }

    handleChange = event => {
        this.setState({[event.target.id]: event.target.value});
    };

    render() {
        return (
            <form id="todoForm" onSubmit={this.submitted}>
                <FormGroup controlId="todoText">
                <FormControl
                    type="text"
                    onChange={this.handleChange}
                    value={this.state.todoText}
                    placeholder="Hit enter to add" />
                </FormGroup>
            </form>
        );
    }
}