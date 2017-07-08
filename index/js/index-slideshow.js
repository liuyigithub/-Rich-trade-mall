$(function(){
	
	function SlideShow(selector){		
		this.ele=$(selector).get(0);
		this.moveObject();
		this.figureClick();
		this.Automatic();
	}
	SlideShow.prototype.moveObject=function(){
		
		var oSlef=this;
		$(oSlef.ele).on({
			'mouseenter':function(){
				$(oSlef.ele).find('.btn').toggle();
			},
			'mouseleave':function(){
				$(oSlef.ele).find('.btn').toggle();
			}
		})				
	}
	
	SlideShow.prototype.figureClick=function(){		
		var oSlef=this;
		count=1;
		$(oSlef.ele).find('.btn').on({
			'click':function(){
				$(this).get(0).id=='left'?--count:++count;
				if(count==6){
					$(oSlef.ele).find('.list-pic').css('left',0)
					count=1;
				}
				if(count==0){
					$(oSlef.ele).find('.list-pic').css('left',-1007*6+'px')
					count=5;
				}
				$(oSlef.ele).find('.list-pic').stop().animate({
					left:-1007*count
				},500);
				
				$(oSlef.ele).find('.list-circle li').removeClass().eq(count-1).addClass('select');
			}
						
		});
				
		$(oSlef.ele).find('.list-circle li').on({
			'click':function(){
				$(this).addClass('select').siblings().removeClass();
				count=$(this).index()+1;
				$(oSlef.ele).find('.list-pic').stop().animate({
					left:-1007*count
				},500)
			}
		});
		//图片自动
	}
	SlideShow.prototype.Automatic=function(){
			
			var oSlef=this;
			var count=0;
			var timerID = setInterval(timerAciton, 1000);
			
			$(oSlef.ele).on({
				'mouseenter':function(){
					clearInterval(timerID);
				},
				'mouseleave':function(){
					timerID = setInterval(timerAciton, 1000);
				}
			})
			
			function timerAciton(){				
				++count;
				if(count==6){
					$(oSlef.ele).find('.list-pic').css('left',0)
					count=1;
				}else if(count==0){
					$(oSlef.ele).find('.list-pic').css('left',-1007*6+'px');
					count=5;
				}
				
				
				
				$(oSlef.ele).find('.list-pic').animate({
					left:-1007*count
				},500);
				
				$(oSlef.ele).find('.list-circle li').stop().removeClass().eq(count-1).addClass('select');
				
				
			}
			
			
	}
		
	var oBanner=new  SlideShow('.banner')
	
	
})
