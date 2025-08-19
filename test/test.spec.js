import { test, expect } from "@playwright/test";

test.describe('Premier test avec docker', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('https://mockapi.io/projects/68a4e6902a3deed2960bf8a7');
    });

    test("Vérification d'un élément de test", async ({ page }) => {
        await expect(page.locator('.active span')).toBeVisible();
    });
})