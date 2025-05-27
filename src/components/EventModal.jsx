import React, { useContext, useEffect, useState } from 'react';
import { CalendarContext } from '../context/CalendarContext';

const EventModal = ({ onClose }) => {
  const {
    selectedDate,
    addEvent,
    events,
    editEventIndex,
    setEditEventIndex
  } = useContext(CalendarContext);

  const [title, setTitle] = useState('');

  useEffect(() => {
    if (editEventIndex !== null) {
      setTitle(events[editEventIndex].title);
    }
  }, [editEventIndex, events]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const event = { title, date: selectedDate };
    addEvent(event);
    setTitle('');
    setEditEventIndex(null);
    onClose();
  };

  return (
    <div className="modal">
      <form onSubmit={handleSubmit}>
        <h3>{editEventIndex !== null ? 'Edit' : 'Add'} Event</h3>
        <input
          type="text"
          placeholder="Event title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <button type="submit">Save</button>
        <button type="button" onClick={onClose}>Cancel</button>
      </form>
    </div>
  );
};

export default EventModal;
