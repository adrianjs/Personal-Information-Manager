import React from 'react';
import {CalendarList} from 'react-native-calendars';

/*
    Main component of the Calendar view.
    Uses a CalendarList, which is a (semi-)infinitely scrolling calendar.
    This calendar is used in place of the custom one in the web project because of time (and proficiency) constraints.
 */

export default class ScrollableCalendar extends React.Component {
    render(){
        return (
            <CalendarList
                scrollEnabled={true}
                //Set first day of week to Monday
                firstDay={1}
                style={{
                    borderWidth: 1,
                    height: 350,
                }}
                theme={{
                    backgroundColor: '#ffffff',
                    calendarBackground: '#ffffff',
                    textSectionTitleColor: 'darkgray',
                    todayTextColor: 'black',
                    dayTextColor: '#00bcd4',
                    monthTextColor: 'black',
                    textDayFontSize: 16,
                    textMonthFontSize: 16,
                    textDayHeaderFontSize: 16
                }}
                //How many months into the past and future you can scroll
                pastScrollRange={24}
                futureScrollRange={24}
            />
        );
    }
}