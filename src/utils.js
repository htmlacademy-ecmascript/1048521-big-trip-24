import dayjs from 'dayjs';
const DATE_FORMAT = 'MMM D';
const TIME_FORMAT = 'HH:mm';


function humanizeTaskDueDate(dueDate) {
  return dueDate ? dayjs(dueDate).format(DATE_FORMAT) : '';
}

function showTripDuration(dueDate) {
  return dueDate ? dayjs(dueDate).format(TIME_FORMAT) : '';
}

function calculateTripDuration(start, end) {
  const duration = dayjs(end).diff(dayjs(start), 'minute');
  const hours = Math.floor(duration / 60);
  const minutes = duration % 60;
  return `${hours}H ${minutes}M`;
}

export {humanizeTaskDueDate, showTripDuration, calculateTripDuration};
