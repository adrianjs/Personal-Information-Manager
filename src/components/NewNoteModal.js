import React from 'react';
import { NewNote } from './NewNote';
import './NewNoteModal.css';
import {Modal} from 'react-bootstrap';
import {Button} from 'react-bootstrap';

export class NewNoteModal extends React.Component{

    constructor(props){
        super(props)
        this.state = { 
            showModal: false, 
            noteModal: props.modal
        }; 
        display: "none";
        this.close = this.close.bind(this);
        this.open = this.open.bind(this);
    }


    getInitialState() {
        return { showModal: false };
      }
    
      close() {
        this.setState({ showModal: false });
      }
    
      open() {
        this.setState({ showModal: true });
      }

    render(){
        return(
            <div>
            <Button
              bsStyle="primary"
              bsSize="large"
              onClick={this.open}
            >
            {console.log(this.noteModal)}
              Launch demo modal
            </Button>
            </div>
        );
    
    }    
}