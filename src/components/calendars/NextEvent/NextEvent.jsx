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
  firstEvent,
} from '../calendarUtils';

import { renderEventContent } from '../EventContent';

import styles from './NextEvent.module.scss';

import '@fullcalendar/common/main.css';
import '@fullcalendar/list/main.css';

const NextEvent = () => (
  <div className={styles.nextEvent}>
    <FullCalendar
      duration={{ days: 30 }}
      timeZone={timeZone}
      plugins={[googleCalendarPlugin, listPlugin]}
      googleCalendarApiKey={googleCalendarApiKey}
      events={{
        googleCalendarId,
        success: firstEvent,
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

export default NextEvent;
