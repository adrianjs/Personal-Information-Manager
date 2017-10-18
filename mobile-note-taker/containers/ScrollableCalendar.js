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
                pastScrollRange={24}
                futureScrollRange={24}
            />
        );
    }
}