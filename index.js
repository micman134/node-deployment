const http = require("node:http");

const server = http.createServer((req,res)=>{
      res.writeHead(200,{"Content-Type":"text/plain"});
      res.end("home page");
});

const PORT = process.env.PORT || 3000;

server.listen(PORT,()=> console.log("Server is run on port 3000"));

