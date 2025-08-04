import { Client } from "pg";

async function query(queryObject: any) {
  const client = new Client({
    host: "localhost",
    port: 5432,
    user: "postgres",
    password: "postgres",
  });
  await client.connect();
  const result = await client.query(queryObject);
  await client.end();
  return result;
}

export const database = {
  query: query,
};
