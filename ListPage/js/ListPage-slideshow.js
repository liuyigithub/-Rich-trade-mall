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
		count=0;
		$(oSlef.ele).find('.btn').on({
			'click':function(){
				$(this).get(0).id=='left'?--count:++count;
				if(count==4){
					count=0;
				}
				if(count==-1){
					count=3;
				}
				$(oSlef.ele).find('.list-pic').animate({
					left:-1007*count
				},500);
				
				$(oSlef.ele).find('.list-circle li').removeClass().eq(count).addClass('select');
			}
						
		});
				
		$(oSlef.ele).find('.list-circle li').on({
			'click':function(){
				$(this).addClass('select').siblings().removeClass();
				var index=$(this).index();
				$(oSlef.ele).find('.list-pic').animate({
					left:-1007*index
				},500)
			}
		});
		//图片自动
	}
	SlideShow.prototype.Automatic=function(){
			
			var oSlef=this;
			var count=0;
			var timerID = setInterval(timerAciton, 3000);
			
			$(oSlef.ele).on({
				'mouseenter':function(){
					clearInterval(timerID);
				},
				'mouseleave':function(){
					timerID = setInterval(timerAciton, 3000);
				}
			})
			
			function timerAciton(){				
				++count;
				if(count==4){
					count=0;
				}
				$(oSlef.ele).find('.list-pic').animate({
					left:-1007*count
				},500);
				
				$(oSlef.ele).find('.list-circle li').removeClass().eq(count).addClass('select');
				
				
			}
			
			
	}
		
	var oBanner=new  SlideShow('.banner')
	
	
})
