;(function( factory ) {
	if ( typeof define === "function" && define.amd ) {
		requirejs.config({
			paths:{				 
				add:'../tools/addmodule' 
			}	
		});		
		define( ["add",], factory );		
	} else {factory( jQuery )}
}(function(  ) { 
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~	
function G_test(opts){
this.html='';

this.id='#xxx' 				
this.opts=$.extend({},G_test.STATE,opts)
}

G_test.STATE={
	//loginstate : 'off',
}

G_test.prototype.main=function(){var state=this.opts; var $this=this	
//~~~~~~~~~~~~~~~~~~~~~~
$("#login02>button").click(function(e) {
	var name=$("input:first").val()
	var pass=$("input:last").val()
	$.get('/login02',{username:name,password:pass},function(res){
		/*if(res[0]==null){
			$("p.p01").text('error')	
		}else{
			alert(res[0].count)
			$("p.p01").text(res.count)	
		}*/
		alert(res[0].name)	
	},/*'json'*/'json')
});


$("p.p01").click(function(e) {
	$.get('/cachetest',{},function(result){
		alert(result)
	},'html')
});
//~~~~~~~~~~~~~~~~~~~~~~
}


G_test.prototype.render=function(){var state=this.opts
//~~~~~~~~~~~~~~~~~~~~~~

//~~~~~~~~~~~~~~~~~~~~~~
}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~	
$.fn.addModule($('body'),'G_test',G_test) 
//return G_test;
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
}))