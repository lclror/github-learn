var mongoskin=require('mongoskin')

var host = 'localhost',
    port = '27017',
    dbName = 'array',
    userName = ''+':',
    password = ''+'@',
    str = 'mongodb://' +host+':'+port+'/'+dbName;

var options={native_parser: true}	 

var db = mongoskin.db(str,options);
//直接把链接到的数据库返回比较好，如果把某些数据库操作方法写死的话，有些时候不太灵活.
exports.db=db;

//~~~~~~~~~~~~~~~~数据库方法的固定封装:~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
var CRUD=function(collection){
	this.collection=collection	
	//db.bind(this.collection);
}

CRUD.prototype.save=function(doc_json,callback){var collection=this.collection
	db.collection(collection).save(doc_json,function(err,result){
		//callback(result)	
		if(err){
			callback([{}])	
		}else{
			callback([{status:'success'}])	
		}
	})
}


CRUD.prototype.find=function(query,callback){var collection=this.collection
	db.collection(collection).find(query).sort({name:1}).toArray(function(err,result){
		if(err){
			callback([{}])	
		}else{
			callback(result)	
		}	
	})
}

CRUD.prototype.update=function(query,doc_json,callback){var collection=this.collection
	db.collection(collection).update(query,doc_json,function(err){
		if(err){
			callback([{/*status:'error'*/}]);
		}else{
			callback([{status:'success'}]);
		}							 
	})
}

CRUD.prototype.remove=function(query,callback){var collection=this.collection
	db.collection(collection).remove(query,function(err){
		if(err){
			callback([{/*status:'error'*/}]);
		}else{
			callback([{status:'success'}]);
		}							 
	})
}

//module.exports = CRUD;

