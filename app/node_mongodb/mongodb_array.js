var db = require('mongoskin').db('mongodb://localhost:27017/array',{native_parser: true});

var test01=function(opt){
	this.opt=opt	
}

test01.prototype.find=function(name,pass,callback){
	db.collection('test01').find({'name':name,'pass':pass}).toArray(function(err, result) {
		if (err){console.log(err)};
		callback(result)
	});
}

test01.prototype.findall=function(opt,callback){
	/*db.collection('test01').find(opt).toArray(function(err,result){
		callback(result)
	})	*/
	
	/*db.collection('test01').find(opt,function(err,result){
		//result.toArray(function(err,result){
			//callback(result)	
		//})	
		
		result.limit(4).toArray(function(err,result){
			callback(result)	
		})
	})*/
	
	db.collection('test01').find(opt).skip(2).limit(2)/*.count(function(err,result){
		callback(result)	
	})*/.toArray(function(err,result){
		callback(result)	
	})
}


test01.prototype.findcount=function(opt,callback){
	db.collection('test01').count(opt,function(err,result){
		if (err){console.log(err)};
		callback(result)	
	})
	
}

exports.test01=test01

/*function test01(name,pass,callback){
db.collection('test01').find({'name':name,'pass':pass}).toArray(function(err, result) {
  if (err) throw err;
  //console.log(result);
  callback(result)
  //db.close();
});
}

exports.test01=test01*/