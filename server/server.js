import pg from "pg"; // for postgres db connection
import cors from "cors"; // cross origin resource shareing allows for or restricts access
import express from "express"; // for creating a server in node.js
import dotenv from "dotenv"; // loads the env variables from the .env file

dotenv.config(); // calls a function to configure the .env variables and grants access to env variables stored in .env without exposure

const PORT = 8080; // port variable
const app = express(); // initialised a new express application called app

app.use(cors()); // tells the express application to use the cors middleware by passing cors() enabling access from different domains

// connect to db

const dbConnectionsString = process.env.DATABASE_URL; // gets the connection string from .env
const db = new pg.Pool({ connectionString: dbConnectionsString });

// endpoints

app.get("/", (request, response) => {
  response.json("This is the root route");
});

app.get("/all", async (request, response) => {
  const result = await db.query("SELECT * FROM test_table");
  response.json(result.rows);
});

app.listen(PORT, () => console.log(`app is running on ${PORT}`));
