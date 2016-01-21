var express = require('express');
var app = express();
app.use(express.static('./'))

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

/*var node_news=require('./node_news')
node_news.routerall(app)*/

/*var G_paging=require('./G_paging/node_G_paging')
G_paging.ajax(app)*/

var P_new01=require('./p_news/node_P_new01')
P_new01.routerall(app)
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
app.listen(3000,function(){console.log('running ')})