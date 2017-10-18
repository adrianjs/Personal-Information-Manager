import React from 'react';
import {CalendarList} from 'react-native-calendars';

export default class ScrollableCalendar extends React.Component {
    render(){
        return (
            <CalendarList
                scrollEnabled={true}
                firstDay={1}
                style={{
                    borderWidth: 1,
                    borderColor: "steelblue",
                    height: 350,
                    backgroundColor: "powderblue",
                }}
                theme={{
                    selectedDayBackgroundColor: "steelblue",
                    calendarBackground: "powderblue", 
                    selectedDayTextColor: "steelblue",
                    todayTextColor: "#00adf5",
                    dayTextColor: "#2d4150",
                }}
                pastScrollRange={24}
                futureScrollRange={24}
            />
        );
    }
}