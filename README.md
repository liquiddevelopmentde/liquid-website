# Liquid Development Website

![pnpm](https://img.shields.io/badge/pnpm-11.10.0-DC0A0A?logo=pnpm&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=white)
![ESLint](https://img.shields.io/badge/ESLint-3A33D1?logo=eslint)
![Prettier](https://img.shields.io/badge/Prettier-F7B93E?logo=prettier&logoColor=white)

This repository contains the React website for Liquid Development, built with React and Vite. Its deployed
version can be found at [liquid-dev.de](https://liquid-dev.de).

## Development

### Requirements

- Node.js
- pnpm

### Setup

**Install dependencies**

```bash
pnpm install
```

**Start development server**

```bash
pnpm run dev
```

Default URL: `http://localhost:5173`

**Create a production build**

```bash
pnpm run build
```

Output directory: `/build`

## Production

### Requirements

- Docker Compose

### Setup

```bash
docker compose up --build
```

Runs on Port `8084`
