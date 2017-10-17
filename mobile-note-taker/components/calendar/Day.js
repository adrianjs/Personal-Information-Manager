import React from 'react';
import {Text, TouchableHighlight, View} from 'react-native';
import {styles} from './Calendar';

export default class Day extends React.Component {
    render(){
        let day = this.props.day;
        let selected = this.props.selected;
        let select = this.props.select;

        return (
            <TouchableHighlight onPress={() => select(day)}>
                <View
                    style={[styles.day, (day.isToday ? styles.today : ""), (day.isCurrentMonth ? "" : styles.differentMonth), (day.date.isSame(selected) ? styles.selected : ""), (day.hasEvents ? styles.dayWithEvent : "")]}
                >
                    <View style={styles.dayNumber}>
                        <Text>
                            {day.number}
                        </Text>
                    </View>
                </View>
            </TouchableHighlight>
        );
    }
}