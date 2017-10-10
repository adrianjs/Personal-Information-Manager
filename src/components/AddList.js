import React from 'react';
import './ToDo.css';
import { Button } from 'react-bootstrap';

export class AddList extends React.Component {
    constructor(props) {
        super(props);
        this.remove = this.remove.bind(this);
    }

    //removes tasks by comparing the text of the task with the text of the parentnode of the button
    remove(element) {
        var thisState = this.props.tasks;
        var value = element.target.parentNode.id;
        thisState.splice(value, 1);
        this.setState({thisState});
    }

    render() {
        //holds control over the list by adding/removing elements and buttons whenever a task is added/removed
        var items = this.props.tasks.map((element, i) => {
            return <div className="todoTask" key={i} id={i}><span className="todoTxt">{element}</span><Button className="todoBtn" bsStyle="danger" bsSize="small" onClick={this.remove}>Delete</Button><br/></div>
        });
        return (
            <div id="allTasks">{items}</div>
        );
    }
}