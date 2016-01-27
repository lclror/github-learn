var mysqlpool=require('../node_mysql/mysqlpool')
var User=new mysqlpool()

function ajax(app1){
	app1.get('/ajax/login02',function(req,res){
		var name=req.query.username
		var pass=req.query.password
		var box=req.query.box // ture / false
		User.userlogin(name,pass,function(result){
			if(result[0]==null){
				res.send(result)	
			}else{
				if(box=='true'){  
					req.session.islogin=result[0].username	
					res.cookie('islogin', name, { maxAge: 30000 });	
					res.send(result)
				}else{
					req.session.islogin=result[0].username	
					res.send(result)
				}
			}
		})
		//console.log(box+' test')  
	})	
	
	app1.get('/ajax/islogin',function(req,res){
		var session=req.session.islogin
		var cookie=req.cookies.islogin
		if(session/*!=null*/){
			res.send({session:session})
		}else if(cookie/*!=null*/){
			res.send({session:cookie})
		}	
	})
	
	
	app1.get('/ajax/islogout',function(req,res){
		req.session.islogin=null	
		res.end()  //如果不使用结束语 就不能使过程起作用,因为还在等待队列
	})
}
exports.ajax=ajax