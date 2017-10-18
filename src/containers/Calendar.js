import React from 'react';
import moment from 'moment';
import Events from '../components/calendar/Events'
import DayNames from "../components/calendar/DayNames";
import '../assets/Calendar.css';
import Week from "../components/calendar/Week";

/*
    Main render class of the Calendar component.
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

        var events = localStorage.getItem('savedEvents');
        if (events) {
            this.setState({selectedMonthEvents: JSON.parse(events)});
        }
        this.initialiseEvents();
    }

    //Change month view to previous month
    previous() {
        const currentMonthView = this.state.selectedMonth;

        this.setState({
            selectedMonth: currentMonthView.subtract(1, 'month')
        });
    }

    //Change month view to next month
    next() {
        const currentMonthView = this.state.selectedMonth;

        this.setState({
            selectedMonth: currentMonthView.add(1, 'month')
        });
    }

    //Function for selecting a specific day, sending you into the events for the day
    select(day){
        this.setState({
          selectedMonth: day.date,
          selectedDay: day.date.clone(),
          showEvents: true
        });
    }

    //Changes month view to the month that the current date is in
    goToCurrentMonthView(){

        this.setState({
            selectedMonth: moment()
        });
    }

    //Function that displays calendar after exiting event screen
    showCalendar(){
        this.setState({
            selectedMonth: this.state.selectedMonth,
            selectedDay: this.state.selectedDay,
            showEvents: false
        });
    }

    //Label for current month. i.e. displays "October 2017"
    renderMonthLabel(){
        const currentMonthView = this.state.selectedMonth;

        return (
            <span className="box month-label">
                {currentMonthView.format("MMMM YYYY")}
            </span>
        );
    }

    //Label for current day in events screen. i.e. displays "11 October 2017
    renderDayLabel(){
        const currentSelectedDay = this.state.selectedDay;

        return (
            <span className="box month-label">
                {currentSelectedDay.format("DD MMMM YYYY")}
            </span>
        );
    }

    //Label displaying "Today". Clicking it will change month view to current month
    renderTodayLabel(){
        return(
            <span className="box today-label" onClick={this.goToCurrentMonthView}>
                Today
            </span>
        );
    }

    //Function for rendering weeks with days and dates in correct order.
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

    //Function for adding events. Uses browser prompt to give event name
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

    //Function attached to "Add event"-button. Simply throws handleAdd.
    addEvent(){
        this.handleAdd();
    }

    //Function for removing events from day. Takes "i" as key of event being deleted.
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

    //Function for filling calendar with dummy data
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

    //Render function for calendar. Uses several components to make a complete calendar.
    //Two different views depending on state of showEvents.
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
