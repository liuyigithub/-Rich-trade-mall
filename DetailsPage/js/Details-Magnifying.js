$(function(){
	
	function Magnifying(selector){
		this.ele=$(selector).get(0);
		this.MagnifyingObj();
		this.MagnifyingMove()
	}
	
	Magnifying.prototype.MagnifyingObj=function(){
		var oSelf=this;
		$(oSelf.ele).find('.list-img li').on({
			'mouseenter':function(){
				$(this).addClass('select1').siblings().removeClass();
				$(oSelf.ele).find('.list-img li img').removeClass();
				$(this).find('img').addClass('select2');
				var index=$(this).index()+1;
				$(oSelf.ele).find('.small-img img').attr('src','../image/image-'+index+'.jpg');
				$(oSelf.ele).find('.big-img').css('background','url(../image/pic-'+index+'.jpg');
				
			}			
		})
	}
	
	Magnifying.prototype.MagnifyingMove=function(){
		var oSelf=this;
		$(oSelf.ele).find('.small-img .hode').on({
			'mouseenter':function(){
				$(oSelf.ele).find('.small-img .move').toggle();
				$(oSelf.ele).find('.big-img').toggle();
				
			},
			'mouseleave':function(){
				$(oSelf.ele).find('.small-img .move').toggle();
				$(oSelf.ele).find('.big-img').toggle();
			},
			'mousemove':function(oEvent){
				oSelf.targetX=oEvent.offsetX-80;
				oSelf.targetY=oEvent.offsetY-80;
				
				if(oSelf.targetX<=0){
					oSelf.targetX=0;
				}
				if(oSelf.targetX>=190){
					oSelf.targetX=191;
				}
				if(oSelf.targetY<=0){
					oSelf.targetY=0;
				}
				if(oSelf.targetY>=190){
					oSelf.targetY=190;
				}
				
				$(oSelf.ele).find('.small-img .move').css({
					'left':oSelf.targetX,
					'top':oSelf.targetY
				})
				
				$(oSelf.ele).find('.big-img').css({
					'background-position-x':-oSelf.targetX*2.3,
					'background-position-y':-oSelf.targetY*2.3
				})
				
			}
		})
			
	}
	
	
	var boxObj=new Magnifying('.content-left');
		
})