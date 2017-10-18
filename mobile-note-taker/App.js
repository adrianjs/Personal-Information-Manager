import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MainTodo from './components/todo/MainTodo'
import MainNote from './components/notes/MainNote'
import SegmentedControlTab from 'react-native-segmented-control-tab'
import ScrollableCalendar from "./components/calendar/ScrollableCalendar";

export default class App extends React.Component {
    constructor(){
        super();
        this.state = {
            selectedIndex: 0,
            currentViews: [<ScrollableCalendar />, <MainTodo />, <MainNote />],
            currentView: <ScrollableCalendar />
        };
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
                <View style={styles.title}><Text style={styles.titleText}>Your Personal Manager</Text></View>
                <View style={styles.tab}>
                    <SegmentedControlTab
                        tabsContainerStyle={styles.tabsContainerStyle}
                        activeTabStyle={styles.activeTabStyle}
                        tabStyle={styles.tabStyle}
                        tabTextStyle={styles.tabTextStyle}
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

const styles = StyleSheet.create({
    title: {
        paddingTop: 20,
        paddingBottom: 10,
        height: 60,
        backgroundColor: '#00bcd4',
    },

    titleText: {
        fontSize: 30,
        textAlign: "center",
        color: "white",
    },

    tab: {
        height: 50,
    },

    maincontainer: {
        justifyContent: "center",
        backgroundColor: "white",
        height: 600,
    },

    container: {
        alignItems: "center",
        justifyContent: "center",
    },

    tabsContainerStyle: {
        height: "100%",
    },

    tabStyle: {
        backgroundColor: "#00bcd4",
        borderColor: "#00bcd4",
    },

    activeTabStyle: {
        backgroundColor: "#009cd4",
    },

    tabTextStyle: {
        color: "white",
    },
});