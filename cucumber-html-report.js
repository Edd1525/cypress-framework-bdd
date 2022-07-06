const report = require("multiple-cucumber-html-reporter");
const os = require("os");
const dayjs = require("dayjs");

report.generate({
  jsonDir: "cypress/cucumber-json", // ** Path of .json file **//
  reportPath: "./reports/cucumber-multi-report",

  metadata: {
    device: os.hostname(),
    platform: {
      name: os.platform(),
      version: os.version,
    },
  },

  customData: {
    title: "Cypress Cucumber Html Report",
    data: [
      {
        label: "Execution Start Time",
        value: dayjs().format("YYYY-MM-DD HH:mm:ss.SSS"),
      },
      {
        label: "Execution End Time",
        value: dayjs().format("YYYY-MM-DD HH:mm:ss.SSS"),
      },
    ],
  },
  pageTitle: "Cypress Cucumber Html Report",
  openReportInBrowser: true,
  displayDuration: true,
});
