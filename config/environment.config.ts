import path from 'node:path';
import { config as loadEnv } from 'dotenv';
import { z } from 'zod';

const environment = process.env.NODE_ENV?.toLowerCase();

if (environment !== 'dev' && environment !== 'prod') {
  throw new Error(
    `Unsupported NODE_ENV: "${process.env.NODE_ENV}". Use "dev" or "prod".`,
  );
}

const isCI = process.env.CI?.toLowerCase() === 'true';

const envFile = `.env.${environment}`;

const envFilePath = path.resolve(
  process.cwd(),
  'env',
  envFile,
);

/**
 * Local:
 * Load values from env/.env.dev or env/.env.prod.
 *
 * Jenkins:
 * Skip the file because Jenkins injects values into process.env.
 */
if (!isCI) {
  const dotenvResult = loadEnv({
    path: envFilePath,
    override: false,
  });

  if (dotenvResult.error) {
    throw new Error(
      `Unable to load environment file: ${envFilePath}\n` +
        dotenvResult.error.message,
    );
  }
}

const EnvironmentSchema = z.object({
  UI_BASE_URL: z.url().optional(),
  API_BASE_URL: z.url(),

  API_USERNAME: z.string().min(1).optional(),
  API_PASSWORD: z.string().min(1).optional(),

  CI: z
    .enum(['true', 'false'])
    .transform(value => value === 'true')
    .default(false),

  ADMIN_USERNAME: z.string(),
  ADMIN_PASSWORD: z.string(),
  USER_USERNAME: z.string(),
  USER_PASSWORD: z.string(),
  STORAGE_STATE_ROOT_PATH: z.string(),
  REGION: z
    .string()
  .transform((val) => val.toLowerCase())
  .pipe(z.enum(['prod', 'qa', 'dev'])),
  BUILD_NUMBER: z
    .string()
    .default('local'),

});

const result = EnvironmentSchema.safeParse(process.env);

if (!result.success) {
  const errors = result.error.issues
    .map(issue => {
      const field = issue.path.join('.') || 'environment';
      return `${field}: ${issue.message}`;
    })
    .join('\n');

    const source = isCI
    ? 'Jenkins environment variables'
    : envFilePath;

  throw new Error(
    `Invalid configuration in ${source}:\n${errors}`,
  );
}

export const env = {
  environment,
  ...result.data,
} as const;