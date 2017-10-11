import React from 'react';
import {Button} from 'react-bootstrap';
import { CSSTransitionGroup } from 'react-transition-group';

export default class Events extends React.Component {
    constructor(props) {
        super(props);

        this.keyCount = 0;
        this.getKey = this.getKey.bind(this);
    }

    getKey(){
        return this.keyCount++;
    }

    render(){
        const currentSelectedDay = this.props.selectedDay;
        const monthEvents = this.props.selectedMonthEvents;
        const removeEvent = this.props.removeEvent;

        const monthEventsRendered = monthEvents.map((event, i) => {
            return(
                <div
                    key={this.getKey()}
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
                            <Button bsSize="small" bsStyle="danger" onClick={() => removeEvent(i)}>Delete</Button>
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
