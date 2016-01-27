var mysql=require('mysql')

var DB_NAME='nodejstest'
var pool  = mysql.createPool({
  host     : 'localhost',       
  user     : 'admin',              
  password : 'admin',       
  port: '3306', 
  database:'nodejstest',                  
});

pool.on('connection', function(connection) {  
    connection.query('SET SESSION auto_increment_increment=1'); 
});

function User(test){  //这里以构造函数的方式来写方法，是为了以后链接过多的话，内存占用太大，因为链接的方法太容易共用了
	this.test=test	
}


pool.getConnection(function(err, connection) {
	console.log('USE succeed');
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~	
	/*var useDbSql = "USE " + DB_NAME;
	connection.query(useDbSql, function (err) {
         if (err) {
            console.log("USE Error: " + err.message);
            return;
         }
         console.log('USE succeed');
    });*/
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~	 
//保存数据
	User.prototype.register=function(name,pass,callback){
		
				  var insertUser_Sql = "INSERT INTO usertable(username,userpass) VALUES(?,?)";
				  
				  connection.query(insertUser_Sql, [name,pass], function (err,result) {
							callback(result); 
				  }); 
	}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~	
//根据用户名得到用户数量
    User.prototype.getUserNumByName = function(username, callback) {
        var getUserNumByName_Sql = "SELECT COUNT(1) AS num FROM usertable WHERE username = ?";
        connection.query(getUserNumByName_Sql, [username], function (err, result) {
           /* if (err) {
                //console.log("getUserNumByName Error: " + err.message);
               callback(err,result); 
					return;
            }else{
            //connection.release();
            //console.log("invoked[getUserNumByName]");
            callback(err,result); 
				} */
				callback(result);                   
        });        
    };
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~	
//根据用户名得到用户信息
    User.prototype.userlogin = function(username,userpass,callback) {
        var getUserByUserName_Sql = "SELECT * FROM usertable WHERE username = ? and userpass = ?";
        connection.query(getUserByUserName_Sql, [username,userpass], function (err, result) {  // 要解决账号密码不匹配 就退出node服务的问题
		  //查询结果正确  err=null   result=[有值]
		  //error        err=null   result=[]  //办法是 判断result  例如  result[0]==null 即为未查找到
            /*if (err) {
                //console.log("getUserByUserName Error: " + err.message);
                
					callback(err,err);
					// return;
            }else{
            //connection.release();
            //console.log("invoked[getUserByUserName]");
           		callback(err,result); 
				} */ 
				callback(result);                  
        });        
    };
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~	
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~	
//得到数据表中的全部信息
    User.prototype.getall = function(callback) {
        var getall_Sql = "select * from usertable order by id desc limit 0,5";
        connection.query(getall_Sql, function (err, result) {
				callback(result);                  
        });        
    };
});

module.exports = User;
