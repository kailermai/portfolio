---
title: "Threadly — CVWO Winter Assignment AY24/25"
description: A web forum for NUS computing students, built for the CVWO Winter Assignment.
tags: [project, react, go, mysql]
order: 2
---

A web forum developed for the CVWO Winter Assignment AY24/25. Threadly is designed for NUS computing students to foster discussions and exchange ideas on various topics.

- **Author:** Mai Kai Ler
- **Date of submission:** 26/01/25
- [Writeup (PDF)](https://github.com/kailermai/Threadly/blob/main/Writeup.pdf)
- [Screenshots gallery](https://github.com/kailermai/Threadly/blob/main/Gallery.md)
- Repos: [Frontend](https://github.com/kailermai/Threadly) · [Backend](https://github.com/kailermai/Threadly-Backend)

## Tech Stack

| Component | Tech |
| --------- | ---- |
| Frontend  | React with TypeScript |
| Backend   | Go |
| Database  | MySQL |
| Misc      | Adobe Express (website logo) |

## Features

- An authentication system where users are authenticated by their username and password.
- The ability to perform basic CRUD operations (Create, Read, Update, Delete) for forum threads and comments.
- A category/tagging system to categorise threads so they are easier to search for through filtering.

---

## Installation guide

### Prerequisites

**Install Node.js and npm (for the frontend):**

- Download and install [Node.js](https://nodejs.org/en) (this also installs npm).
- Verify installation:

```bash
node -v
npm -v
```

**Install Go (for the backend):**

- Download and install [Go](https://go.dev/) from golang.org.
- Verify installation:

```bash
go version
```

**Install MySQL (for the database):**

- Download and install [MySQL Community Server](https://dev.mysql.com/downloads/). Note down the username and password to access the MySQL server when installing.

**Install Git (to clone the repo):**

- Download and install [Git](https://git-scm.com/downloads).

### Steps to set up the application

1. Clone the repository:

```bash
git clone https://github.com/kailermai/Threadly
```

2. Change into the frontend directory:

```bash
cd frontend
```

3. Install dependencies:

```bash
npm install
```

4. Start the development server:

```bash
npm run dev
```

5. Set up the backend:

```bash
cd ../backend
go mod tidy
```

6. Create a `.env` file from the template `.env.example` file:

```bash
cp .env.example .env
```

7. Edit the `.env` according to the instructions in the template. The schema will be created according to the `DB_NAME` specified.

8. Start the backend server:

```bash
go run main.go
```

9. Run the application. Open the frontend in your browser (`http://localhost:5173`) and ensure the backend API is accessible (`http://localhost:8000`).
