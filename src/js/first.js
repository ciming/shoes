document.body.addEventListener('touchstart', function (ev) {
    
});
//videosize
Zepto(function($){
	var videoHeight=$("#f3").height();
	$("#video").width((videoHeight*16)/9);
	
	touch.on("#play","tap hold doubletap",function(e){
		$("#secondPage").animate({
			opacity: 0,
			translate3d: '0,-100%,0'
		},600,'ease-out',function(){
			$(this).css('z-index',2);
		})
	})
})

var firstPageLoad=function(){
	
}

Pace.options={
	ajax: false,
}
Pace.on("done",function(){
	
})


//touch
;(function(){
	
	var firstPage=$("#firstPage");
		beginY=0;
	touch.on("#firstPage","drag",function(e){
		beginY=e.position.y;
		if(e.distanceY<0){
			firstPage.css('-webkit-transform', 'translate3d(0,'+e.distanceY+'px, 0)')
		}		
	})
	touch.on("#firstPage","dragend",function(e){
		firstPage.animate({
			opacity: 0,
			translate3d: '0,-100%,0'
		},600,'ease-out',function(){
			$(this).css('z-index',2);
		})
	})
	
})()

//animi
Pace.on("done",function(){
	$("#f1").addClass("animated fadeInDown");
	$("#f2").addClass("animated fadeInDown");
	$("#f3").addClass("animated fadeInDown");
	$("#f4").addClass("animated fadeInDown");
})
