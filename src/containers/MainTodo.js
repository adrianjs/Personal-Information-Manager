import React from 'react';
import { AddTask } from '../components/todo/AddTask';
import { AddList } from '../components/todo/AddList';
import '../assets/ToDo.css';

export class MainTodo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {tasks: props.tasks};
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
        this.setState({tasks: updatedTasks})
        this.updateLocalStorage(updatedTasks);
    }

    removeTask(index) {
        var updatedTasks = this.state.tasks;
        updatedTasks.splice(index, 1);
        this.setState({tasks: updatedTasks})
        this.updateLocalStorage(updatedTasks);
    }

    render() {
        return (
            <div id="todoMain">
                <h1 className="mainTitles">Todo</h1>
                <AddTask updateList={this.updateList} />
                <AddList tasks={this.state.tasks} remove={this.removeTask} />
            </div>
        );
    }
}