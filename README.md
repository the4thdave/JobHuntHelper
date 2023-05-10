# Job Hunt Helper

This project was started to help track my job hunt statistics, and it can help you too!

## Usage

Follow these steps to get started:

1. Clone the repo

```
git clone <URL>
```

2. Install dependencies 

```
$ npm install
```

3. Install PostgreSQL 

[Click here to download PostgreSQL](https://www.postgresql.org/download/)

4. Setup database

Enter into PostgreSQL CLI

```
psql
```

Create a database named "api" 

```
CREATE DATABASE api;
```

Connect to database

```
\c api
```

Create a table named "jobs" 

```
CREATE TABLE jobs (id INT, company VARCHAR(255), position VARCHAR(255), city VARCHAR(255), state VARCHAR(255), date DATE);
```

Set up user for database connection

```
CREATE USER user1 WITH PASSWORD 'password';
GRANT ALL PRIVILEGES ON TABLE jobs TO user1;
```

5. Run the client:

```
$ npm start
```

6. Run the server

```
$ npm run dev
```

That's it! Now you can begin using the website to track your job search statistics.

## More Info

This is a fullstack web app that was created using the following tools:

**Frontend**

- TypeScript
- React
- Bootstrap
- Sass

**Backend**

- TypeScript
- Node.js
- Express

**Database**

- PostgreSQL
