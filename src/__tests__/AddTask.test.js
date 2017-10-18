import React from 'react';
import renderer from 'react-test-renderer';
import {AddTask} from '../components/todo/AddTask';
import {MuiThemeProvider} from "material-ui";
import Enzyme, {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-15';
Enzyme.configure({ adapter: new Adapter() });


describe('Component: AddTask', () => {

  it('should match its empty snapshot', () => {
    const tree = renderer.create(
    	<MuiThemeProvider>
      		<AddTask  />
      	</MuiThemeProvider>
     ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should handle change', () => {
    const component = shallow(<AddTask />);

    component.find('TextField').simulate('onChange', { target: {
    	value: "test"
    }});

    expect(toJson(component)).toMatchSnapshot();

	});



});



