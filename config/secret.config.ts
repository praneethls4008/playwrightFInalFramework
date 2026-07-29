// src/config/secret.config.ts
import { z } from 'zod';

const SecretEnvironmentSchema = z.object({
  APP_BASE_URL: z.string().url(),

  E2E_USERNAME: z.string().min(1),
  E2E_PASSWORD: z.string().min(1),

  // Base64-encoded 32-byte key used for AES-256-GCM.
  PW_STATE_ENCRYPTION_KEY: z.string().min(1),
});

const parsed = SecretEnvironmentSchema.safeParse(process.env);

if (!parsed.success) {
  const invalidVariables = [
    ...new Set(
      parsed.error.issues.map(issue => issue.path.join('.'))
    ),
  ];

  throw new Error(
    `Missing or invalid environment variables: ${invalidVariables.join(', ')}`
  );
}

const encryptionKey = Buffer.from(
  parsed.data.PW_STATE_ENCRYPTION_KEY,
  'base64'
);

if (encryptionKey.length !== 32) {
  throw new Error(
    'PW_STATE_ENCRYPTION_KEY must be a Base64-encoded 32-byte key'
  );
}

export const secretConfig = Object.freeze({
  baseURL: parsed.data.APP_BASE_URL,
  username: parsed.data.E2E_USERNAME,
  password: parsed.data.E2E_PASSWORD,
  encryptionKey,
});