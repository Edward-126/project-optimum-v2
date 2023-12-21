export default {
  name: 'programs',
  title: 'Programs',
  type: 'document',
  fields: [
    {
      name: 'order',
      title: 'Order',
      type: 'number',
    },
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'imgUrl',
      title: 'ImgUrl',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'desc',
      title: 'Description',
      type: 'string',
    },
    {
      name: 'day',
      title: 'Day',
      type: 'string',
    },
  ],
}
