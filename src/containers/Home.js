import React from 'react';
import { Row, Col } from 'react-bootstrap';
import './Home.css';
import { MainTodo } from '../components/MainTodo';

//Default task list
var taskList = ["Task 1", "Task 2", "Task 3"];
//Getting tasks from local storage
var tasks = localStorage.getItem('savedTasks');
if(tasks) {
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
                            Notater her?
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