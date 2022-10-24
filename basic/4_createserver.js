

const http= require('http');

function dataControl(req,resp){
    resp.write("<h1>hello deep</h1> ");
    resp.end();
}


http.createServer(dataControl).listen(3000)


// http.createServer( (req,resp) => {
//     resp.write("<h1>hello amamndeep</h1> ");
//     resp.end();

// }).listen(4500);