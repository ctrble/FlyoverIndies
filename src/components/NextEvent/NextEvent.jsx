import React from 'react';
import PropTypes from 'prop-types';
import FullCalendar from '@fullcalendar/react';
import listPlugin from '@fullcalendar/list';
import googleCalendarPlugin from '@fullcalendar/google-calendar';

import EventContent from './EventContent';

import styles from './NextEvent.module.scss';

import '@fullcalendar/common/main.css';
import '@fullcalendar/list/main.css';

const NextEvent = ({ duration }) => {
  const renderEventContent = (eventInfo) => {
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

  const getFirstEvent = (content) => content.slice(0, 1);

  const handleEventClick = (info) => {
    info.jsEvent.preventDefault();
    if (info.event.url) {
      window.open(info.event.url, '_blank', 'noopener noreferrer');
    }
  };

  return (
    <div className={styles.calendar}>
      <FullCalendar
        duration={duration}
        timeZone="CST"
        plugins={[googleCalendarPlugin, listPlugin]}
        googleCalendarApiKey={process.env.NEXT_PUBLIC_GOOGLE_API_KEY}
        events={{
          googleCalendarId:
            '1o3frgsjo8jsfgreuq8d8nq9j0@group.calendar.google.com',
          success: getFirstEvent,
        }}
        eventClick={handleEventClick}
        eventContent={renderEventContent}
        height="100%"
        contentHeight="auto"
        headerToolbar={false}
        stickyHeaderDates={false}
        initialView="list"
        titleFormat={{
          month: 'long',
          year: 'numeric',
          day: 'numeric',
        }}
        listDaySideFormat={false}
        listDayFormat={{
          weekday: 'long',
          month: 'short',
          day: 'numeric',
        }}
      />
    </div>
  );
};

NextEvent.propTypes = {
  duration: PropTypes.objectOf(PropTypes.number),
};

NextEvent.defaultProps = {
  duration: { weeks: 2 },
};

export default NextEvent;
