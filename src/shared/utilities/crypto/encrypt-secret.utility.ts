#!/usr/bin/env tsx
import * as readline from 'readline';
import { Writable } from 'stream';
import { encryptText } from './crypto-service.utility';


interface MutedWritable extends Writable {
    muted: boolean;
}

const mutableStdout = new Writable({
    write(chunk: Buffer | Uint8Array | string, encoding: BufferEncoding, callback: (error?: Error | null) => void) {
        const stream = this as unknown as MutedWritable;
        if (!stream.muted) {
            process.stdout.write(chunk, encoding);
        }
        callback();
    }
}) as MutedWritable;

mutableStdout.muted = false;

function askQuestion(query: string, hideInput: boolean = false): Promise<string> {
    const rl = readline.createInterface({
        input: process.stdin,
        output: mutableStdout,
        terminal: true
    });

    return new Promise((resolve) => {
        rl.question(query, (answer) => {
            rl.close();
            if (hideInput) {
                process.stdout.write('\n'); 
            }
            resolve(answer);
        });
        if (hideInput) {
            mutableStdout.muted = true;
        }
    });
}

export async function runEncryptionCLI(): Promise<void> {
    try {
        console.log("=== Standalone Secret Encryptor ===");

        // 1. Get the raw text data secretly
        const secretValue = await askQuestion("Enter the secret value to encrypt (hidden): ", true);
        
        // Reset stream state before next prompt
        mutableStdout.muted = false; 

        // 2. Get the key generated from Script 1
        const encryptionKey = await askQuestion("Enter your 64-character Hex Encryption Key: ");

        if (!secretValue || !encryptionKey) {
            console.error("\nError: Secret value and Encryption Key are both required.");
            process.exit(1);
        }

        if (encryptionKey.length !== 64) {
            console.error("\nError: Key must be exactly 64 characters (Hex format).");
            process.exit(1);
        }

        // 3. Encrypt payload
        const encryptedResult = encryptText(secretValue, encryptionKey);

        console.log("\n🔒 YOUR ENCRYPTED VALUE:");
        console.log(encryptedResult);
        console.log("Paste this cipher string into your target variable.\n");

    } catch (error) {
        console.error("An error occurred during encryption:", error);
        process.exit(1);
    }
}

if (require.main === module || process.argv?.some(arg => arg.endsWith('encryptSecret.ts'))) {
    runEncryptionCLI().catch((error) => {
        console.error("Fatal runtime error:", error);
        process.exit(1);
    });
}
