import React from 'react';
import {Row, Col, Grid} from 'react-bootstrap';
import Calendar from "./Calendar";
import '../components/css/Home.css';
import { MainTodo } from './MainTodo';
import { MainNote } from './MainNote';


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

var eventList = [];
var events = localStorage.getItem('savedEvents');
if (eventList) {
    eventList = JSON.parse(events);
}

console.log(Math.floor((Math.random() * 50) + 1));

export default class Home extends React.Component {
    render(){
        return(
            
            <div className="Home">
                <div className="lander">
                    <Grid>
                        <Row>
                            <Col xs={6} md={4}>
                            <h1>Calendar</h1>
                            <div className="calendar-rectangle">
                                <div className="calendar-content"><Calendar events={eventList}/></div>
                            </div>
                            </Col>
                            <Col xs={6} md={4}>
                                <MainNote notes={noteList}/>
                            </Col>
                            <Col xs={6} md={4}>
                                <MainTodo tasks={taskList} />
                            </Col>
                        </Row>
                    </Grid>
                </div>
            </div>

        )
    }
}