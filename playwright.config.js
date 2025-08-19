import { defineConfig } from "@playwright/test";

module.exports = defineConfig({
    use: {
        headless: true,
        launchOptions: {
            slowMo: 100,
        },
    },
});

