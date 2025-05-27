import React, { useContext } from 'react';
import { CalendarContext } from '../context/CalendarContext';

const DayCell = ({ date }) => {
  const {
    events,
    setSelectedDate,
    deleteEvent,
    editEvent,
  } = useContext(CalendarContext);

  const dayEvents = events
    .map((event, index) => ({ ...event, index }))
    .filter(event => event.date === date);

  return (
    <div className="day-cell" onClick={() => setSelectedDate(date)}>
      <p>{new Date(date).getDate()}</p>
      {dayEvents.map(({ title, index }) => (
        <div key={index} className="event-item">
          {title}
          <button onClick={(e) => {
            e.stopPropagation();
            editEvent(index);
            setSelectedDate(date);
          }}>Edit</button>
          <button onClick={(e) => {
            e.stopPropagation();
            deleteEvent(index);
          }}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default DayCell;
