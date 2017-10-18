import React from 'react';
import { MainNote } from '../containers/MainNote';
import renderer from 'react-test-renderer';
import {MuiThemeProvider} from "material-ui";
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';
Enzyme.configure({ adapter: new Adapter() });

describe('Component: MainNote', () => {
  const noteList = [["NoteTitle 1", "NoteText 1", "High"],
                	["NoteTitle 2", "NoteText 2", "Mid"],
                	["NoteTitle 3", "NoteText 3", "Low"]];

  it('should match its empty snapshot', () => {
    const tree = renderer.create(
    	<MuiThemeProvider>
      		<MainNote notes={[]} />
      	</MuiThemeProvider>
     ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should match a snapshot with initial notes', () => {
    const tree = renderer.create(
    	<MuiThemeProvider>
      		<MainNote notes={noteList} />
      	</MuiThemeProvider>
     ).toJSON();

    expect(tree).toMatchSnapshot();
  });


  it('should handle close correctly', () => {
  	const component = shallow(<MainNote notes={noteList} />);

  	component.instance().handleClose();
  	expect(component).toMatchSnapshot();

  });


  it('should handle open correctly', () => {
  	const component = shallow(<MainNote notes={noteList} />);

  	component.instance().handleOpen();
  	expect(component).toMatchSnapshot();

  });

});


















// Enzyme.configure({ adapter: new Adapter() });
//Default task list
// var noteList = [["NoteTitle 1", "NoteText 1", "High"],
//                 ["NoteTitle 2", "NoteText 2", "Mid"],
//                 ["NoteTitle 3", "NoteText 3", "Low"]];

// test('MainNote is rendered as expected' , () => {
// 	const component = renderer.create(
// 		<MuiThemeProvider>
// 			<MainNote notes={noteList} />
// 		</MuiThemeProvider>
// 		);

// 	let tree = component.toJSON();
// 	expect(tree).toMatchSnapshot();

// });


// test('Adding a new note works as expected' , () => {
// 	const component = renderer.create(
// 		<MuiThemeProvider>
// 			<MainNote notes={noteList} />
// 		</MuiThemeProvider>
// 		);

// 	// render as expexted first
// 	let tree = component.toJSON();
// 	expect(tree).toMatchSnapshot();


// 	component.find('')

// });


