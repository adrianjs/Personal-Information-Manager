import React from 'react';
import {
    FormGroup, FormControl
} from 'react-bootstrap';

export class AddTask extends React.Component {
    constructor(props) {
        super(props);
        this.submitted = this.submitted.bind(this);
    }

    //prevents refreshing of window and submits the text from the form to the list
    submitted(event) {
        event.preventDefault();
        var input = event.target.querySelector('input');
        var value = input.value;
        input.value = '';
        this.props.updateList(value);
    }

    render() {
        return (
            <FormGroup controlId="todoInput">
                <FormControl type="text" onSubmit={this.submitted} placeholder="Hit enter to add" />
            </FormGroup>
        );
    }
}