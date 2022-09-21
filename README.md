# Job Hunt Helper

This project was started to help track my job hunt statistics, and it can help you too!

## Usage

Click on the green "Code" button above (near the About section) and copy the HTTPS link.

Next, open your terminal and enter:

```
$ git clone {the HTTPS link copied earlier}
```

Then, cd into the new folder and use this command to install the required dependencies:

```
$ npm install
```

Then, you will need to install PostgreSQL on your computer.

[Click here to download PostgreSQL](https://www.postgresql.org/download/)

Once you have downloaded and installed PostgreSQL, create a database named "api" and run it on port 5432.

Then, create a table named "jobs" so that it will work with this app.

Next, use this command to run the client:

```
$ npm start
```

Lastly, use this command to run the server:

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
