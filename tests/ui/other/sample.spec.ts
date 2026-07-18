import { expect, test } from "@playwright/test";

test('sample test', async({page})=>{
    await page.goto("https://qaplayground.com/");
    await page.getByRole('link', { name: 'Log in / Sign up' }).click();
    await expect(page.getByTestId('sign-in-card')).toBeVisible();
    
});