import React from 'react';
import { NewNote } from './NewNote';
import './NewNoteModal.css';

export class NewNoteModal extends React.Component{
    constructor(){
        super()
    }

    render(){
    return(
    <div class="modal">
    <input class="modal-open" id="modal-one" type="checkbox" hidden />
    <div class="modal-wrap" aria-hidden="true" role="dialog">
        <label class="modal-overlay" for="modal-one"></label>
        <div class="modal-dialog">
            <div class="modal-header">
                <label class="btn-close" for="modal-one" aria-hidden="true">x</label>
            </div>
            <div class="modal-body">
                <p>Oppskrift</p>
                <NewNote newNote={this.NewNote} />
            </div>
                <div class="modal-footer">
                    <label class="btn btn-primary" for="modal-one">Close</label>
                </div>
            </div>
        </div>
    </div>
    )
    }    
}