module.exports = {
  schema: ['src/graphql/schema.graphql'],
  documents: ['src/**/*.{graphql,js,ts,jsx,tsx}'],
  extensions: {
    endpoints: {
      default: {
        url: 'http://localhost:4000/graphql',
      },
    },
  },
}
