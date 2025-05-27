import React, { useState, useEffect } from 'react';
import './index.css';
import dayjs from 'dayjs';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [events, setEvents] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [eventToEdit, setEventToEdit] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const stored = localStorage.getItem('calendarEvents');
    if (stored) {
      const parsedEvents = JSON.parse(stored).map(ev => ({
        ...ev,
        start: new Date(ev.start),
        end: new Date(ev.end),
      }));
      setEvents(parsedEvents);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('calendarEvents', JSON.stringify(events));
  }, [events]);

  const startOfMonth = dayjs(currentDate).startOf('month');
  const endOfMonth = dayjs(currentDate).endOf('month');
  const startDate = startOfMonth.startOf('week');
  const endDate = endOfMonth.endOf('week');

  const calendarDays = [];
  let day = startDate;
  while (day.isBefore(endDate)) {
    calendarDays.push(day);
    day = day.add(1, 'day');
  }

  const goToNextMonth = () => setCurrentDate(dayjs(currentDate).add(1, 'month').toDate());
  const goToPrevMonth = () => setCurrentDate(dayjs(currentDate).subtract(1, 'month').toDate());

  const openModalForDate = (date) => {
    setSelectedDate(date.toDate());
    setEventToEdit(null);
    setShowModal(true);
  };

  const openModalForEvent = (event) => {
    setEventToEdit(event);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setEventToEdit(null);
  };

  const handleSave = (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const start = new Date(form.start.value);
    const end = new Date(form.end.value);
    const description = form.description.value;
    const color = form.color.value;
    const recurrence = form.recurrence.value;

    if (eventToEdit) {
      setEvents(events.map(ev => ev.id === eventToEdit.id ? { ...ev, title, start, end, color, recurrence, description } : ev));
    } else {
      setEvents([...events, { id: uuidv4(), title, start, end, color, recurrence, description }]);
    }

    closeModal();
  };

  const handleDelete = (id) => {
    setEvents(events.filter(ev => ev.id !== id));
    closeModal();
  };

  const getEventsForDate = (date) => {
    return events.filter(ev => {
      const startDate = dayjs(ev.start).startOf('day');
      const endDate = dayjs(ev.end).startOf('day');
      const current = dayjs(date).startOf('day');

      if (current.isBefore(startDate) || current.isAfter(endDate)) {
        return false;
      }

      switch (ev.recurrence) {
        case 'daily':
          return true;
        case 'weekly':
          return current.day() === startDate.day();
        case 'monthly':
          return current.date() === startDate.date();
        default:
          return current.isSame(startDate, 'day');
      }
    });
  };

  return (
    <div className="calendar-container">
      <h1> Event Calendar</h1>

 <label>Search Events </label>
      <input
        type="text"
        placeholder="Search events..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="search-input"
      />

      {searchQuery && (
        <div className="search-results">
          <h3>Search Results:</h3>
          <ul>
            {events.filter(ev =>
              ev.title.toLowerCase().includes(searchQuery.toLowerCase())
            ).map(ev => (
              <li key={ev.id}>
                <strong>{ev.title}</strong> ({dayjs(ev.start).format('MMM D')} - {dayjs(ev.end).format('MMM D')})
                <button onClick={() => openModalForEvent(ev)}>Edit</button>
                <button onClick={() => handleDelete(ev.id)}>Delete</button>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="calendar-header">
        <button onClick={goToPrevMonth}>←</button>
        <h2>{dayjs(currentDate).format('MMMM YYYY')}</h2>
        <button onClick={goToNextMonth}>→</button>
      </div>

      <div className="calendar-weekdays">
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
          <div key={day} className="weekday">{day}</div>
        ))}
      </div>

      <div className="calendar-grid">
        {calendarDays.map(day => (
          <div
            key={day.format()}
            className={`calendar-cell ${day.isSame(new Date(), 'day') ? 'today' : ''}`}
            onClick={() => openModalForDate(day)}
          >
            <div className="date-number">{day.date()}</div>
            {getEventsForDate(day.toDate()).map(event => (
              <div
                key={event.id}
                className="event"
                style={{ backgroundColor: event.color }}
                onClick={(e) => {
                  e.stopPropagation();
                  openModalForEvent(event);
                }}
              >
                {event.title}
              </div>
            ))}
          </div>
        ))}
      </div>

      {showModal && (
        <div className="modal">
          <form className="modal-content" onSubmit={handleSave}>
            <h2>{eventToEdit ? 'Edit Event' : 'Add Event'}</h2>

            <input name="title" defaultValue={eventToEdit?.title} placeholder="Title" required />

            <label>Start Date</label>
            <input
              type="date"
              name="start"
              defaultValue={eventToEdit ? dayjs(eventToEdit.start).format('YYYY-MM-DD') : ''}
              required
            />

            <label>End Date</label>
            <input
              type="date"
              name="end"
              defaultValue={eventToEdit ? dayjs(eventToEdit.end).format('YYYY-MM-DD') : ''}
              required
            />

            <label>Description</label>
            <textarea
              name="description"
              placeholder="Add your event description (optional)"
              defaultValue={eventToEdit?.description || ''}
            />

            <label>Color</label>
            <input type="color" name="color" defaultValue={eventToEdit?.color || '#007bff'} />

            <label>Recurrence</label>
            <select name="recurrence" defaultValue={eventToEdit?.recurrence || 'none'}>
              <option value="none">None</option>
              <option value="daily">Daily</option>
              <option value="weekly">Weekly</option>
              <option value="monthly">Monthly</option>
            </select>

            <div className="modal-actions">
              <button type="submit">Save</button>
              <button type="button" onClick={closeModal}>Cancel</button>
              {eventToEdit && (
                <button type="button" onClick={() => handleDelete(eventToEdit.id)}>Delete</button>
              )}
            </div>
          </form>
        </div>
      )}
    </div>
  );
}

export default App;
