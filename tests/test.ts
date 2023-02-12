import { expect, test } from '@playwright/test';
test('navigation', async ({ page }) => {
	await page.goto('/');
	await page.getByText(/frontend/i).click()
	await expect(page).toHaveURL("frontend")
});
