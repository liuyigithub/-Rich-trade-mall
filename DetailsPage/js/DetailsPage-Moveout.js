$(function(){
	
	function MoveOut(selector){
		this.ele=$(selector).get(0);
		this.MoveOutAction();
	}
	
	MoveOut.prototype.MoveOutAction=function(){
		var oSlef=this;
		$(oSlef.ele).mouseenter(function(){
			$(oSlef.ele).find('.ul-list').toggle();
			$(oSlef.ele).find('.iconfont').html('&#xe698;');
		})
		$(oSlef.ele).mouseleave(function(){
			$(oSlef.ele).find('.ul-list').toggle();
			$(oSlef.ele).find('.iconfont').html('&#xe600;');
		})		
	}
	
	var moveout=new MoveOut('.top1');
})
