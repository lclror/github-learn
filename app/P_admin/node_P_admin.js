
/*var express = require('express');
var router = express.Router();
*/
/*router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  var session=req.session.islogin='islogined'
  if(session==null){
		res.redirect('/')
	}else{ next();}
 
});*/

/*//此种方法不推荐使用，因为某些浏览器有Bug。
router.get('/',function(req,res){
	res.send(html1)	
})
router.get('/up02',function(req,res){
	res.send(html2)	
})
router.get('/up02/up03',function(req,res){
	res.send(html3)	
})

function routerall(app1){
	app1.use('/admin',router)	
}
//module.exports = router;
exports.routerall=routerall;*/




//推荐使用此种简易原始方法，想给哪个路由地址段使用中间件(或者说前置处理过程)，直接use 那个地址段即可.
app.use('/test',function(req,res,next){
	console.log('Time: ', Date.now());
	next()	
})
app.get('/test',function(req,res){
	res.send('test01')	
})
app.get('/test/test01',function(req,res){
	res.send('/test/test01')	
})