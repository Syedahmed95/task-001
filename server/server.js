const app = require("../app"),
    http = require("http");

const httpServer = http.createServer(app),
    PORT = process.env.PORT || 2000

httpServer.listen(PORT,()=>{
    console.log("Http Server Running on PORT:",PORT)
})

