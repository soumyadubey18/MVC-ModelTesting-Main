export = {
  development: {
    client: "postgresql",
    connection: {
      host: "localhost",
      port: "5432",
      database: "subcribe",
      user: "postgres",
      password: "Soumya@123",
    },
    pool: {
      min: 2,
      max: 10,
    },
    migration: {
      directory: __dirname + "/migrations",
      tableName: "knex_migrations",
      extention: "ts",
    },
  },
} as { [key: string]: object };
