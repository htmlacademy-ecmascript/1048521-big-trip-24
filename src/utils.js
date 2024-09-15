import dayjs from 'dayjs';
const DATE_FORMAT = 'MMMM D';


function humanizeTaskDueDate(dueDate) {
  return dueDate ? dayjs(dueDate).format(DATE_FORMAT) : '';
}

export {humanizeTaskDueDate};
