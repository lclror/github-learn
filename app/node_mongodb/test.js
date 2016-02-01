var mongodb_array=require('./mongodb_array')

/*array.test01('admin4','admin4',function(result){
	console.log(result)	
})
array.test01('admin6','admin6',function(result){
	console.log(result)	
})*/

var coll_test01=new mongodb_array.test01()

coll_test01.find('admin6','admin6',function(result){
	console.log(result)	
})
coll_test01.find('admin4','admin4',function(result){
	if(result[0]==null){
		console.log('error')
	}else{
		console.log(result)	
	}
		
})