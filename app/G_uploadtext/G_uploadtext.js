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
function G_uploadtext(opts){
this.html='';

this.id='#xxx' 				
this.opts=$.extend({},G_uploadtext.STATE,opts)
}

G_uploadtext.STATE={
	//loginstate : 'off',
}

G_uploadtext.prototype.main=function(){var state=this.opts; var $this=this	
//~~~~~~~~~~~~~~~~~~~~~~
$("div#save01>button").click(function(e) {
	var title=$("div#save01>input").val()
	var text=$("div#save01>textarea").val()
	if(title=='' || text==''){
		alert('内容不能为空')
	}else{
		
		$.get('/uploadtext',{title:title,text:text},function(result){
			alert(result[0].status)	
		},'json')	
	}
})
//~~~~~~~~~~~~~~~~~~~~~~
}


G_uploadtext.prototype.render=function(){var state=this.opts
//~~~~~~~~~~~~~~~~~~~~~~

//~~~~~~~~~~~~~~~~~~~~~~
}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~	
$.fn.addModule($('body'),'G_uploadtext',G_uploadtext) 
//return G_uploadtext;
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
}))