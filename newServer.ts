// import {serve} from "https://deno.land/std/http/server.ts";
// const s = serve({ port: 5000});
// console.log("https://localhost:5000/");


// for await (const req of s) {
//     req.respond({body: "Hello from new server"});
// }


import {serve} from "https://deno.land/std@0.110.0/http/server_legacy.ts";
const s = serve({ port: 5000});
console.log("https://localhost:5000/");


for await (const req of s) {
    req.respond({body: "Hello from new server"});
}


// import { serve } from "https://deno.land/std@0.110.0/http/server_legacy.ts";

// const server = serve({ port: 8080 });
// console.log(`HTTP webserver running. Access it at: http://localhost:8080/`);

// for await (const request of server) {
//   let body = "Your user-agent is:\n\n";
//   body += request.headers.get("user-agent") || "Unknown";
//   request.respond({ status: 200, body });
// }