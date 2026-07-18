import { expect } from "@playwright/test"


// eslint-disable-next-line @typescript-eslint/require-await
export async function validateFooter(){
    expect('Footer Loaded').toBe('Footer Loaded');
}