
function routerall(app1){
	app1.get('/test',function(req,res){
		res.send('<h1>test h1 is here!</h1>')	
	})
}
exports.routerall=routerall