import React, { createContext, useState } from 'react';

export const CalendarContext = createContext();

export const CalendarProvider = ({ children }) => {
  const [events, setEvents] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);
  const [editEventIndex, setEditEventIndex] = useState(null);

  const addEvent = (event) => {
    if (editEventIndex !== null) {
      const updatedEvents = [...events];
      updatedEvents[editEventIndex] = event;
      setEvents(updatedEvents);
      setEditEventIndex(null);
    } else {
      setEvents([...events, event]);
    }
  };

  const deleteEvent = (index) => {
    const updated = [...events];
    updated.splice(index, 1);
    setEvents(updated);
  };

  const editEvent = (index) => {
    setEditEventIndex(index);
  };

  return (
    <CalendarContext.Provider value={{
      events,
      selectedDate,
      setSelectedDate,
      addEvent,
      deleteEvent,
      editEvent,
      editEventIndex,
      setEditEventIndex,
    }}>
      {children}
    </CalendarContext.Provider>
  );
};
