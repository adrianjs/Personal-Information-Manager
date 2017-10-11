import React from 'react';
import { Button } from 'react-bootstrap';

export class NoteList extends React.Component {
    render() {
        var items = this.props.notes.map((element, i) => {
            return <div className="note" key={i} id={i}>
                <div className="noteContainer">
                    <span className="noteTitle">{element[0]}</span><br/>
                    <span className="noteText">{element[1]}</span><br/>
                    <span className="notePrior">{element[2]} priority</span>
                </div>
                <Button className="noteBtn" bsStyle="danger" bsSize="small" onClick={this.props.remove}>Delete</Button><br/>
            </div>
        }, this);
        return (
            <div id="allNotes">{items}</div>
        );
    }
}