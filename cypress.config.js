const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "mbbg69",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    }
  },
  env: {
    CYPRESS_SECRET_TOKEN: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiJjNDAxNDU4OS05MTRlLTRhOGUtYTgyYi1iYmQzYzMzNzFhZmIiLCJlbSI6ImFkbWluLXBvcnRhbEBlbWFpbC5jb20iLCJ1biI6ImFkbWluLXBvcnRhbCIsImZuIjoiQWRtaW4gSG9zcGl0YWxpdHkiLCJpYXQiOjE2OTg5MTQ5NzQsImV4cCI6MTY5OTAwMTM3NH0.qhfH7REKN1p97HYexwQxqDwc1C9Xq9DbzpXcxWlT1tA',
  },
});
