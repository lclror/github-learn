var mongodb_array=require('../node_mongodb/mongodb_db').db
var coll_new02=mongodb_array.collection('new02')

function ajax(app1){
	app1.get('/uploadtext',function(req,res){
		var title=req.query.title
		var text=req.query.text	
		coll_new02.find({},{_id:1}).sort({_id:-1}).limit(1).toArray(function(err,result){
			var index=result[0]._id+1 //获取到最大的id值并且加1 成为新写入数据的索引id值
			coll_new02.insert({_id:index,title:title,content:text},function(err,result){
				//console.log(err)
				console.log(result.ops)
					
				if(err==null){
					res.send([{status:'error'}])	
				}else{
					res.send([{status:'success'}])
				}
			})
				
		})
	})	
}

exports.ajax=ajax