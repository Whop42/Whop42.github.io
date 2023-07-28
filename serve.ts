import Server from "lume/core/server.ts";

// taken from https://lume.land/docs/advanced/deployment/

const server = new Server({
  port: 8000,
  root: `${Deno.cwd()}/_site`,
});

server.start();

console.log("Listening on http://localhost:8000");