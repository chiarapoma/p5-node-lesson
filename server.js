console.log("up and running");

let express = require("express"); //loaded express

let app = express(); //activate express

let port = 3000; //define port number

let server = app.listen(port); // the connection will happen in the port 3000

console.log("server is running on http://localhost:" + port);

app.use(express.static("public")); //the file in this folder will be static, so don't change when server is runninng
