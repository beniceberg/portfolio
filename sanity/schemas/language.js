export default {
  name: 'language',
  title: 'Languages',
  type: 'document',
  fields: [
    {
      name: 'key',
      title: 'Language Code',
      type: 'string',
      validation: Rule => [
        Rule.length(2).warning('Should be exactly 2 letters'),
        Rule.lowercase().warning('Should be lower case')
      ]
    },
    {
      name: 'value',
      title: 'Language',
      type: 'string',
    },
    {
      name: 'flag',
      title: 'Flag',
      type: 'string',
    },
  ],
}
