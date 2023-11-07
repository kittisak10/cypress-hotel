const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "mbbg69",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    }
  },
  env: {
    CYPRESS_SECRET_TOKEN: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiJjNDAxNDU4OS05MTRlLTRhOGUtYTgyYi1iYmQzYzMzNzFhZmIiLCJlbSI6ImFkbWluLXBvcnRhbEBlbWFpbC5jb20iLCJ1biI6ImFkbWluLXBvcnRhbCIsImZuIjoiQWRtaW4gSG9zcGl0YWxpdHkiLCJpYXQiOjE2OTkzNDc2NTEsImV4cCI6MTY5OTQzNDA1MX0.8w74PdegsXQDgQ-j9Mw8EYxqOZlvoYW6iLWw3dbXU3M',
  },
});
