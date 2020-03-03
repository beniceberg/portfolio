export default {
  name: 'dateInterval',
  title: 'Date Interval',
  type: 'object',
  fields: [
    {
      name: 'start_date',
      title: 'Start Date',
      // type: 'string',
      type: 'date',
      options: {
        dateFormat: 'MM/YYYY',
        calendarTodayLabel: 'Today',
      },
    },
    {
      name: 'end_date',
      title: 'End Date',
      // type: 'string',
      type: 'date',
      options: {
        dateFormat: 'MM/YYYY',
        calendarTodayLabel: 'Today',
      },
    },
  ],
}
