#!/usr/bin/env tsx
import * as crypto from 'crypto';

export function generateKey(): void {
    const newSecretKey = crypto.randomBytes(32).toString('hex');
    console.log("\n🔑 YOUR NEW CRYPTO_SECRET_KEY:");
    console.log(newSecretKey);
    console.log("Save this value inside your .env file.\n");
}

// Self-execute for CLI support
if (require.main === module || process.argv?.some(arg => arg.endsWith('generateKey.ts'))) {
    generateKey();
}
