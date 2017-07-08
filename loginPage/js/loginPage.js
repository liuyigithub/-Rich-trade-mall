$(function(){
		
	//跳转链接
	
	function Chaining(selector){
		this.ele=$(selector).get(0);
		this.logoPage();
	}
	Chaining.prototype.logoPage=function(){
		var oSelf=this;
		
		$(oSelf.ele).find('.logo').click(function(){
			location.href='../../index/html/index.html';
		})
		$(oSelf.ele).find('.register').click(function(){
			location.href='../../RegisterPage/html/RegisterPage.html';
		})
		
	}

	var clickObject1=new Chaining('.header-inner');
	var clickObject2=new Chaining('.loginbox');
	
	
	
	
	
	
	
})
