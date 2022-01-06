module.exports = {
  "type": "postgres",
  "port": process.env.DATABASE_PORT || 5432,
  "host": process.env.DATABASE_HOST || "localhost",
  "username": process.env.DATABASE_USERNAME,
  "password": process.env.DATABASE_PASSWORD,
  "database": process.env.DATABASE_NAME,
  "migrations": [
    "./src/shared/infra/typeorm/migrations/*{.ts,.js}"
  ],
  "entities": [
    "./src/modules/**/entities/*{.ts,.js}"
  ],
  "cli": {
    "migrationsDir": "./src/shared/infra/typeorm/migrations"
  },
  "logging": false
}