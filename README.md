# E-Commerce Starter

This workspace contains a React storefront and an Express API starter for an e-commerce MVP.

## Structure

```text
frontend/
  src/
    main.jsx
    styles.css
backend/
  src/
    config/
    controllers/
    middleware/
    models/
    routes/
    server.js
```

## Run locally

Install dependencies in each app:

```bash
cd frontend
npm install
npm run dev
```

```bash
cd backend
npm install
npm run dev
```

The frontend runs on `http://localhost:5173` and the API runs on `http://localhost:4000`.

## Initial API

- `GET /api/health`
- `GET /api/products`
- `POST /api/products`
- `POST /api/orders`
- `POST /api/auth/register`
- `POST /api/auth/login`
