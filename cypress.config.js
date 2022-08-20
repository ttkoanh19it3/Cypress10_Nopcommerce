const { defineConfig } = require("cypress");


module.exports = defineConfig({
  defaultCommandTimeout: 500,
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      //require('cypress-failed-log/on')(on)
      on('task', {
        log(message) {
          console.log(message)
      
          return null
        },
      })
      require('cypress-grep/src/plugin')(config);
      return require('./cypress/plugin/index.js')(on, config)

      
    },
    baseUrl: 'https://demo.nopcommerce.com/',
    specPattern:
      ["**/*.feature", "cypress/e2e/**/*.cy.{js,jsx,ts,tsx}"]
  },

});

