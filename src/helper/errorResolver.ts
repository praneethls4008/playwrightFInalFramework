/**
 * Converts an unknown caught value into a proper Error object.
 */
export function normalizeError(error: unknown): Error {
  if (error instanceof Error) {
    return error;
  }

  return new Error(String(error));
}