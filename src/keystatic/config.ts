import { config, fields } from '@keystatic/core';

export default config({
  storage: {
    kind: 'local'
  },
  collections: {
    posts: {
      label: 'Articles',
      slugField: 'slug',
      path: 'content/articles/*',
      format: { contentField: 'content' },
      schema: {
        slug: fields.slug({ name: { label: 'Slug' } }),
        title: fields.text({ label: 'Title', validation: { isRequired: true } }),
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
        content: fields.markdoc({ label: 'Content' })
      }
    }
  }
});
