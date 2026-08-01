# Local Playwright Docker commands

Run all commands from the repository root.

## 1. Set your Linux user IDs

This avoids Docker creating root-owned reports and snapshot files.

```bash
export LOCAL_UID=$(id -u)
export LOCAL_GID=$(id -g)
```

## 2. Build the local image

```bash
docker compose -f docker/docker-compose.yml build
```

The image is named:

```text
playwright-framework:local
```

## 3. Run UI, API and visual tests locally

```bash
docker compose -f docker/docker-compose.yml run --rm tests
```

## 4. Run only visual snapshot comparison

```bash
docker compose -f docker/docker-compose.yml run --rm visual-check
```

## 5. Update visual snapshots

Rebuild first whenever test code, configuration, page objects or dependencies change:

```bash
docker compose -f docker/docker-compose.yml build
```

Then update snapshots:

```bash
docker compose -f docker/docker-compose.yml run --rm visual-update
```

The `visual-update` service mounts `resources/` as writable, so generated PNG files are saved to:

```text
resources/visual/
```

The normal `tests` and `visual-check` services mount `resources/` as read-only, so CI-style runs cannot accidentally overwrite approved baselines.

## 6. Review and push snapshots

```bash
git status --short resources/visual
git diff --stat
```

Verify the approved baselines:

```bash
docker compose -f docker/docker-compose.yml run --rm visual-check
```

Commit and push:

```bash
git add docker resources/visual
git commit -m "Add local Docker workflows and update visual snapshots"
git push origin main
```

## 7. Clean local containers and networks

```bash
docker compose -f docker/docker-compose.yml down --remove-orphans
```

To remove the local image too:

```bash
docker image rm playwright-framework:local
```

## Required local files

The Compose file reads:

```text
env/.env.prod
```

Make sure it contains all variables required by `config/environment.config.ts`, including:

```text
API_BASE_URL
ALLURE_RESULTS_DIR
CRYPTO_SECRET_KEY
ADMIN_USERNAME
ADMIN_PASSWORD
USER_USERNAME
USER_PASSWORD
STORAGE_STATE_ROOT_PATH
REGION
```

`API_BASE_URL` is overridden inside Compose to use:

```text
http://host.docker.internal:3001/api/v1/
```
