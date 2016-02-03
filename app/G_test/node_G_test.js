//一开始使用了./ 路径 说找不到模块，../才行 。难道不是都相对于启动文件所在目录，而是以谁引用就谁为起始？
//var mongodb_array=require('../node_mongodb/mongodb_array') 
//var coll_test01=new mongodb_array.test01()

//var  mongodb_array=require('../node_mongodb/mongodb_db')
//var coll_test01=new mongodb_array('test01')

var  db=require('../node_mongodb/mongodb_db').db
var coll_test01=db.collection('test01')


var cache = require('memory-cache');
//cache.put('key01','value01', 8000)

function ajax(app1){
	
	app1.get('/login02',function(req,res){
		var name=req.query.username
		var pass=req.query.password
		//~~~~~~~1
		/*coll_test01.find(name,pass,function(result){
			console.log(result)
			res.send(result)	
		})*/
		
		/*coll_test01.findcount({},function(result){
			console.log(result)
			//res.sendStatus(result)	
			res.send([{count:result}])
			//res.send(result)
		})*/
		//~~~~~~~2
		/*coll_test01.find({},function(result){
			console.log(result)
			res.send(result)	
		})*/
		
		//~~~~~~~3
		/*coll_test01.find().sort({_id:1}).skip(6).limit(5).toArray(function(err,result){
			 //result.forEach(function(item){
       		 //console.log('====>'+JSON.stringify(item));
   		 //});
			console.log(result)
			res.send(result)	
		})*/
		
		//~~~~~~~~加入缓存~~
		//无论后台数据库是否频繁更新，缓存都是必要的，例如一个页面，给它30秒的过期时间缓存，那么无论这个页面有多大的访问量，它的查库IO操作也是30秒才进行一次，
		//大大减少了数据库的压力,同时也优化了前台的响应时间.
		//一般都缓存一个页面，要是缓存在模块级别颗粒的话，增加了代码的复杂度.
		
		/*var new01=cache.get('new01')  //此时的key值肯定是空，下面的判断为空时才去查库。
		if(new01==null){
			coll_test01.find({_id:9}).toArray(function(err,result){
				cache.put('new01',result,6000) //查完库之后就把数据存入缓存
				console.log(result[0].name+' insert if')  
				res.send(result)	 //此时干脆用查库后的数据 
				//当缓存不存在时就要老老实实操作一遍源生的数据，然后当cache存在时再次写一遍数据的操作代码，因为当前没有太好的办法去解决同步时间差问题.
			})
		}else{ //如果缓存中有数据那么 直接运行下面
			//var new01=cache.get('new01')  //就没有必要再次取数据了
			console.log(new01)
			res.send(new01)
		}*/
		
		/*//此种方法不行，因为查询需要消耗一定时间，而与此同时下面的发送语句就开始执行了，所以发送的是空值。
		if(new01==null){
			coll_test01.find({_id:9}).toArray(function(err,result){
				cache.put('new01',result,6000) //查完库之后把数据存入缓存
			})
		}
		var new02=cache.get('new01')	
		console.log(new02)
		res.send(new02)*/
		
		

	})
	
	var index=0
	app1.get('/cachetest',/*function(req,res){
		var value=cache.get('key01')
		
		if(value==null){
			cache.put('key01','value_test: '+index, 5000)	
			index+=1
			
		}
		var value=cache.get('key01') //必须再取一次 否则还是之前那个空值
		console.log(value)
		res.send(value)
		
		
	}*/
	function(req,res,next){
		index+=1
		//console.log(index)
		//res.send([{val:index}])
		next()	//如果next()不写的话，那么到这一步运算就停止了，后面的过程将不会再继续执行。可以在此处判断页面缓存并调用，没有的话就运行下面的连库过程。
	},function(req,res,next){
		index+=1
		next()	
	},function(req,res){
		index+=1
		console.log(index)
		res.send([{val:index}])	
	})
	
}
exports.ajax=ajax