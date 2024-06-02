// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './dev.sqlite3',
      host: process.env.DB_LOCAL_HOST,
      database: process.env.DB_LOCAL_DBNAME,
      user: process.env.DB_LOCAL_USER,
      password: process.env.DB_LOCAL_PASSWORD,
      charset: "utf8",
    
    }
  }, 
    migrations: {
      directory: './migrations',
    },
    seeds: {
      directory: './seeds',

    }
  };
