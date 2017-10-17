import React from 'react';
import {Text, View} from "react-native";
import {styles} from './Calendar';

export default class DayNames extends React.Component {
    render() {
        return (
            <View style={[styles.daysHeader, styles.row]}>
                <View style={styles.box}><Text>Mon</Text></View>
                <View style={styles.box}><Text>Tue</Text></View>
                <View style={styles.box}><Text>Wen</Text></View>
                <View style={styles.box}><Text>Thu</Text></View>
                <View style={styles.box}><Text>Fri</Text></View>
                <View style={styles.box}><Text>Sat</Text></View>
                <View style={styles.box}><Text>Sun</Text></View>
            </View>
        );
    }
}