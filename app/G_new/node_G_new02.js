var mongodb_array=require('../node_mongodb/mongodb_db').db
var coll_new02=mongodb_array.collection('new02')

var html='\
<div id="new02">\
<p>loading...</p>\
<p>loading...</p>\
<p>loading...</p>\
<p>loading...</p>\
<p>loading...</p>\
</div>\
';

function process($){
	var router=function(req,res,next){
		coll_new02.find().sort({_id:-1}).limit(4).toArray(function(err,result){
			var index=0
			for(var i=0;i<4;i++){
				var title=result[i].title
				$('div#new02>p').eq(index).text(title)
				index+=1
			}	
			next()
		})	
		
	}
	return router;
}
exports.html=html
exports.process=process