var http = require('http');
var fs = require('fs');


var server = http.createServer();
server.on('request',function(req,res){
	res.setHeader("Access-Control-Allow-Origin","*");
	var url = req.url;
	var method = req.method;
	var fileformat = url.split(".")[url.split(".").length-1];
	var file = url.split("/")[url.split("/").length-1]+"";
	var filename = file.split(".")[0];
	var fileurl = url.split("/");
	{
		var dir = ".";
		for(var i=1; i<fileurl.length;i+=1){
			dir += "/"+fileurl[i];
		}
	}
	// console.log(dir);
	// console.log(fileurl);
	// console.log(filename);
	// console.log(fileformat);
	if (fileformat ===""||fileformat ==="/") {
		res.writeHead(200,{'content-type':'text/html'});
		fs.readFile('./SAO/index.html',function(err,data){
			if (err) {
				throw err;
			}
			res.end(data);
		});
	}
	else if (fileformat === "ico"&&filename === "favicon") {
		res.writeHead(200,{'content-type':'image/ico'});
		fs.readFile("./SAO/favicon.ico",function(err,data){
			if (err) {
				throw err;
			}
			res.end(data);
		});
	}
	else if (fileformat === "html") {
		if(filename==="index"){
			res.writeHead(200,{'content-type':'text/html'});
			fs.readFile(dir,function(err,data){
				if (err) {
					throw err;
				}
				res.end(data);
			});
		}
		
	}
	else if(fileformat === "css"){
		res.writeHead(200,{'content-type':'text/css'});
		fs.readFile(dir,function(err,data){
			if (err) {
				throw err;
			}
			res.end(data);
		});
	}

	else if(fileformat === "js"){
		res.writeHead(200,{'content-type':'text/javascript'});
		fs.readFile(dir,function(err,data){
			if (err) {
				throw err;
			}
			res.end(data);
		});
	}
	else if(fileformat === "png"){
		res.writeHead(200,{'content-type':'image/png'});
		fs.readFile(dir,function(err,data){
			if (err) {
				throw err;
			}
			res.end(data);
		});
	}
	else if(fileformat === "gif"){
		res.writeHead(200,{'content-type':'image/gif'});
		fs.readFile(dir,function(err,data){
			if (err) {
				throw err;
			}
			res.end(data);
		});
	}
	else if(fileformat === "jpg"){
		res.writeHead(200,{'content-type':'image/jpg'});
		fs.readFile(dir,function(err,data){
			if (err) {
				throw err;
			}
			res.end(data);
		});
	}
	else if(fileformat === "ico"){
		res.writeHead(200,{'content-type':'image/ico'});
		fs.readFile(dir,function(err,data){
			if (err) {
				throw err;
			}
			res.end(data);
		});
	}
	else {
		console.log("Unknown Request URL! ( "+url+" )");
		res.writeHead(302,{'Location': 'http://localhost:5000/'});
		res.end();
	}



	// console.log(url+" , "+method);
	// console.log(url.split("."));
	// if (url!="/") {
	// 	var name = url.split("/")[3];
	// 	var format = url.split(".")[1];
	// 	fs.readFile("./SAO/"+url,'utf-8',function(err,data){
	// 		if (err) {
	// 			throw err;
	// 		}
	// 		res.end(data);
	// 	});
	// }
	// switch(url){
	// 	case "/":
	// 		{
	// 			res.writeHeader(200,{'content-type':'text/html'});
	// 			fs.readFile('./SAO/index.html','utf-8',function(err,data){
	// 				if (err) {
	// 					throw err;
	// 				}
	// 				res.end(data);
	// 			});
	// 		}break;
	// 	case "index":
	// 		{
	// 			res.writeHeader(200,{'content-type':'text/html'});
	// 			fs.readFile('./SAO/index.html','utf-8',function(err,data){
	// 				if (err) {
	// 					throw err;
	// 				}
	// 				res.end(data);
	// 			});
	// 		}break;
	// 	case "index.html":
	// 		{
	// 			res.writeHeader(200,{'content-type':'text/html'});
	// 			fs.readFile('./SAO/index.html','utf-8',function(err,data){
	// 				if (err) {
	// 					throw err;
	// 				}
	// 				res.end(data);
	// 			});
	// 		}break;
	// }
});
server.listen("5001","0.0.0.0",function(){
	console.log("已部署至5001端口");
})