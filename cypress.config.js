const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "mbbg69",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    }
  },
  env: {
    CYPRESS_SECRET_TOKEN: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiJjNDAxNDU4OS05MTRlLTRhOGUtYTgyYi1iYmQzYzMzNzFhZmIiLCJlbSI6ImFkbWluLXBvcnRhbEBlbWFpbC5jb20iLCJ1biI6ImFkbWluLXBvcnRhbCIsImZuIjoiQWRtaW4gSG9zcGl0YWxpdHkiLCJpYXQiOjE3MDA2MTc3OTEsImV4cCI6MTcwMDcwNDE5MX0.UTVvUKKskj4tgLgpMKYB03ZXm4SY9NIDbjZG7RDcyXg',
  },
});
