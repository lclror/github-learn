var express = require('express');

var app = express();
app.use(express.static('./'))
//app.set('port','3000');
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//添加网址头部的图标
var favicon=require('serve-favicon')
app.use(favicon('./icon/food4.ico'))
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//morgan HTTP请求日志记录器
/*var morgan = require('morgan')
app.use(morgan('combined'))*/
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
var session = require('express-session')
app.use(session({ resave: true,
                  saveUninitialized: true,
                  secret: 'uwotm8' }));
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
var cookie = require('cookie-parser');
app.use(cookie())						
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
/*var P_new01=require('./p_news/node_P_new01')
P_new01.routerall(app)*/


/*var G_login=require('./G_login/node_G_login')
G_login.ajax(app)*/

/*//process 的情况下 在启动文件测试 写法格式
var html=G_login.html
var $=cheerio.load(html)
var G_loginpress=G_login.process($)
app.get('/test',G_loginpress,function(req,res){
	html=$.html()
	res.send(html)	
})*/

/*//文件上传
var G_upload=require('./G_upload/node_G_upload')
G_upload.ajax(app)*/

/*var test=require('./G_test/node_G_test')
test.ajax(app)*/


/*var G_login=require('./G_login/node_G_login02')
G_login.ajax(app)*/

var P_new01=require('./P_index/node_P_new01')
P_new01.routerall(app)

var G_uploadtext=require('./G_uploadtext/node_G_uploadtext')
G_uploadtext.ajax(app)

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
app.listen(/*app.get('port')*/3000,function(){console.log('running ')})