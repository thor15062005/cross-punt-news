import { collection, config, fields } from '@keystatic/core';

export default config({
  storage: {
    kind: 'local'
  },
  collections: {
    posts: collection({
      label: 'Articles',
      slugField: 'title',
      path: 'content/articles/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Title', validation: { isRequired: true } } }),
        summary: fields.text({ label: 'Summary', multiline: true, validation: { isRequired: true } }),
        author: fields.text({ label: 'Author', defaultValue: 'Redactie Cross Punt' }),
        category: fields.select({
          label: 'Category',
          options: [
            { label: 'Nieuws', value: 'Nieuws' },
            { label: 'Analyse', value: 'Analyse' },
            { label: 'Onderzoek', value: 'Onderzoek' }
          ],
          defaultValue: 'Nieuws'
        }),
        publishedAt: fields.date({ label: 'Published at', defaultValue: { kind: 'today' } }),
        readTime: fields.integer({ label: 'Reading time in minutes', defaultValue: 1, validation: { min: 1, isRequired: true } }),
        hero: fields.url({ label: 'Cover image URL' }),
        content: fields.markdoc({ label: 'Content' })
      }
    })
  }
});
