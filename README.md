# Job-Scraper-API (NestJS)

## Description

A lightweight API to scrape job listings from various sources and store them in a MongoDB database. This tool provides a structured way to fetch, store, and manage backend job postings conveniently.

## :rocket: Setup Instructions

### Prerequisites

Node.js (v18+)
npm/yarn/pnpm

### Installation

Clone the repository:

```bash
git clone https://github.com/olugbenga1/job-scraper-tool.git
cd job-scraper-tool
```

Install dependencies:

```bash
npm install
```

Set up environment variables: Create a .env file and configure it:

```
MONGO_URI=mongodb://localhost:27017/job_scraper_tool
PORT=3000
```

Run the application:

```bash
npm run start:dev
```

**Development mode** (with hot reload):

```bash
npm run start:dev
```

Access the API at:  
 `http://localhost:3000/public-api`

## :books: API Documentation

### Endpoint

**GET** `/jobs`

### Response Format (200 OK)

### Fields
