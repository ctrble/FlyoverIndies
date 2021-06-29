import React from 'react';
import EventContent from './EventContent';

// Ready made custom renderer for fullcalendar
export const renderEventContent = (eventInfo) => {
  const {
    event: {
      url,
      title,
      extendedProps: { description, location },
    },
    isToday,
  } = eventInfo;

  return (
    <EventContent
      url={url}
      title={title}
      description={description}
      location={location}
      isToday={isToday}
    />
  );
};

export default EventContent;
