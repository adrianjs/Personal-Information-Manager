import React from 'react';
import '../css/ToDo.css';
import { Button } from 'react-bootstrap';

export class AddList extends React.Component {
    render() {
        //holds control over the list by adding/removing elements and buttons whenever a task is added/removed
        var items = this.props.tasks.map((element, i) => {
            return <div className="todoTask" key={i} id={i}><span className="todoTxt">{element}</span><Button className="todoBtn" bsStyle="danger" bsSize="small" onClick={this.props.remove}>Delete</Button><br/></div>
        });
        return (
            <div id="allTasks">{items}</div>
        );
    }
}