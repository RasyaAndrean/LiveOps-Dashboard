import { useState } from 'react';
import './EventManager.css';

const EventManager = () => {
  const [events, setEvents] = useState([
    {
      id: 1,
      name: 'Summer Festival',
      type: 'Drop Rate x2',
      startDate: '2023-07-01',
      endDate: '2023-07-31',
      active: true,
    },
    {
      id: 2,
      name: 'Stamina Sale',
      type: 'Stamina -50%',
      startDate: '2023-06-15',
      endDate: '2023-06-30',
      active: false,
    },
  ]);

  const [newEvent, setNewEvent] = useState({
    name: '',
    type: 'Drop Rate x2',
    startDate: '',
    endDate: '',
  });

  const handleCreateEvent = () => {
    if (newEvent.name && newEvent.startDate && newEvent.endDate) {
      const event = {
        id: events.length + 1,
        ...newEvent,
        active: false,
      };
      setEvents([...events, event]);
      setNewEvent({
        name: '',
        type: 'Drop Rate x2',
        startDate: '',
        endDate: '',
      });
    }
  };

  const toggleEvent = id => {
    setEvents(
      events.map(event =>
        event.id === id ? { ...event, active: !event.active } : event
      )
    );
  };

  return (
    <div className="event-manager">
      <h2>Event Manager</h2>

      <div className="create-event-form">
        <h3>Create New Event</h3>
        <div className="form-group">
          <label>Event Name:</label>
          <input
            type="text"
            value={newEvent.name}
            onChange={e => setNewEvent({ ...newEvent, name: e.target.value })}
            placeholder="Enter event name"
          />
        </div>

        <div className="form-group">
          <label>Event Type:</label>
          <select
            value={newEvent.type}
            onChange={e => setNewEvent({ ...newEvent, type: e.target.value })}
          >
            <option value="Drop Rate x2">Drop Rate x2</option>
            <option value="Stamina -50%">Stamina -50%</option>
            <option value="New Gacha Pool">New Gacha Pool</option>
            <option value="Double EXP">Double EXP</option>
          </select>
        </div>

        <div className="form-group">
          <label>Start Date:</label>
          <input
            type="date"
            value={newEvent.startDate}
            onChange={e =>
              setNewEvent({ ...newEvent, startDate: e.target.value })
            }
          />
        </div>

        <div className="form-group">
          <label>End Date:</label>
          <input
            type="date"
            value={newEvent.endDate}
            onChange={e =>
              setNewEvent({ ...newEvent, endDate: e.target.value })
            }
          />
        </div>

        <button onClick={handleCreateEvent}>Create Event</button>
      </div>

      <div className="events-list">
        <h3>Active Events</h3>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Type</th>
              <th>Start Date</th>
              <th>End Date</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {events.map(event => (
              <tr key={event.id}>
                <td>{event.name}</td>
                <td>{event.type}</td>
                <td>{event.startDate}</td>
                <td>{event.endDate}</td>
                <td>{event.active ? 'Active' : 'Inactive'}</td>
                <td>
                  <button onClick={() => toggleEvent(event.id)}>
                    {event.active ? 'Deactivate' : 'Activate'}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EventManager;
