import { expect } from "@playwright/test";
import { test } from "../../../src/ui/fixtures/auth.fixture";

for( let index = 0; index<50; index++){
  test(
  `test ${index}`,
  {tag: ['@mytest']},
  async({userPage}) => {
    await userPage.goto('https://qaplayground.com/bank/dashboard');
    const text = await userPage.getByTestId('dashboard-stat-cards').innerText();
    expect(text).toContain('Total Net Worth');
  });
}
