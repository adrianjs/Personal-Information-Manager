import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MainTodo from './components/todo/MainTodo'
import MainNote from './components/notes/MainNote'
import {Font} from 'expo';
import SegmentedControlTab from 'react-native-segmented-control-tab'

export default class App extends React.Component {
    constructor(){
        super()
        this.state = {
            selectedIndex: 0,
            currentViews: [<Text> CALENDAR WILL BE IMPLEMENTED SOON </Text>, <MainTodo />, <MainNote />],
        };
    }

    componentDidMount() {
        this.handleIndexChange()
    }

    handleIndexChange = (index) => {
        this.setState({
          selectedIndex: index,
          currentView: this.state.currentViews[index]
        });
    }

    render() {
        return (
            <View>
                <View style={styles.tab}>
                    <SegmentedControlTab
                        tabsContainerStyle={styles.tabsContainerStyle}
                        activeTabStyle={styles.activeTabStyle}
                        tabStyle={styles.tabStyle}
                        tabTextStyle={styles.tabTextStyle}
                        tabBadgeContainerStyle={styles.tabBadgeContainerStyle}
                        values={['Calendar', 'ToDo', 'Notes']}
                        selectedIndex={this.state.selectedIndex}
                        onTabPress={this.handleIndexChange}
                    />
                </View>
                <View style={styles.maincontainer}>{this.state.currentView}</View>
            </View>
        );
    }
}
const appRender = () => {
    return (
        <View>
            <Text>Open up App.js to start working on your app!</Text>
            <Text>Changes you make will automatically reload.</Text>
            <Text>Shake your phone to open the developer menu.</Text>
            <MainTodo />
            <MainNote />
        </View>
    );
}

const styles = StyleSheet.create({
    tab: {
        marginTop: 20,
        height: 80,
    },

    maincontainer: {
        justifyContent: "center",
        backgroundColor: "powderblue",
        height: 630,
    },

    container: {
        alignItems: 'center',
        justifyContent: 'center',
    },

    tabsContainerStyle: {
        height: 80, 
    },

    tabStyle: {
        backgroundColor: 'skyblue',
    },

    activeTabStyle: {
        backgroundColor: 'steelblue',
    },

    tabTextStyle: {
        color: 'black',
    },

    tabBadgeContainerStyle: {
        color: 'black',
    },
});