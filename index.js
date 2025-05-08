import http from "node:http";
import { json } from "node:stream/consumers";
// console.log(`🚀 ~ http:`, http)

const server = http.createServer((req, res) => {
  const tareas = [];
//   console.log(`🚀 ~ server ~ req:`, req);
  console.log(`🚀 ~ server ~ req:`, req.method);
  console.log(`🚀 ~ server ~ req:`, req.url);

  let body = "";
  req.on("data", (chunk) => {
    body += chunk;
    //     console.log(`🚀 ~ req.on ~ chunk:`, chunk.toString())
    //  console.log(`🚀 ~ req.on ~ body:`, JSON.parse( body))
  });

  req.on("end", () => {
    tareas.push(JSON.parse(body));

    //     res.end(tareas);
    res.writeHead(201)
    res.end(JSON.stringify(tareas));
});

  // console.log(`🚀 ~ server ~ res:`, res)
  if(req.method==="GET"&&req.url==="/"){

         res.end("Hola chayane");
  }
});

// console.log(`🚀 ~ server:`, server)
server.listen(8080, () => {
  console.log(`🚀 ~ server.listen ~ 8080:`, 8080);
});
