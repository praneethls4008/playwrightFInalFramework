import { ZodError } from "zod";

export function getDetailedErrorMessage(error: ZodError, msg: string = ''): string {
  const fieldErrors = error.issues.map(
    (issue) => `  - Field '${issue.path.join(".")}': ${issue.message}`
  );

  const prefix = msg ? `${msg} -> ` : "";
  return `${prefix}Product validation failed:\n${fieldErrors.join("\n")}`;
}