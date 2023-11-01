const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "mbbg69",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    }
  },
  env: {
    CYPRESS_SECRET_TOKEN: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiJjNDAxNDU4OS05MTRlLTRhOGUtYTgyYi1iYmQzYzMzNzFhZmIiLCJlbSI6ImFkbWluLXBvcnRhbEBlbWFpbC5jb20iLCJ1biI6ImFkbWluLXBvcnRhbCIsImZuIjoiQWRtaW4gSG9zcGl0YWxpdHkiLCJpYXQiOjE2OTg4MjA3ODMsImV4cCI6MTY5ODkwNzE4M30.UymdVZkTZy95n0QWevDMA9UoxwGYUFskwtlXcOBvuRM',
  },
});
