import React from 'react';
import AddTask from './AddTask';
import AddList from './AddList';
import { StyleSheet, Text, View, AsyncStorage, ScrollView } from 'react-native';

//Default task list
var taskList = ["Task 1", "Task 2", "Task 3"];
//Getting tasks from local storage
var tasks = AsyncStorage.getItem('savedTasks');

export default class MainTodo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: taskList,
            arrayLoaded: false
        };
        this.updateList = this.updateList.bind(this);
        this.removeTask = this.removeTask.bind(this);
    }

    componentDidMount() {
        this.loadData().done()
    }

    async loadData() {
        var array = [];
        tasks.then((response) =>  {
            console.log("response", response)
            return JSON.parse(response);
        }).then((data) =>  {
            console.log("data", data);
            array = data;
            if (array == null) {
                array = [];
            }
            if (array.length > 0) {
                this.setState({tasks: array});
                this.setState({arrayLoaded: true});
                console.log("states set!")
            } else {
                this.setState({tasks: taskList});
                this.setState({arrayLoaded: true});
                console.log("array not found, using default");
            }
        });
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
        if (!this.state.arrayLoaded) {
            return <Text>Loading</Text>
        } else {
            return (
                <View>
                    <View style={styles.todoTitle}><Text style={styles.todoTitleText} className="mainTitles">Todo</Text></View>
                    <View>
                        <AddTask updateList={this.updateList} />
                        <ScrollView style={styles.contentContainer}>
                            <AddList tasks={this.state.tasks} remove={this.removeTask}/>
                        </ScrollView>   
                    </View>
                </View>
            );
        }
    }
}

const styles = StyleSheet.create({
    todoTitle: {
        
    },

    todoText: {
        fontSize: 20,
    },

    todoMain: {

    },

    contentContainer: {
         paddingHorizontal: 50,
         margin: 2,
         height: 200,
    }
});