module.exports = ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      host: env("PGHOST", "strapi-fork.railway.internal"),
      port: env.int("PGPORT", 5432),
      database: env("PGDATABASE", "railway"),
      user: env("PGUSER", "postgres"),
      password: env("PGPASSWORD", "YupNvkOmeujOUhRMOeQLcKXYNvlpOInD"),
      ssl: env.bool(true),
    },
    pool: { min: 0 },
  },
});
