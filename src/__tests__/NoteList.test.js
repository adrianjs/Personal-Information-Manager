import React from 'react';
import NoteList from '../components/note/NoteList';
import renderer from 'react-test-renderer';
import {MuiThemeProvider} from "material-ui";

var noteList = [["NoteTitle 1", "NoteText 1", "High"],
                ["NoteTitle 2", "NoteText 2", "Mid"],
                ["NoteTitle 3", "NoteText 3", "Low"]];



// var taskList = ["Task 1", "Task 2", "Task 3"];

test('NoteList is rendered', () => {
	const component = renderer.create(
		<MuiThemeProvider>
			<NoteList notes={noteList} />
		</MuiThemeProvider>
		);

	let tree = component.toJSON();
	expect(tree).toMatchSnapshot();



});