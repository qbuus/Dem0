export default {
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    {
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [{type: 'image'}],
      options: {
        hotspot: true,
      },
    },
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 90,
      },
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number',
    },
    {
      name: 'detailsmain',
      title: 'Detailsmain',
      type: 'string',
    },
    {
      name: 'title1',
      title: 'Title1',
      type: 'string',
    },
    {
      name: 'details1',
      title: 'Details1',
      type: 'string',
    },
    {
      name: 'title2',
      title: 'Title2',
      type: 'string',
    },
    {
      name: 'details2',
      title: 'Details2',
      type: 'string',
    },
    {
      name: 'alt',
      title: 'Alt',
      type: 'string',
    },
    {
      name: 'fats',
      title: 'Fats',
      type: 'string',
    },
    {
      name: 'carbs',
      title: 'Carbs',
      type: 'string',
    },
    {
      name: 'protein',
      title: 'Protein',
      type: 'string',
    },
  ],
}
