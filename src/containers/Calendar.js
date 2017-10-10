import React from 'react';
import moment from 'moment';
import Events from '../components/Events'
import DayNames from "../components/DayNames";
import './Calendar.css';
import Week from "../components/Week";

/*
TODO: Add modal to add events (Modal popup when pressing to add event instead of browser popup)
TODO: Add all modal functions necessary
TODO: Add event handling though modal
 */

export default class Calendar extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            selectedMonth: moment(),
            selectedDay: moment().startOf("day"),
            selectedMonthEvents: [],
            showEvents: false
        };

        this.previous = this.previous.bind(this);
        this.next = this.next.bind(this);
        this.addEvent = this.addEvent.bind(this);
        this.showCalendar = this.showCalendar.bind(this);
        this.goToCurrentMonthView = this.goToCurrentMonthView.bind(this);

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
            <span className="box month-label">
                {currentMonthView.format("MMMM YYYY")}
            </span>
        );
    }

    renderDayLabel(){
        const currentSelectedDay = this.state.selectedDay;

        return (
            <span className="box month-label">
                {currentSelectedDay.format("DD MMMM YYYY")}
            </span>
        );
    }

    renderTodayLabel(){
        return(
            <span className="box today-label" onClick={this.goToCurrentMonthView}>
                Today
            </span>
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
                break;
        }
    }

    //TODO: Add event handling though modal, with possibility for setting time
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

    }

    initialiseEvents(){
        const monthEvents = this.state.selectedMonthEvents;

        let allEvents = [];

        let event1 = {
            title: "Press the Add button and enter a name for your event. P.S you can delete me by pressing me!",
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
                <section className="main-calendar">
                    <header className="calendar-header">
                        <div className="row title-header">
                            {this.renderDayLabel()}
                        </div>
                        <div className="row button-container">
                            <i
                                className="box arrow fa fa-angle-left"
                                onClick={this.showCalendar}
                            />
                            <i
                                className="box event-button fa fa-plus-square"
                                onClick={this.addEvent}
                                />
                        </div>
                    </header>
                    <Events
                        selectedMonth={this.state.selectedMonth}
                        selectedDay={this.state.selectedDay}
                        selectedMonthEvents={this.state.selectedMonthEvents}
                        removeEvent={i => this.removeEvent(i)}
                    />
                </section>
            );
        } else {
            return (
                <section className="main-calendar">
                    <header className="calendar-header">
                        <div className="row title-header">
                            <i
                                className="box arrow fa fa-angle-left"
                                onClick={this.previous}
                            />
                            <div className="box header-text">
                                {this.renderTodayLabel()}
                                {this.renderMonthLabel()}
                            </div>
                            <i
                                className="box arrow fa fa-angle-right"
                                onClick={this.next}
                            />
                        </div>
                        <DayNames />
                    </header>
                    <div className="days-container">
                        {this.renderWeeks()}
                    </div>
                </section>
            );
        }
    }
}
