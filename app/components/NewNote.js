import React from 'react';
import {
    FormGroup, FormControl, ControlLabel, Radio, Glyphicon, HelpBlock, Button,
    ButtonToolbar
} from 'react-bootstrap';

const styles = {
    width: '40%',
    marginLeft: '600px',
    marginTop: '300px',
    fontFamily: 'sans-serif'
};

export default class NewNote extends React.Component {
    render() {
        return(
            <form className="NewNote" style={styles}>
                <FormGroup controlId="noteTitle">
                    <ControlLabel>Title</ControlLabel>
                    <FormControl type="text" placeholder="Enter title" />
                </FormGroup>
                <FormGroup controlId="noteText">
                    <ControlLabel>Text</ControlLabel>
                    <FormControl componentClass="textarea" placeholder="Enter text" />
                </FormGroup>

                <FormGroup>
                    <ControlLabel>Priority</ControlLabel>
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
                    <Button type="submit"><Glyphicon glyph="ok" /> Submit</Button>
                    <Button type="cancel"><Glyphicon glyph="remove" /> Cancel</Button>
                </ButtonToolbar>
            </form>
        );
    }
}