import { createConnection } from "typeorm";

createConnection()
  .then(() => console.log("Database successfully connected"))
  .catch((error) => console.log(error));