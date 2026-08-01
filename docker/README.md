# Docker Setup for Playwright Framework

This directory contains everything required to run the Playwright framework inside Docker for local development.

The Docker setup is designed to:

* Run UI, API and Visual tests in a consistent environment.
* Generate and update visual snapshots.
* Produce Playwright HTML and Allure reports.
* Match the same environment used in CI.

---

# Prerequisites

* Docker Desktop or Docker Engine
* Docker Compose v2
* Linux / macOS / WSL2

Verify installation:

```bash
docker --version
docker compose version
```

---

# Folder Structure

```text
docker/
├── Dockerfile
├── docker-compose.yml
└── README.md
```

Project output:

```text
artifacts/
├── allure-results/
├── playwright-report/
├── storage-states/
└── test-results/
```

Visual snapshots:

```text
resources/
└── visual/
```

---

# One-Time Setup

Create the artifacts directory.

```bash
mkdir -p artifacts
```

Give yourself ownership.

```bash
sudo chown -R "$(id -u):$(id -g)" artifacts resources
```

Export your Linux UID and GID.

```bash
export LOCAL_UID=$(id -u)
export LOCAL_GID=$(id -g)
```

---

# Build Docker Image

From the project root:

```bash
docker compose -f docker/docker-compose.yml build
```

The image will be created as:

```text
playwright-framework:local
```

---

# Run Complete Test Suite

Runs:

* UI Tests
* API Tests
* Visual Tests

```bash
docker compose -f docker/docker-compose.yml run --rm tests
```

Reports are generated under:

```text
artifacts/
```

---

# Run Only Visual Comparison

Compares the current UI against approved snapshots.

```bash
docker compose -f docker/docker-compose.yml run --rm visual-check
```

No snapshots are modified.

---

# Update Visual Snapshots

Use this only after intentional UI changes.

```bash
docker compose -f docker/docker-compose.yml run --rm visual-update
```

Because the `resources` folder is mounted as a writable volume, updated PNG files are written directly into your local repository.

Example:

```text
resources/
└── visual/
    ├── login-page.png
    ├── dashboard.png
    └── ...
```

---

# Verify Snapshot Changes

```bash
git status
```

or

```bash
git diff --stat
```

Review every updated snapshot before committing.

---

# Commit Approved Snapshots

```bash
git add resources/visual
git commit -m "Update approved visual snapshots"
git push origin main
```

GitHub Actions will automatically build a new Docker image containing the updated snapshots.

---

# Serve Allure Report

Generate and open the report.

```bash
npx allure serve artifacts/allure-results
```

Or generate a static report.

```bash
npx allure generate \
  artifacts/allure-results \
  --clean \
  -o artifacts/allure-report
```

Open it.

```bash
npx allure open artifacts/allure-report
```

---

# Playwright HTML Report

Open:

```text
artifacts/playwright-report/index.html
```

---

# Clean Generated Artifacts

```bash
rm -rf artifacts/*
```

---

# Common Commands

### Build

```bash
docker compose -f docker/docker-compose.yml build
```

### Run all tests

```bash
docker compose -f docker/docker-compose.yml run --rm tests
```

### Run visual comparison

```bash
docker compose -f docker/docker-compose.yml run --rm visual-check
```

### Update visual snapshots

```bash
docker compose -f docker/docker-compose.yml run --rm visual-update
```

### Stop containers

```bash
docker compose -f docker/docker-compose.yml down
```

---

# Troubleshooting

## Environment file not found

Error:

```text
Unable to load environment file:
/app/env/.env.prod
```

Ensure:

```text
env/
└── .env.prod
```

exists in the project root.

---

## Permission denied

If Docker cannot write reports:

```text
EACCES: permission denied
```

Run:

```bash
sudo chown -R "$(id -u):$(id -g)" artifacts resources
```

---

## Fake API appears to be running

Check:

```bash
docker ps
```

or

```bash
docker ps --filter publish=3001
```

If the API container is running, stop it:

```bash
docker stop <container-name>
```

---

# CI Workflow

Visual snapshot workflow:

```text
Developer
    │
    ├── Update snapshots locally
    │
    ├── Review PNG files
    │
    ├── Commit snapshots
    │
    ├── Push to GitHub
    │
    ├── GitHub Actions builds Docker image
    │
    ├── Image pushed to GitHub Container Registry (GHCR)
    │
    └── Jenkins pulls the image and compares snapshots
```

Snapshots are never updated in Jenkins. Jenkins only validates them against the committed baseline.

---

# Notes

* Docker provides a consistent execution environment across local development and CI.
* Visual snapshot updates should always be reviewed before committing.
* Store approved snapshots in Git to keep all environments synchronized.
* Use the same Playwright version locally and in CI to avoid rendering differences.
