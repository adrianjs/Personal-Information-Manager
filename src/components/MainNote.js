import React from 'react';
import { NewNote } from './NewNote';
import { NoteList } from './NoteList';
import { Button } from 'react-bootstrap';
import './Note.css';

export class MainNote extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: props.notes,
            showModal: false
        };
        this.newNote = this.newNote.bind(this);
        this.removeNote = this.removeNote.bind(this);
        this.close = this.close.bind(this);
        this.open = this.open.bind(this);
    }

    updateLocalStorage(updatedNotes) {
        console.log("updated");
        localStorage.setItem('savedNotes', JSON.stringify(updatedNotes));
    }

    //this.updateLocalStorage(updatedTasks) updates the local storage everytime a task gets added or removed
    newNote(text) {
        var updatedNotes = this.state.notes;
        updatedNotes.unshift([text[0], text[1], text[2]]);
        this.setState({notes: updatedNotes})
        this.updateLocalStorage(updatedNotes);
    }

    removeNote(text) {
        var updatedNotes = this.state.notes;
        updatedNotes.splice(updatedNotes.indexOf([text]), 1);
        this.setState({notes: updatedNotes})
        this.updateLocalStorage(updatedNotes);
    }

    close() {
        this.setState({ showModal: false });
    }

    open() {
        this.setState({ showModal: true });
    }

    render() {
        return (
            <div id="tullball">
                <div class="mainTitles"><h1>Notes</h1></div>
                <div id="mainNote">
                <NoteList notes={this.state.notes} remove={this.removeNote} />
                <Button id="newNoteBtn"bsStyle="primary" bsSize="small" onClick={this.open}>New note</Button><br/><br/>
                <NewNote newNote={this.newNote} />
                {/*<div className="static-modal">
                    <Modal show={this.state.showModal} onHide={this.close}>
                        <Modal.Header closeButton>
                            <Modal.Title>Create a new note</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            
                        </Modal.Body>
                        <Modal.Footer>
                            <Button bsStyle="danger" onClick={this.close}>Cancel</Button>
                        </Modal.Footer>
                    </Modal>
                </div>}*/}
                </div>
            </div>
        );
    }
}