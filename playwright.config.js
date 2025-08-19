const { defineConfig } = require("@playwright/test");

module.exports = defineConfig({
    testDir: './test',
    use: {
        headless: true,
        launchOptions: {
            slowMo: 100,
        },
    },
});

