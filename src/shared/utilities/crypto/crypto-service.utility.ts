import * as crypto from 'crypto';

const ALGORITHM = 'aes-256-gcm';

// Formats the encrypted parts into a single string for the .env file
export function encryptText(text: string, secretKeyHex: string): string {
    const key = Buffer.from(secretKeyHex, 'hex');
    if (key.length !== 32) throw new Error("CRYPTO_SECRET_KEY must be a 64-character hex string (32 bytes).");

    const iv = crypto.randomBytes(12);
    const cipher = crypto.createCipheriv(ALGORITHM, key, iv);

    let encrypted = cipher.update(text, 'utf8', 'hex');
    encrypted += cipher.final('hex');
    const tag = cipher.getAuthTag().toString('hex');

    // Join with dots: iv.tag.ciphertext
    return `${iv.toString('hex')}.${tag}.${encrypted}`;
}

// Parses the single string back into pieces and decrypts it
export function decryptText(encryptedString: string, secretKeyHex: string): string {
    const key = Buffer.from(secretKeyHex, 'hex');
    if (key.length !== 32) throw new Error("CRYPTO_SECRET_KEY must be a 64-character hex string (32 bytes).");

    const [ivHex, tagHex, contentHex] = encryptedString.split('.');
    if (!ivHex || !tagHex || !contentHex) {
        throw new Error("Invalid encrypted string format. Expected iv.tag.content");
    }

    const iv = Buffer.from(ivHex, 'hex');
    const tag = Buffer.from(tagHex, 'hex');
    const decipher = crypto.createDecipheriv(ALGORITHM, key, iv);

    decipher.setAuthTag(tag);

    let decrypted = decipher.update(contentHex, 'hex', 'utf8');
    decrypted += decipher.final('utf8');

    return decrypted;
}
