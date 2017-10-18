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