import React, { useState } from 'react';
import { startOfMonth, endOfMonth, eachDayOfInterval, format, addMonths, subMonths } from 'date-fns';
import DayCell from './DayCell';

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const days = eachDayOfInterval({
    start: startOfMonth(currentDate),
    end: endOfMonth(currentDate),
  });

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", padding: "1rem" }}>
        <button onClick={() => setCurrentDate(subMonths(currentDate, 1))}>←</button>
        <h2>{format(currentDate, "MMMM yyyy")}</h2>
        <button onClick={() => setCurrentDate(addMonths(currentDate, 1))}>→</button>
      </div>
      <div className="calendar-grid">
        {days.map(day => (
          <DayCell key={day} date={day} />
        ))}
      </div>
    </div>
  );
};

export default Calendar;
