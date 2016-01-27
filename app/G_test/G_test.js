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
/*$("h1").click(function(e) {
	//alert(123)
	var $h1=$(this)
	$h1.addClass('click')
	function removeclass(){
		$h1.removeClass('click')	
	}
	
	setTimeout(function(){removeclass()},200)
});*/

$("#div01").on('click',[$("#div01")],function(){
	/*var $target= $(e.target)
	$target.addClass('click')
	function removeclass(){
		$target.removeClass('click')	
	}
	setTimeout(function(){removeclass()},200)*/
	$(this).append('<div id="div01">div next</div>')
})
$("h1").on('click',$("h1"),function(){
	alert('h1 is here')	
})
//~~~~~~~~~~~~~~~~~~~~~~
}


G_test.prototype.render=function(){var state=this.opts
//~~~~~~~~~~~~~~~~~~~~~~
/*var a=2;
function foo(){alert(a)}
function bar(){var a=3;foo()}

bar()*/

//~~~~~~~~~~~~~~~~~~~~~~
}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~	
$.fn.addModule($('body'),'G_test',G_test) 
//return G_test;
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
}))