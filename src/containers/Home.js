import React from 'react';
import { Row, Col } from 'react-bootstrap';
import './Home.css';
import { MainTodo } from '../components/MainTodo';
import { MainNote } from '../components/MainNote';

//Default task list
var noteList = [["NoteTitle 1", "NoteText 1", "NotePriority 1"],
                ["NoteTitle 2", "NoteText 2", "NotePriority 2"],
                ["NoteTitle 3", "NoteText 3", "NotePriority 3"]];
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
    render(){
        return(
            <div className="Home">
                <div className="lander">
                    <Row>
                        <Col xs={6} md={4}>
                            Kalender her!
                        </Col>
                        <Col xs={6} md={4}>
                            <MainNote notes={noteList}/>
                        </Col>
                        <Col xs={6} md={4}>
                            <MainTodo tasks={taskList} />
                        </Col>
                    </Row>
                </div>
            </div>
        )
    }
}