const path = require("path");
const fs = require("fs");

module.exports = ({ env }) => ({
  connection: {
    client: "mysql2",
    connection: {
      host: env("DATABASE_HOST"),
      port: env("DATABASE_PORT"),
      database: env("DATABASE_NAME"),
      user: env("DATABASE_USERNAME"),
      password: env("DATABASE_PASSWORD"),
      ssl: {
        rejectUnauthorized: true,
        ca: fs.readFileSync("./ca2.pem").toString(),
      },
    },
    useNullAsDefault: true,
  },
});