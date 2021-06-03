import React from 'react';
import FullCalendar from '@fullcalendar/react';
import listPlugin from '@fullcalendar/list';
import googleCalendarPlugin from '@fullcalendar/google-calendar';

import {
  googleCalendarApiKey,
  googleCalendarId,
  timeZone,
  titleFormat,
  listDayFormat,
  handleEventClick,
} from '../calendarUtils';

import { renderEventContent } from '../EventContent';

import styles from './NextEvent.module.scss';

import '@fullcalendar/common/main.css';
import '@fullcalendar/list/main.css';

const NextEvent = () => {
  const getFirstEvent = (content) => content.slice(0, 1);

  return (
    <div className={styles.calendar}>
      <FullCalendar
        duration={{ months: 1 }}
        timeZone={timeZone}
        plugins={[googleCalendarPlugin, listPlugin]}
        googleCalendarApiKey={googleCalendarApiKey}
        events={{
          googleCalendarId,
          success: getFirstEvent,
        }}
        eventClick={handleEventClick}
        eventContent={renderEventContent}
        height="100%"
        contentHeight="auto"
        headerToolbar={false}
        stickyHeaderDates={false}
        initialView="list"
        titleFormat={titleFormat}
        listDaySideFormat={false}
        listDayFormat={listDayFormat}
      />
    </div>
  );
};

export default NextEvent;
