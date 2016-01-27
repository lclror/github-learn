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

function G_login(opts){
this.html='\
<section id="G_login" class="sec1  container color-bg-hui">\
	<div class="div1  myleft">logo</div>\
	<div class="div2 myright">\
		<span class="span1">login</span>\
		<span class="span2">xxx</span>\
		<span class="span3">logout</span>\
	</div>\
	<form class="form1">\
		<label for="username">username</label><input type="text" class="input1"><br/>\
		<label for="password">password</label><input type="password" class="input2"><br/>\
		<button type="button">submit</button><br/>\
		<input type="checkbox" class="box1"/>\
		<p>state:</p>\
	</form>\
</section>\
';
	this.id='#G_login'				
	this.opts=$.extend({},G_login.STATE,opts)
}

G_login.STATE={
	loginstate : 'off',
}

G_login.prototype.main=function(){var state=this.opts; var $this=this	
//~~~~~~~~~~~~~~~~~~~~~~
$("#G_login>.div2>.span1").click(function(e) {
	e.stopPropagation()
	$("#G_login>.form1").show()
});

$("body").click(function(e) {
	$("#G_login>.form1").hide()
});

$("#G_login>.form1").click(function(e) {
	e.stopPropagation()
});

$.get('/ajax/islogin',function(result){
	if(result){
		state.loginstate='on'
		$("#G_login>.div2>.span2").text(result.session)
		$this.render()
	}
},'json')

$("#G_login>.form1>button").click(function(e) {
	var name=$("input.input1").val()
	var pass=$("input.input2").val()
	$.get('/ajax/login02',{username:name,password:pass,box:$("#G_login .box1").prop('checked')},function(result){
		if(result[0]==null){
			state.loginstate='off'
			$("#G_login>.form1>p").append('账号或密码错误 . ')	
			$this.render()
		}else{
			state.loginstate='on'
			$("#G_login>.div2>.span2").text(result[0].username)	
			$this.render()
		}	
	},'json')
});

$("#G_login>.div2>.span3").click(function(e) {
	state.loginstate='off'
	$.get('/ajax/islogout') 
	$this.render()
});
//~~~~~~~~~~~~~~~~~~~~~~
}


G_login.prototype.render=function(){var state=this.opts
//~~~~~~~~~~~~~~~~~~~~~~
if(state.loginstate=='on'){
	$("#G_login .form1").hide()
	$("#G_login>.div2>.span1").hide()
	$("#G_login>.div2>.span2,#G_login>.div2>.span3").show()
}else if(state.loginstate=='off'){
	$("#G_login>.div2>.span1").show()
	$("#G_login>.div2>.span2,#G_login>.div2>.span3").hide()	
}
//~~~~~~~~~~~~~~~~~~~~~~
}

//$.fn.addModule($('body'),'G_login',G_login) 		
return G_login;	

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~	
}))