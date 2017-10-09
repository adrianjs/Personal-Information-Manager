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
        console.log("subbs");
        event.preventDefault();
        var input = event.target.querySelector('input');
        var value = input.value;
        input.value = '';
        this.props.updateList(value);
    }

    render() {
        return (
            <form onSubmit={this.submitted}>
                <input type="text"  placeholder="Hit enter to add" />
            </form>
        );
    }
}