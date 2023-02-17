export default {
  name: 'article',
  title: 'article',
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
      name: 'date',
      title: 'Date',
      type: 'date',
    },
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'subject',
      title: 'Subject',
      type: 'string',
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'maintext',
      title: 'Maintext',
      type: 'string',
    },
    {
      name: 'subtitle',
      title: 'SubTitle',
      type: 'string',
    },
    {
      name: 'subtext',
      title: 'Subtext',
      type: 'string',
    },
    {
      name: 'subtitle2',
      title: 'SubTitle2',
      type: 'string',
    },
    {
      name: 'subtext2',
      title: 'Subtext2',
      type: 'string',
    },
    {
      name: 'subtitle3',
      title: 'SubTitle3',
      type: 'string',
    },
    {
      name: 'subtext3',
      title: 'Subtext3',
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
  ],
}
