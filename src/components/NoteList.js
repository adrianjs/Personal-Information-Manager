import React from 'react';
import { Button } from 'react-bootstrap';

export class NoteList extends React.Component {
    constructor(props) {
        super(props);
        this.remove = this.remove.bind(this);
    }

    //removes tasks by comparing the text of the task with the text of the parentnode of the button
    remove(element) {
        var thisState = this.props.notes;
        var value = element.target.parentNode.id;
        thisState.splice(value, 1);
        this.setState({thisState});
    }

    render() {
        var items = this.props.notes.map((element, i) => {
            return <div className="note" key={i} id={i}>
                <div className="noteContainer">
                    <span className="noteTitle">{element[0]}</span><br/>
                    <span className="noteText">{element[1]}</span><br/>
                    <span className="notePrior">{element[2]} priority</span>
                </div>
                <Button className="noteBtn" bsStyle="danger" bsSize="small" onClick={this.remove}>Delete</Button><br/>
            </div>
        }, this);
        return (
            <div id="allNotes">{items}</div>
        );
    }
}