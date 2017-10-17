import React from 'react';
import moment from 'moment';
import {View, Text, LayoutAnimation, Platform, UIManager, StyleSheet, TouchableHighlight} from 'react-native';
import Events from './Events'
import DayNames from "./DayNames";
import Week from "./Week";
import { Icons } from 'react-native-fontawesome';

const styles = StyleSheet.create({
    row: {
        display: 'flex',
        justifyContent: 'center'
    },
    box: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        height: '100%',
    },
    mainCalendar: {
        height: '100%',
        display: 'flex',
        flexWrap: 'wrap'
    },
    calendarHeader: {
        display: 'flex',
        flexWrap: 'wrap',
        width: '100%',
        height: '30%',
        color: 'black',
        justifyContent: 'center',
        alignContent: 'center'
    },
    titleHeader: {
        width: '100%',
        height: '70%',
        whiteSpace: 'nowrap',
        fontSize: '1.2em',
        backgroundColor: '#ebe9e9'
    },
    headerText: {
        flex: 5,
        display: 'flex',
        height: '100%'
    },
    todayLabel: {
        flex: 1,
        fontSize: '0.8em'
    },
    todayLabelHover: {
        cursor: 'pointer',
        color: '#656565',
        backgroundColor: '#fff'
    },
    monthLabel: {
        flex: 3
    },
    daysHeader: {
        width: '100%',
        height: '30%',
        backgroundColor: '#bebebe'
    },
    buttonContainer: {
        width: '100%',
        height: '30%',
        backgroundColor: '#d8d8d8'
    },
    eventButton: {
        flexGrow: 1,
        display: 'flex',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    eventButtonHover: {
        backgroundColor: '#fff',
        color: '#656565'
    },
    daysContainer: {
        width: '100%',
        height: '70%',
        background: '#fff',
        padding: '0 20px 0 20px'
    },
    week: {
        height: '15%'
    },
    dayEvents: {
        position: 'relative',
        width: '100%',
        height: '70%',
        backgroundColor: '#fff',
        fontSize: '1.2em'
    },
    eventContainer: {
        width: '100%',
        textAlign: 'center',
        display: 'flex'
    },
    eventContainerHover: {
        cursor: 'pointer'
    },
    animatedBtn: {
        width: '30%'
    },
    animatedTitle:{
        width: '70%'
    },
    eventAttribute: {
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
        boxSizing: 'border-box',
        padding: 0
    },
    arrowHover: {
        backgroundColor: '#fff',
        cursor: 'pointer',
        color: '#656565',
    },
    day: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        height: '100%'
    },
    dayNumber: {
        width: '80%',
        height: '90%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        border: '1px solid #fff',
        boxSizing: 'border-box',
        borderRadius: '50%'
    },
    dayHover: {
        cursor: 'default',
        backgroundColor: '#656565',
        color: '#fff'
    },
    today: {
        width: '80%',
        height: '90%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        border: '1px solid #f51a1a',
        boxSizing: 'border-box',
        borderRadius: '50%'
    },
    todayHover: {
        cursor: 'default',
        backgroundColor: '#656565',
        color: '#fff',
        border: '1px solid #f51a1a',
        fontWeight: 'bold'
    },
    dayWithEvent: {
        color: '#656565',
        fontWeight: 'bold'
    },
    differentMonth: {
        opacity: 0.5
    }
});


