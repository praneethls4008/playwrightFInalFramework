# Platzi Fake API — Docker setup

Copy these files into the root of the `fake-api-backend` repository.

## 1. Create `.env.local`

```bash
cat > .env.local <<EOF
NODE_ENV=dev
PORT=3001
ACCESS_SECRET_KEY=$(openssl rand -hex 32)
REFRESH_SECRET_KEY=$(openssl rand -hex 32)
RECOVERY_SECRET_KEY=$(openssl rand -hex 32)
EOF
```

## 2. Build and start

```bash
docker compose up --build
```

Run in the background:

```bash
docker compose up --build -d
```

## 3. Open the application

- Swagger: http://localhost:3001/docs
- REST API: http://localhost:3001/api/v1
- Products: http://localhost:3001/api/v1/products

## 4. View logs

```bash
docker compose logs -f api
```

## 5. Check container status

```bash
docker compose ps
```

## 6. Stop

```bash
docker compose down
```

## 7. Completely rebuild dependencies

Use this after changing Node dependencies or when the node_modules volume is stale:

```bash
docker compose down -v
docker compose build --no-cache
docker compose up
```

## Authentication test

```bash
curl -X POST http://localhost:3001/api/v1/auth/login \
  -H 'Content-Type: application/json' \
  -d '{
    "email": "john@mail.com",
    "password": "changeme"
  }'
```
