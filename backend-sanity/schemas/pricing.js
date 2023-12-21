export default {
  name: 'pricing',
  title: 'Pricing',
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
      name: 'desc',
      title: 'Description',
      type: 'string',
    },
    {
      name: 'duration',
      title: 'Duration',
      type: 'string',
    },
    {
      name: 'admission',
      title: 'Admission',
      type: 'string',
    },
    {
      name: 'gentsg',
      title: 'Gents-Gym',
      type: 'string',
    },
    {
      name: 'gentscg',
      title: 'Gents-Cardio-Gym',
      type: 'string',
    },
    {
      name: 'ladies',
      title: 'Ladies-Cardio-Gym',
      type: 'string',
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [
        {
          name: 'tag',
          title: 'Tag',
          type: 'string',
        },
      ],
    },
    {
      name: 'isPopular',
      type: 'boolean',
      title: 'Polular Plan',
    },
  ],
}
