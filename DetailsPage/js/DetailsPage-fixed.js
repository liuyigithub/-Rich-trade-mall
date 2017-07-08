$(function(){
	
	//鼠标移入移出
	function Fixedmove(selector){
		this.ele=$(selector).get(0);
		this.fixedAdd();
	}	
	Fixedmove.prototype.fixedAdd=function(){
		var oSelf=this;
		
		$(oSelf.ele).find('a').on({
			'mouseenter':function(){
				$(this).find('div').css('display','block');
				$(this).find('div').animate({
					width:90,
					opacity:1
				})
			},
			'mouseleave':function(){
				$(this).find('div').css('display','none');
				$(this).find('div').animate({
					width:0,
					opacity:0
				})
			}
		})
	}
	
	var Fixedmove1=new Fixedmove('.cart1');
	var Fixedmove2=new Fixedmove('.cart2');
	var Fixedmove3=new Fixedmove('.cart3');
	var Fixedmove4=new Fixedmove('.service1');
	var Fixedmove4=new Fixedmove('.service2');
	var Fixedmove4=new Fixedmove('.service3');
	var Fixedmove4=new Fixedmove('.service4');
	
	//点击回到顶部
	function KeepTop(selector){
		this.ele=$(selector).get(0);
		this.keepAction();
	}
	KeepTop.prototype.keepAction=function(){
		
		var oSelf=this;
		$(oSelf.ele).find('.box1').click(function(){
			var speed=500;
			$('body,html').animate({
				scrollTop:0
			},speed);
			return false;
		})
		
	}
	
	var keepTop=new KeepTop('.service4');



	
})
