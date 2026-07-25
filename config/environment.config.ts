import path from 'node:path';
import { config as loadEnv } from 'dotenv';
import { z } from 'zod';

const environment = process.env.NODE_ENV?.toLowerCase();

if (environment !== 'dev' && environment !== 'prod') {
  throw new Error(
    `Unsupported NODE_ENV: "${process.env.NODE_ENV}". Use "dev" or "prod".`,
  );
}

const envFile = `.env.${environment}`;

loadEnv({
  path: path.resolve(process.cwd(), 'env', envFile),
});

const EnvironmentSchema = z.object({
  UI_BASE_URL: z.url().optional(),
  API_BASE_URL: z.url(),

  API_USERNAME: z.string().min(1).optional(),
  API_PASSWORD: z.string().min(1).optional(),

  CI: z
    .enum(['true', 'false'])
    .transform(value => value === 'true')
    .optional(),

  ADMIN_USERNAME: z.string(),
  ADMIN_PASSWORD: z.string(),
  USER_USERNAME: z.string(),
  USER_PASSWORD: z.string(),
  STORAGE_STATE_ROOT_PATH: z.string(),

});

const result = EnvironmentSchema.safeParse(process.env);

if (!result.success) {
  const errors = result.error.issues
    .map(issue => {
      const field = issue.path.join('.') || 'environment';
      return `${field}: ${issue.message}`;
    })
    .join('\n');

  throw new Error(
    `Invalid configuration in ${envFile}:\n${errors}`,
  );
}

export const env = {
  environment,
  ...result.data,
} as const;