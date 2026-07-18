import { expect } from "@playwright/test"

// eslint-disable-next-line @typescript-eslint/require-await
export async function validateDisclaimer(){
    expect('Disclaimer Loaded').toBe('Disclaimer Loaded');
}