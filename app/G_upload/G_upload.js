;(function( factory ) {
	if ( typeof define === "function" && define.amd ) {
		requirejs.config({
			paths:{				 
				add:'../tools/addmodule' //以data-main 文件为索引起始位置
			}	
		});		
		define( ["add",], factory );		
	} else {factory( jQuery )}
}(function(  ) { 
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~	
function G_upload(opts){
this.html='';

this.id='#upload01' //不能为空，为空的话就添加不上html了，因为空也是作为一个子元素而存在。				
this.opts=$.extend({},G_upload.STATE,opts)
}

G_upload.STATE={
	//loginstate : 'off',
}

G_upload.prototype.main=function(){var state=this.opts; var $this=this	
//~~~~~~~~~~~~~~~~~~~~~~
$("#upload01>button").click(function(e) {
	$.ajax({
		 url: '/upload01',
		 type: 'POST',
		 cache: false,
		 data: new FormData($('#upload01')[0]),
		 processData: false,
		 contentType: false
	}).done(function(res) {
		if(res.error){alert(res.error)}
		
		var imgpath=res.path
		var src='../'+imgpath
		var img='<img src='+src+' alt="test">'
		$("body").append(img)
		$("#upload01>input:eq(1)").val(null)
	}).fail(function(res) {
		alert(res.asdf)	
	});
  
});
//~~~~~~~~~~~~~~~~~~~~~~
}


G_upload.prototype.render=function(){var state=this.opts
//~~~~~~~~~~~~~~~~~~~~~~

//~~~~~~~~~~~~~~~~~~~~~~
}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~	
$.fn.addModule($('body'),'G_upload',G_upload) //修改模块用
//return G_upload;
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
}))