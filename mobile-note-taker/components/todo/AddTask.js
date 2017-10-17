import React from 'react';
//import { TextField } from "material-ui";
import { StyleSheet, Text, View, Form, TextInput } from 'react-native';

export default class AddTask extends React.Component {
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
        this.setState({todoText: event.nativeEvent.text});
    };

    render() {
        return (
            <View>
                <TextInput
                    id="todo"
                    style={{height: 40, width: 120, borderColor: 'gray', borderWidth: 1}}
                    onChange={(e) => this.handleChange(e, "todo")}
                    value={this.state.todoText}
                    onSubmitEditing={(e) => this.submitted(e)}
                />
            </View>
        );
    }
}