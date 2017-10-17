import React from 'react';
import AddTask from './AddTask';
import AddList from './AddList';
import { StyleSheet, Text, View, AsyncStorage } from 'react-native';

//Default task list
var taskList = ["Task 1", "Task 2", "Task 3"];
//Getting tasks from local storage
var tasks = AsyncStorage.getItem('savedTasks');
var array = []
tasks.then(function(response) {
    return JSON.parse(response);
}).then(function (data) {
    array = data;
    console.log(array);
});

export default class MainTodo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {tasks: taskList, timePassed: false};
        this.updateList = this.updateList.bind(this);
        this.removeTask = this.removeTask.bind(this);
    }

    updateLocalStorage(updatedTasks) {
        console.log("updated");
        AsyncStorage.setItem('savedTasks', JSON.stringify(updatedTasks));
    }

    //this.updateLocalStorage(updatedTasks) updates the local storage everytime a task gets added or removed
    updateList(text) {
        var updatedTasks = this.state.tasks;
        updatedTasks.unshift(text);
        this.setState({tasks: updatedTasks});
        this.updateLocalStorage(updatedTasks);
    }

    removeTask(index) {
        var updatedTasks = this.state.tasks;
        updatedTasks.splice(index, 1);
        this.setState({tasks: updatedTasks});
        this.updateLocalStorage(updatedTasks);
    }

    render() {
        setTimeout(() => {this.setState({timePassed: true})}, 2000);
        if (!this.state.timePassed) {
            this.state.taskList = this.array;
            return <Text>Loading</Text>
        } else {
            return (
                <View id="todoMain">
                    <Text className="mainTitles">Todo</Text>
                    <AddTask updateList={this.updateList} />
                    <AddList tasks={this.state.tasks} remove={this.removeTask}/>
                </View>
            );
        }
        
    }
}