import React from 'react';
import { CSSTransitionGroup } from 'react-transition-group';
import {RaisedButton} from "material-ui";

export default class Events extends React.Component {
    render(){
        const currentSelectedDay = this.props.selectedDay;
        const monthEvents = this.props.selectedMonthEvents;
        const removeEvent = this.props.removeEvent;

        const monthEventsRendered = monthEvents.map((event, i) => {
            return(
                <div
                    key={i}
                    id={i}
                    className="event-container"
                >
                    <CSSTransitionGroup
                        component="div"
                        className="animated-title"
                        transitionName="time"
                        transitionAppear={true}
                        transitionAppearTimeout={500}
                        transitionEnterTimeout={500}
                        transitionLeaveTimeout={500}
                    >
                        <div className="event-title event-attribute">
                            {event.title}
                        </div>
                    </CSSTransitionGroup>
                    <CSSTransitionGroup
                        component="div"
                        className="animated-btn"
                        transitionName="title"
                        transitionAppear={true}
                        transitionAppearTimeout={500}
                        transitionEnterTimeout={500}
                        transitionLeaveTimeout={500}
                    >
                        <div className="event-title event-attribute">
                            <RaisedButton secondary={true} onClick={() => removeEvent(i)}>Delete</RaisedButton>
                        </div>
                    </CSSTransitionGroup>
                </div>
            );
        });

        const dayEventsRendered = [];

        for (let i = 0; i < monthEventsRendered.length; i++){
            if (monthEvents[i].date.isSame(currentSelectedDay, "day")) {
                dayEventsRendered.push(monthEventsRendered[i]);
            }
        }

        return (
            <div className="day-events">
                {dayEventsRendered}
            </div>
        );
    }
}
