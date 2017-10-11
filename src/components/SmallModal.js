import React from 'react';
import {Button, Modal} from 'react-bootstrap';
import NewNote from "./NewNote";

export default class SmallModal extends React.Component{
    render() {
        return (
            <Modal {...this.props} bsSize="lg" aria-labelledby="contained-modal-title-lg">
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-lg">New Note</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <NewNote newNote={this.props.newNote}/>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.props.onHide}>Close</Button>
                </Modal.Footer>
            </Modal>
        );
    }
}