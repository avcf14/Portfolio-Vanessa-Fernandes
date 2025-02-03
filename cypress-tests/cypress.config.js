const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    video: true,  
    videoUploadOnPasses: false,  
    screenshotOnRunFailure: true,  

    setupNodeEvents(on, config) {
      return config;
    },
  },
});
