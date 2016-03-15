$(function(){
	String.prototype.evalJSON = function(){
		return eval('(' + this + ')');
		}

	$.ajax({
		type:"get",
		url:"http://www.12studio.cn/ashx/okkoCongig.ashx",
		async:true,
		success:function(data){
			var wxcfig= data.evalJSON();	
			
		}
		
	});
})
