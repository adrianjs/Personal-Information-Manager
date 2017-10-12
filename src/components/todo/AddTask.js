import React from 'react';
import {TextField} from "material-ui";

export class AddTask extends React.Component {
    constructor(props) {
        super(props);
        this.state = {todoText: ""};
        this.submitted = this.submitted.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    //prevents refreshing of window and submits the text from the form to the list
    submitted(event) {
        event.preventDefault();
        this.props.updateList(this.state.todoText);
        this.setState({todoText: ""});
    }

    handleChange = event => {
        this.setState({todoText: event.target.value});
    };

    render() {
        return (
            <form id="todoForm" onSubmit={this.submitted}>
                <TextField
                    hintText="Hit enter to add"
                    onChange={(e) => this.handleChange(e, "todo")}
                    value={this.state.todoText}
                    id="todo"
                />
            </form>
        );
    }
}