export default class Calendar extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            selectedMonth: moment(),
            selectedDay: moment().startOf("day"),
            selectedMonthEvents: [],
            showEvents: false
        };

        if (Platform.OS === 'android'){
            UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);        }

        this.previous = this.previous.bind(this);
        this.next = this.next.bind(this);
        this.addEvent = this.addEvent.bind(this);
        this.showCalendar = this.showCalendar.bind(this);
        this.goToCurrentMonthView = this.goToCurrentMonthView.bind(this);

        var events = localStorage.getItem('savedEvents');
        if (events) {
            this.setState({selectedMonthEvents: JSON.parse(events)});
        }
        this.initialiseEvents();
    }

    previous() {
        const currentMonthView = this.state.selectedMonth;

        this.setState({
            selectedMonth: currentMonthView.subtract(1, 'month')
        });
    }

    next() {
        const currentMonthView = this.state.selectedMonth;

        this.setState({
            selectedMonth: currentMonthView.add(1, 'month')
        });
    }

    componentWillUpdate(){
        LayoutAnimation.easeInEaseOut();
    }

    select(day){
        this.setState({
          selectedMonth: day.date,
          selectedDay: day.date.clone(),
          showEvents: true
        });
    }

    goToCurrentMonthView(){

        this.setState({
            selectedMonth: moment()
        });
    }

    showCalendar(){
        this.setState({
            selectedMonth: this.state.selectedMonth,
            selectedDay: this.state.selectedDay,
            showEvents: false
        });
    }

    renderMonthLabel(){
        const currentMonthView = this.state.selectedMonth;

        return (
            <View style={[styles.monthLabel, styles.box]}>
                {currentMonthView.format("MMMM YYYY")}
            </View>
        );
    }

    renderDayLabel(){
        const currentSelectedDay = this.state.selectedDay;

        return (
            <View className="box month-label">
                {currentSelectedDay.format("DD MMMM YYYY")}
            </View>
        );
    }

    renderTodayLabel(){
        return(
            <View className="box today-label" onClick={this.goToCurrentMonthView}>
                Today
            </View>
        );
    }

    renderWeeks(){
        const currentMonthView = this.state.selectedMonth;
        const currentSelectedDay = this.state.selectedDay;
        const monthEvents = this.state.selectedMonthEvents;

        let weeks = [];
        let done = false;
        let previousCurrentNextView = currentMonthView
            .clone()
            .startOf("month")
            .subtract(1, "d")
            .day("Monday");
        let count = 0;
        let monthIndex = previousCurrentNextView.month();

        while (!done){
            weeks.push(
                <Week
                    previousCurrentNextView={previousCurrentNextView.clone()}
                    currentMonthView={currentMonthView}
                    monthEvents={monthEvents}
                    selected={currentSelectedDay}
                    select={day => this.select(day)}
                />
            );
            previousCurrentNextView.add(1, "w");
            done = count++ > 2 && monthIndex !== previousCurrentNextView.month();
            monthIndex = previousCurrentNextView.month();
        }
        return weeks;
    }

    updateLocalStorage(updatedEvents) {
        console.log("updated");
        localStorage.setItem('savedEvents', JSON.stringify(updatedEvents));
    }

    handleAdd() {
        const monthEvents = this.state.selectedMonthEvents;
        const currentSelectedDate = this.state.selectedDay;

        let newEvents = [];

        let eventTitle = prompt("Please enter a name for your event: ");

        switch(eventTitle) {
            case "":
                alert("Event name cannot be empty");
                break;
            case null:
                alert("Changed your mind? You can add one later");
                break;
            default:
                let newEvent = {
                    title: eventTitle,
                    date: currentSelectedDate,
                    dynamic: true
                };

                newEvents.push(newEvent);

                for (let i = 0; i < newEvents.length; i++) {
                    monthEvents.push(newEvents[i]);
                }

                this.setState({
                    selectedMonthEvents: monthEvents
                });
                this.updateLocalStorage(monthEvents);                
                break;
        }
    }

    addEvent(){
        this.handleAdd();
    }

    removeEvent(i) {
        const monthEvents = this.state.selectedMonthEvents.slice();

        let index = i;

        if (index !== -1) {
            monthEvents.splice(index, 1);
        } else {
            alert("No events to remove on this day!");
        }

        this.setState({
            selectedMonthEvents: monthEvents
        });
        this.updateLocalStorage(monthEvents);
    }

    initialiseEvents(){
        const monthEvents = this.state.selectedMonthEvents;

        let allEvents = [];

        let event1 = {
            title: "Press the Add button and enter a name for your event. P.S you can delete me by pressing the button!",
            date: moment(),
            dynamic: false
        };

        let event2 = {
            title: "Event 2 - Meeting",
            date: moment().startOf("day").subtract(2, "d").add(2, "h"),
            dynamic: false
        };

        let event3 = {
            title: "Event 3 - Cinema",
            date: moment().startOf("day").subtract(7, "d").add(18, "h"),
            dynamic: false
        };

        let event4 = {
            title: "Event 4 - Theater",
            date: moment().startOf("day").subtract(16, "d").add(20, "h"),
            dynamic: false
        };

        let event5 = {
            title: "Event 5 - Drinks",
            date: moment().startOf("day").subtract(2, "d").add(12, "h"),
            dynamic: false
        };

        let event6 = {
            title: "Event 6 - Diving",
            date: moment().startOf("day").subtract(2, "d").add(13, "h"),
            dynamic: false
        };

        let event7 = {
            title: "Event 7 - Tennis",
            date: moment().startOf("day").subtract(2, "d").add(14, "h"),
            dynamic: false
        };

        let event8 = {
            title: "Event 8 - Swimmming",
            date: moment().startOf("day").subtract(2, "d").add(17, "h"),
            dynamic: false
        };

        let event9 = {
            title: "Event 9 - Chilling",
            date: moment().startOf("day").subtract(2, "d").add(16, "h"),
            dynamic: false
        };

        let event10 = {
            title:
                "Hello World",
            date: moment().startOf("day").add(5, "h"),
            dynamic: false
        };

        allEvents.push(event1, event2, event3, event4, event5, event6,
            event7, event8, event9, event10);

        for (let i = 0; i < allEvents.length; i++){
            monthEvents.push(allEvents[i]);
        }

        this.setState({
            selectedMonthEvents: monthEvents
        });
    }

    render(){
        const showEvents = this.state.showEvents;

        if (showEvents) {
            return (
                <View style={styles.mainCalendar}>
                    <View style={styles.calendarHeader}>
                        <View style={[styles.titleHeader, styles.row]}>
                            {this.renderDayLabel()}
                        </View>
                        <View style={[styles.buttonContainer, styles.row]}>
                            <TouchableHighlight onPress={this.showCalendar}>
                                <Text>
                                    <FontAwesome>
                                        {Icons.angleLeft}
                                    </FontAwesome>
                                </Text>
                            </TouchableHighlight>
                            <TouchableHighlight onPress={this.addEvent}>
                                <Text>
                                    <FontAwesome>
                                        {Icons.plusSquare}
                                    </FontAwesome>
                                </Text>
                            </TouchableHighlight>
                        </View>
                    </View>
                    <Events
                        selectedMonth={this.state.selectedMonth}
                        selectedDay={this.state.selectedDay}
                        selectedMonthEvents={this.state.selectedMonthEvents}
                        removeEvent={i => this.removeEvent(i)}
                    />
                </View>
            );
        } else {
            return (
                <View style={styles.mainCalendar}>
                    <View style={styles.calendarHeader}>
                        <View style={[styles.titleHeader, styles.row]}>
                            <TouchableHighlight onPress={this.previous}>
                                <Text onPress={this.previous}>
                                    <FontAwesome>
                                        {Icons.angleLeft}
                                    </FontAwesome>
                                </Text>
                            </TouchableHighlight>
                            <View style={[styles.headerText, styles.box]}>
                                {this.renderTodayLabel()}
                                {this.renderMonthLabel()}
                            </View>
                            <TouchableHighlight onPress={this.next}>
                                <Text>
                                    <FontAwesome>
                                        {Icons.angleRight}
                                    </FontAwesome>
                                </Text>
                            </TouchableHighlight>
                        </View>
                        <DayNames />
                    </View>
                    <View style={styles.daysContainer}>
                        {this.renderWeeks()}
                    </View>
                </View>
            );
        }
    }
}
