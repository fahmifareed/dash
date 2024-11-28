import React from 'react';

interface Event {
  time: string;
  event: string;
}

interface EventsTableProps {
  events: Event[];
}

const EventsTable: React.FC<EventsTableProps> = ({ events }) => {
  return (
    <div className="bg-navy-800 rounded-lg p-4">
      <h2 className="text-gray-400 mb-4">EVENTS</h2>
      <div className="overflow-auto h-48">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-gray-400">
              <th className="text-left p-2">Time</th>
              <th className="text-left p-2">Event</th>
            </tr>
          </thead>
          <tbody>
            {events.map((event, index) => (
              <tr key={index} className="border-t border-gray-700">
                <td className="p-2">{event.time}</td>
                <td className="p-2">{event.event}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EventsTable;