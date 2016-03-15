
var mAlert=(function(){
	var AlertBox=function(){
		this.text="";
		this.el=$('<div id="mAlert"><span></span></div>');
		this.init();
	}
	AlertBox.prototype={
		init:function(){
			this.el.hide();
			$("body").append(this.el);
			return this;
		},
		setInfo:function(info){
			var self=this;
			this.text=info;
			this.el.find("span").text(this.text);
			this.el.show();
			this.el.addClass("animated zoomIn");
			setTimeout(function(){
				self.el.hide();
				this.el.removeClass("animated zoomIn");
			},2000)
		}	
	}
	var instance;
	return function(info){
		if(instance === undefined){
			instance = new AlertBox();
		}
		console.log(instance)
		instance.setInfo(info);
		return instance;
	}
})();

$(function(){
	$("#submit").click(function(){
		var data={
			oName:$("#oName").val(),
			oSex:$('input[name="sex"]:checked').val(),
			oPhone:$("#oPhone").val()
		}
		$.ajax({
			type:"post",
			url:"http://www.12studio.cn/ashx/okko.ashx",
			async:true,
			data:data,
			success:function(data){
				if(data=="0004"){
					mAlert("不是微信");
				}else if(data=="0003"){
					mAlert("手机号码格式不正确");
				}else if(data=="0002"){
					mAlert("手机号码已存在");
				}else if(data=="0001"){
					mAlert("信息不能为空");
				}else if(data="0000"){
					mAlert("消息提交成功");
					$("#form").animate({
						opacity: 0,
						translate3d: '0,-100%,0'
					},600,'ease-out')
				}
			}
		});
	})
})
