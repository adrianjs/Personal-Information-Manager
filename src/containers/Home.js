import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Calendar from "./Calendar";
import './Home.css';
import { MainTodo } from '../components/MainTodo';
import { MainNote } from '../components/MainNote';
import { NewNoteModal } from '../components/NewNoteModal';
import { Modal } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

//Default task list
var noteList = [["NoteTitle 1", "NoteText 1", "High"],
                ["NoteTitle 2", "NoteText 2", "Mid"],
                ["NoteTitle 3", "NoteText 3", "Low"]];
//Getting tasks from local storage
var notes = localStorage.getItem('savedNotes');
if (notes) {
    noteList = JSON.parse(notes);
}

//Default task list
var taskList = ["Task 1", "Task 2", "Task 3"];
//Getting tasks from local storage
var tasks = localStorage.getItem('savedTasks');
if (tasks) {
    taskList = JSON.parse(tasks);
}


export default class Home extends React.Component {

    constructor(props){
        super(props)
        this.state = { showModal: false }; 
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
            <div className="Home">
                <div className="lander">
                    <Row>
                        <Col xs={6} md={4} className="calendar-rectangle">
                            <div className="calendar-content"><Calendar /></div>
                        </Col>
                        <Col xs={6} md={4}>
                            <MainNote notes={noteList} modal={this.refs.NodeModal}/>
                            {console.log(this.refs.NodeModal)}
                        </Col>
                        <Col xs={6} md={4}>
                            <MainTodo tasks={taskList} />
                        </Col>
                    </Row>
                </div>
                <Modal show={this.state.showModal} onHide={this.close} ref="NodeModal" ok="ok" >
                <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <h4>Text in a modal</h4>
                <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>

                <hr />
    
                <h4>Overflowing text to show scroll behavior</h4>
                <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
                <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
                <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
                <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
                <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
                <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
                </Modal.Body>
                <Modal.Footer>
                <Button onClick={this.close}>Close</Button>
                 </Modal.Footer>
                </Modal>
                {console.log(this.refs.NodeModal)}
            </div>
        )
    }
}