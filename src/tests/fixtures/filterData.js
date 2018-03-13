import moment from 'moment';

const earliestDate = moment(1488387600000); // April 1, 2017
const midDate = moment(1491062400000); // March 1, 2017
const latestDate = moment(1493654400000); // May 1, 2017
const now = moment();

const defaultFilters = {
  text: '',
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined
};

const uniqueFilters = {
  text: 'duck',
  sortBy: 'amount',
  startDate: midDate,
  endDate: latestDate
};

export { defaultFilters, uniqueFilters, earliestDate, midDate, latestDate, now };
