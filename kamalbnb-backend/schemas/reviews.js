export default {
    name: 'review',
    title: 'Review',
    type: 'object',
    fields: [
      {
        name: 'reviewDescription',
        title: 'Review Description',
        type: 'string',
      },
      {
        name: 'traveller',
        title: 'Traveller',
        type: 'traveller',
      },
      {
        name: 'rating',
        title: 'Rating',
        type: 'string',
        options: {
          list: [
            { title: '⭐⭐⭐⭐⭐', value: '⭐⭐⭐⭐⭐' },
            { title: '⭐⭐⭐⭐', value: '⭐⭐⭐⭐' },
            { title: '⭐⭐⭐', value: '⭐⭐⭐' },
            { title: '⭐⭐', value: '⭐⭐' },
            { title: '⭐', value: '⭐' },
          ],
          layout: 'radio',
        },
      },
    ],
    preview: {
      select: { title: 'property', rating: 'rating' },
    },
  }