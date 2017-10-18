import React from 'react';
import {RaisedButton} from "material-ui";

export default class NoteList extends React.Component {
    render() {
        var items = this.props.notes.map((element, i) => {
            return <div className="note" key={i} id={i}>
                <div className="noteContainer">
                    <span className="noteTitle">{element[0]}</span><br/>
                    <span className="noteText">{element[1]}</span><br/>
                    <span className="notePrior">{element[2]} priority</span>
                </div>
                <RaisedButton className="noteBtn" secondary={true} onClick={(e) => this.props.remove(i)}>Delete</RaisedButton><br/>
            </div>
        }, this);
        return (
            <div id="allNotes">{items}</div>
        );
    }
}