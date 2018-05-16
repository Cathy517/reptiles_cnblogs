var http = require('http'); //require方法引用http模块
http.createServer(function(req, res) { //createServer方法创建用于接收http客户端请求并返回响应的http服务器应用程序 
    res.writeHead(200, { 'Content-Type': 'text/html' }); //writeHead方法写响应头  状态吗为200，内容类型为text/html，表示返回一段html代码
    res.write('<head><meta charset="utf-8"/></head>');
    res.end('你好\n'); //end方法输出html代码并结束响应流
}).listen(1337, "127.0.0.1"); // createServer方法将返回被创建的http服务器对象，使用该对象的listen方法制定该服务器使用端口及服务器绑定地址，并对该端口进行监听