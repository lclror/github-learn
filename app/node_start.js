var express = require('express');
var app = express();
app.use(express.static('./'))

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~



/*var P_new01=require('./p_news/node_P_new01')
P_new01.routerall(app)*/
var test=require('./test/test')
test.routerall(app)
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
app.listen(3000,function(){console.log('running ')})