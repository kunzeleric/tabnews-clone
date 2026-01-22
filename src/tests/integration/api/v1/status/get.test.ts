test("GET to /api/v1/status should return 200", async () => {
  const response = await fetch("http://localhost:3000/api/v1/status");
  expect(response.status).toBe(200);
});

test("Verify database version", async () => {
  const response = await fetch("http://localhost:3000/api/v1/status");

  const responseBody = await response.json();
  const server_version = responseBody.dependencies.database.version;

  expect(server_version).toEqual(16);
});

test("Verify max connections available", async () => {
  const response = await fetch("http://localhost:3000/api/v1/status");

  const responseBody = await response.json();
  const max_connections = responseBody.dependencies.database.max_connections;

  expect(max_connections).toEqual(100);
});

test("Verify database opened connections", async () => {
  const response = await fetch("http://localhost:3000/api/v1/status");

  const responseBody = await response.json();
  const opened_connections =
    responseBody.dependencies.database.opened_connections;

  expect(opened_connections).toEqual(1);
});
