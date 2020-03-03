export default {
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    {
      name: 'company',
      title: 'Company',
      type: 'string'
    },
    {
      name: 'role',
      title: 'Role',
      type: 'string'
    },
    {
      name: 'link',
      title: 'Link',
      type: 'string'
    },
    {
      name: 'dateInterval',
      title: 'Date Interval',
      type: 'dateInterval',
    },
    {
      name: 'location',
      title: 'Location',
      type: 'string'
    },
    {
      name: 'tasks',
      title: 'Tasks',
      type: 'array',
      of: [{ type: 'task' }],
    }
  ]
}
