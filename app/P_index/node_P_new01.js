var cheerio=require('cheerio')
var cache=require('memory-cache')

var html='\
<!doctype html>\
<html>\
<head>\
<meta charset="utf-8">\
<title>news</title>\
</head>\
<body>\
</body>\
</html>\
';
var $=cheerio.load(html,{decodeEntities: false})
//~~~~~~~~~~~~new01
var G_new01=require('../G_new/node_G_new01')
$("body").append(G_new01.html)
var G_new01Process=G_new01.process($)
//~~~~~~~~~~~~new02
var G_new02=require('../G_new/node_G_new02')
$("body").append(G_new02.html)
var G_new02Process=G_new02.process($)


function routerall(app1){
	//var index=0
	app1.get('/new01',function(req,res,next){
		var new01=cache.get('new01') //在这里调出缓存，有值的话就直接把缓存的内容发送出去，没有的话就再次执行一系列的查库过程。
		if(new01==null){
			next()	
		}else{
			console.log('use cache new01')
			res.send(new01)	
		}	
	},G_new01Process,G_new02Process,function(req,res){
		html=$.html()
		cache.put('new01',html,6000) //由于缓存中的值已经被定时器清空，所以再次赋值并定时，那么在定时这段时间内，进来的请求是不用查库的，因为把整个页面都一并缓存了。
		//index+=1
		console.log('not use cache,reset connect database for mongodb ')
		res.send(html)
	})	
}
exports.routerall=routerall