import React, { useContext, useState } from 'react';
import { CalendarContext } from '../context/CalendarContext';

const SearchBar = () => {
  const { events } = useContext(CalendarContext);
  const [query, setQuery] = useState('');

  const filtered = events.filter(e =>
    e.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search events..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      {query && (
        <ul>
          {filtered.map((e, i) => (
            <li key={i}>{e.title} ({e.date})</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
