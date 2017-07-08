$(function(){
		
	//跳转链接
	
	function Chaining(selector){
		this.ele=$(selector).get(0);
		this.logoPage();
	}
	Chaining.prototype.logoPage=function(){
		var oSelf=this;
		$(oSelf.ele).find('.logo1').click(function(){
			location.href='../../loginPage/html/loginPage.html';
		})
		$(oSelf.ele).find('.logo2').click(function(){
			location.href='../../RegisterPage/html/RegisterPage.html';
		})
		$(oSelf.ele).find('.logo').click(function(){
			location.href='../../index/html/index.html';
		})
		$(oSelf.ele).find('.shopp-left').click(function(){
			location.href='../../ShoppingCartPage/html/ShoppingCart.html';
		})
		$(oSelf.ele).find('.index1').click(function(){
			location.href='../../index/html/index.html';
		})
		$(oSelf.ele).find('.second-hand').click(function(){
			location.href='../../ListPage/html/ListPage.html';
		})
		
		
	}

	var clickObject1=new Chaining('.section-top');
	var clickObject2=new Chaining('.header-inner');

	
	
	
	
	
	
	
})
