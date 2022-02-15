const server = require('http');
var fs = require('fs');
const url=require('url');

const server_App=server.createServer((request,response)=>{
    
    // console.log("server start");
    const url_instance =request.url;
    // response.write(url_instance);
 response.writeHead(200, {'Content-Type': 'text/html'});

    if(url_instance == "/"){
       
        response.write("404");
        console.log("from if");
        
    }     
    else if(url_instance.startsWith("/admin")   ){
        if(url_instance.endsWith("?role=admin")){
            response.write("welcome Admin");
        }
        else {
            response.write("login");
        }
    }
    else if(url_instance == "/home" || url_instance == "/blog"){
        // const page = fs.createReadStream("html/index.html",'utf8');
        // page.pipe(response);
        //        response.write("from home");
        // console.log(page);
        fs.readFile('./html/index.html',"utf8", function(err, data) {
            if(err){
                console.log(err.message);
                response.end(data);
            }
            else{
                console.log( data);
                response.writeHead(200 , {'Content-Type': 'text/html'});
                response.end(data);
            }
            
            //  response.write(data);     
           
   
        });
    }
 
});


server_App.listen('3002');
