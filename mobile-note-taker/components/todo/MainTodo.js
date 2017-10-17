import React from 'react';
import AddTask from './AddTask';
import AddList from './AddList';
import { StyleSheet, Text, View } from 'react-native';

//Default task list
var taskList = ["Task 1", "Task 2", "Task 3"];
/**Getting tasks from local storage
var tasks = localStorage.getItem('savedTasks');
if (tasks) {
    taskList = JSON.parse(tasks);
}**/

export default class MainTodo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {tasks: taskList};
        this.updateList = this.updateList.bind(this);
        this.removeTask = this.removeTask.bind(this);
    }

    updateLocalStorage(updatedTasks) {
        console.log("updated");
        localStorage.setItem('savedTasks', JSON.stringify(updatedTasks));
    }

    //this.updateLocalStorage(updatedTasks) updates the local storage everytime a task gets added or removed
    updateList(text) {
        var updatedTasks = this.state.tasks;
        updatedTasks.unshift(text);
        this.setState({tasks: updatedTasks});
        //this.updateLocalStorage(updatedTasks);
    }

    removeTask(index) {
        var updatedTasks = this.state.tasks;
        updatedTasks.splice(index, 1);
        this.setState({tasks: updatedTasks});
        //this.updateLocalStorage(updatedTasks);
    }

    render() {
        return (
            <View id="todoMain">
                <Text className="mainTitles">Todo</Text>
                <AddTask updateList={this.updateList} />
                <AddList tasks={this.state.tasks} remove={this.removeTask}/>
            </View>
        );
    }
}