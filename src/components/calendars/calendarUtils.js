const googleCalendarApiKey = process.env.NEXT_PUBLIC_GOOGLE_API_KEY;

const googleCalendarId = '1o3frgsjo8jsfgreuq8d8nq9j0@group.calendar.google.com';

const timeZone = 'CST';

const titleFormat = {
  month: 'long',
  year: 'numeric',
  day: 'numeric',
};

// const listDayFormat = false;
const listDayFormat = {
  weekday: 'long',
  month: 'short',
  day: 'numeric',
};

// Also, actual link opening is handled in the calendar's eventClick
// see https://fullcalendar.io/docs/eventClick
const handleEventClick = (info) => {
  info.jsEvent.preventDefault();
  if (info.event.url) {
    window.open(info.event.url, '_blank', 'noopener noreferrer');
  }
};

export {
  googleCalendarApiKey,
  googleCalendarId,
  timeZone,
  titleFormat,
  listDayFormat,
  handleEventClick,
};
