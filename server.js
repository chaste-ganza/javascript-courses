var http = require("http");
var server = http.createServer(function(req,res){
    if(req.url=="/"){
        res.end("Welcome to our application home!")
    } else if(req.url=="/student"){
        let students = [
            {id:1, names: "Chaste"},
            {id:2, names: "Bruce"}
        ]
        res.end(JSON.stringify(students))
    } else{
        res.end("api not found")
    }
})

server.listen(5000);
console.log("Node server is now running on port 3000")