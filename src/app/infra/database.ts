import { Client, QueryConfig } from "pg";

async function query(queryObject: string) {
  const client = new Client({
    host: process.env.POSTGRES_HOST,
    port: Number(process.env.POSTGRES_PORT),
    database: process.env.POSTGRES_DB,
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
  });
  await client.connect();

  try {
    const result = await client.query(queryObject);

    return result;
  } catch (error) {
    console.error("Error querying database", error);
  } finally {
    await client.end();
  }
}

export const database = {
  query,
  getPostgresVersion: async () => {
    const result = await query("SHOW server_version; ");
    return parseInt(result.rows[0].server_version);
  },
  getMaxConnections: async () => {
    const result = await query("SHOW max_connections;");
    return parseInt(result.rows[0].max_connections);
  },
  getDbActivity: async () => {
    const result = await query(
      `SELECT * FROM pg_stat_activity WHERE state = 'active';`,
    );
    return result.rowCount;
  },
};
