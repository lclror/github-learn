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
this.html='<h1>h1 is here</h1>';

this.id='#xxx' 				
this.opts=$.extend({},G_test.STATE,opts)
}

G_test.STATE={
	//loginstate : 'off',
}

G_test.prototype.main=function(){var state=this.opts; var $this=this	
//~~~~~~~~~~~~~~~~~~~~~~
$("h1").click(function(e) {
	//alert(123)
	var $h1=$(this)
	$h1.addClass('click')
	function removeclass(){
		$h1.removeClass('click')	
	}
	setTimeout(function(){removeclass()},200)
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