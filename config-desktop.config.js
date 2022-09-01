const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const addCucumberPreprocessorPlugin =
  require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin;
const createEsbuildPlugin =
  require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;


//const { defineConfig } = require("cypress");
//npx cypress run --record --key 3913b5ae-b287-477c-9f35-a674f709c79d
module.exports = defineConfig({
  extends: "./cypress.json",
  viewportWidth: 1920,
  viewportHeight: 1080,
  projectId: "t8bkbw",

  env: {
    environment: "desktop",
  },
  chromeWebSecurity: false,
  video: true,
  videoCompression: false,
  pageLoadTimeout: 180000,
  requestTimeout: 15000,
  retries: {
    runMode: 3,
    openMode: 0,
  },

  e2e: {
    async setupNodeEvents(on, config) {
      const bundler = createBundler({
        plugins: [createEsbuildPlugin(config)],
      });

      on("file:preprocessor", bundler);
      await addCucumberPreprocessorPlugin(on, config);

      return config;
    },

    specPattern: "cypress/e2e/features/*.feature",
    baseUrl: "http://tutorialsninja.com/demo"
    
  },
});
