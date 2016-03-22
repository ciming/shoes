

(function(){
	var imgLoad = function (url, callback) {
	    var img = new Image();
	    img.src = url;
	};
	for(i=1;i<7;i++){
		imgLoad("img/"+i+"-a.png");
		imgLoad("img/"+i+"-b.png");
	}
	for(i=1;i<7;i++){
		imgLoad("img/s-u-"+i+".png");
	}
})()

	
$(function(){
	

	
	var winWidth=(window.innerWidth > 0) ? window.innerWidth : screen.width;
	var winHeight=(window.innerHeight > 0) ? window.innerHeight : screen.height;;
	
	var Game=function(){
		this.shoesUpArry={};
		this.shoesDownArry=[];
		this.level=0;
	}
	Game.prototype={
		next:function(sheosArry){
			$("#game").html("");
			if(this.level<3){
				this.level++;
				this.render();
			}else{
				$("#scene").animate({
					opacity: 0,
					translate3d: '0,-100%,0'
				},600,'ease-out')
			}
		},
		render:function(){
			var currEle=$("#level"+this.level);
			$("#scene>div").removeClass("active");
			currEle.addClass("active");
			currEle.find("div").addClass("animated fadeInDown");
			this.putUpSheos();
			this.putDownSheos();
			this.touch();
		},
		addDownSheos:function(shoesDownArry){
			this.shoesDownArry=shoesDownArry;
		},
		addUpSheos:function(level,arry){
			this.shoesUpArry[level]=arry;
		},
		putDownSheos:function(){
			$.each(this.shoesDownArry,function(index,obj){
				var left=(winWidth/2)+(index*2-1)*(obj.radius+obj.radius/4)-obj.radius;
				obj.putShoes(left,winHeight*0.7185);
			})
		},
		putUpSheos:function(){
			$.each(this.shoesUpArry[this.level],function(index,obj){
				var left=(winWidth/8)*(2*index+1)-obj.radius;
				obj.putShoes(left,winHeight*0.446);
			})
		},
		touch:function(){
			var self=this;
			$.each(this.shoesUpArry[this.level],function(index,obj){
				touch.on(obj.el,"swiping",function(e){
					var currX=obj.mX
					obj.mX=obj._x+e.position.x-obj.radius;
					obj.mY=obj._y+e.position.y-obj.radius;
					obj.updataLoaction();
				})
				touch.on(obj.el,"swipeend",function(e){
					self.check(obj);
					obj.back();
				})				
			})
		},
		check:function(obj){
			var currX=obj.mX;
			var currY=obj.mY;
			var shoesDownA=this.shoesDownArry[0];
			var shoesDownB=this.shoesDownArry[1];
			if((currX>shoesDownA._x-shoesDownA.radius)
			&&(currX<shoesDownA._x+shoesDownA.radius)
			&&(currY>shoesDownA._y-shoesDownA.radius)
			&&(currY<shoesDownA._y+shoesDownA.radius)){
				if(this.isRgiht(obj)){
					showModal(obj.sheosID+"-"+shoesDownA.sheosID)
				}else{
					shoesDownA.wrong();
				};
				
			}else if((currX>shoesDownB._x-shoesDownB.radius)
			&&(currX<shoesDownB._x+shoesDownB.radius)
			&&(currY>shoesDownB._y-shoesDownB.radius)
			&&(currY<shoesDownB._y+shoesDownB.radius)){
				if(this.isRgiht(obj)){
					showModal(obj.sheosID+"-"+shoesDownB.sheosID)
				}else{
					shoesDownB.wrong();
				};
			}			
		},
		isRgiht:function(obj){
			return obj.answer.indexOf(this.level)>=0?true:false;
		}
		
	}	
	var Shoes=function(sheosID){
		this.sheosID=sheosID?sheosID:0;
		this._x=0;
		this._y=0;
		this.image="";
		this.radius=0;
		this.el=$('<div class="shoes"></div>');
	}
	Shoes.prototype={
		putShoes:function(x,y){
			this.el.css("background-image","url(img/"+this.image+".png)")
			this._x=x+this.radius;
			this._y=y+this.radius;
			this.el.width(this.radius*2).height(this.radius*2);
			this.el.css("top",y);
			this.el.css("left",x);
			$("#game").append(this.el);
		}
	}
	
	//鞋顶类
	var ShoesUp=function(sheosID,answer){
		Shoes.call(this, sheosID);
		this.mX=0;
		this.mY=0;
		this.image="s-u-"+sheosID;
		this.answer=answer?answer:[];
		this.radius=(winHeight*0.13)/2;
	}
	ShoesUp.prototype=new Shoes();
	ShoesUp.prototype.updataLoaction=function(){	
		this.el.css("left",this.mX-this.radius)
		this.el.css("top",this.mY-this.radius);
	}
	ShoesUp.prototype.back=function(){
		this.el.animate({
			top:this._y-this.radius,
			left:this._x-this.radius,
		},300,'ease-out')
	}
	//鞋底类
	var ShoesDown=function(sheosID){
		Shoes.call(this,sheosID);
		this.image="s-d-"+sheosID;
		this.radius=(winHeight*0.154)/2;
	}
	ShoesDown.prototype=new Shoes();
	ShoesDown.prototype.wrong=function(){
		var self=this;
		this.el.addClass("shake");
		setTimeout(function(){
			self.el.removeClass("shake");
		},1000)
	}

	var shoesUp_1=new ShoesUp(1,[1]);
	var shoesUp_2=new ShoesUp(2,[3]);
	var shoesUp_3=new ShoesUp(3,[1]);
	var shoesUp_4=new ShoesUp(4,[2]);
	var shoesUp_5=new ShoesUp(5,[]);
	var shoesUp_6=new ShoesUp(6,[3]);
	var game=new Game();
	game.addDownSheos([new ShoesDown("a"),new ShoesDown("b")]);
	game.addUpSheos(1,[shoesUp_1,shoesUp_2,shoesUp_4,shoesUp_3]);
	game.addUpSheos(2,[shoesUp_1,shoesUp_4,shoesUp_3,shoesUp_6]);
	game.addUpSheos(3,[shoesUp_1,shoesUp_2,shoesUp_4,shoesUp_3]);
	$(function(){
		game.next();
	})
	touch.on(".nextBtn","tap hold doubletap",function(e){
		hideModal();
		game.next();
	})
	//弹窗
	function showModal(picName){
		$("#mask").show();
		$("#mask").find(".sheosPic").html("<img src='img/"+picName+".png'/>")
		$("#mask").find(".sucessBox").addClass("animated bounceIn");
		$("#mask").find(".bg").addClass("animated fadeIn");
		
		if(game.level<=2){
			$("#mask").find(".rough").show();
			$("#mask").find(".complete").hide();
		}else{
			$("#mask").find(".rough").hide();
			$("#mask").find(".complete").show();
		}
		$("#mask").find("h2").addClass("animated fadeInDown");
		$("#mask").find("p").addClass("animated fadeInDown");
		$("#mask").find(".next").addClass("animated fadeInDown");
		$("#mask").find(".sheosPic").addClass("animated zoomIn");
	}
	function hideModal(picName){
		$("#mask").hide();
		$("#mask").find(".sucessBox").removeClass("animated zoomIn");
	}
	
})

