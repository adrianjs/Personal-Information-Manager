import React from 'react';
import NoteList from '../components/note/NoteList';
import '../assets/Note.css';
import {Dialog, RaisedButton} from "material-ui";
import NewNote from "../components/note/NewNote";

export class MainNote extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: props.notes,
            open: false
        };
        this.newNote = this.newNote.bind(this);
        this.removeNote = this.removeNote.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleOpen = this.handleOpen.bind(this);
    }

    updateLocalStorage(updatedNotes) {
        console.log("updated");
        localStorage.setItem('savedNotes', JSON.stringify(updatedNotes));
    }

    //this.updateLocalStorage(updatedTasks) updates the local storage every time a task gets added or removed
    newNote(text) {
        var updatedNotes = this.state.notes;
        updatedNotes.unshift([text[0], text[1], text[2]]);
        this.setState({notes: updatedNotes});
        this.updateLocalStorage(updatedNotes);
    }

    removeNote(index) {
        var updatedNotes = this.state.notes;
        updatedNotes.splice(index, 1);
        this.setState({notes: updatedNotes});
        this.updateLocalStorage(updatedNotes);
    }

    handleClose = () => {
        this.setState({ open: false });
    };

    handleOpen = () => {
        this.setState({ open: true });
    };

    render() {
        const actions = [
            <RaisedButton
                label="Close"
                primary={true}
                onClick={this.handleClose}
            />
        ];

        return (
            <div>
                <div className="mainTitles"><h1>Notes</h1></div>
                <RaisedButton primary={true} fullWidth={true} onClick={this.handleOpen}>New note</RaisedButton><br/><br/>
                <div id="mainNote">
                    <NoteList notes={this.state.notes} remove={this.removeNote} />
                    <div onSubmit={this.handleClose}>
                        <Dialog
                            title="New Note"
                            actions={actions}
                            modal={false}
                            open={this.state.open}
                            onRequestClose={this.handleClose}
                        >
                            <NewNote newNote={this.newNote} handleClose={this.handleClose}/>
                        </Dialog>
                    </div>
                </div>
            </div>
        );
    }
}