import React from 'react';
import {Text, View} from "react-native";
import {Button} from "react-native-material-ui";
import {styles} from './Calendar';

export default class Events extends React.Component {
    render(){
        const currentSelectedDay = this.props.selectedDay;
        const monthEvents = this.props.selectedMonthEvents;
        const removeEvent = this.props.removeEvent;

        const monthEventsRendered = monthEvents.map((event, i) => {
            return(
                <View
                    key={i}
                    id={i}
                    style={styles.eventContainer}
                >
                    <View style={styles.eventAttribute}>
                        <Text>
                            {event.title}
                        </Text>
                    </View>
                    <View style={styles.eventAttribute}>
                        <Button accent text="Delete" onClick={() => removeEvent(i)} />
                    </View>
                </View>
            );
        });

        const dayEventsRendered = [];

        for (let i = 0; i < monthEventsRendered.length; i++){
            if (monthEvents[i].date.isSame(currentSelectedDay, "day")) {
                dayEventsRendered.push(monthEventsRendered[i]);
            }
        }

        return (
            <View style={styles.dayEvents}>
                <Text>
                    {dayEventsRendered}
                </Text>
            </View>
        );
    }
}
