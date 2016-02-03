var mongodb_array=require('../node_mongodb/mongodb_db').db
var coll_new01=mongodb_array.collection('new01')

var html='\
<div id="new01">\
<p>loading...</p>\
<p>loading...</p>\
<p>loading...</p>\
<p>loading...</p>\
<p>loading...</p>\
</div>\
';

function process($){
	var router=function(req,res,next){
		coll_new01.find().toArray(function(err,result){
			var index=0
			for(var i=0;i<4;i++){
				var title=result[i].title
				$('div#new01>p').eq(index).text(title)
				index+=1
			}
			next()	
		})	
		
	}
	return router;	
}
exports.html=html
exports.process=process