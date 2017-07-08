$(function(){
	
	//内容区轮播图移入移出
	function SlideShow(selector){		
		this.ele=$(selector).get(0);
		this.moveObject();
	}
	SlideShow.prototype.moveObject=function(){
		
		var oSlef=this;
		$(oSlef.ele).on({
			'mouseenter':function(){
				$(oSlef.ele).find('.btn1').toggle();
			},
			'mouseleave':function(){
				$(oSlef.ele).find('.btn1').toggle();
			}
		})				
	}
	
	var carousel=new SlideShow('.carousel');
	
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
		$(oSelf.ele).find('.dl-text').click(function(){
			location.href='../../DetailsPage/html/DetailsPage.html';
		})
		$(oSelf.ele).find('.dl-pic').click(function(){
			location.href='../../DetailsPage/html/DetailsPage.html';
		})
		
	}

	var clickObject1=new Chaining('.section-top');
	var clickObject2=new Chaining('.header-inner');
	var clickObject2=new Chaining('.main-inner');

	
	
	
	
	
	
	
})
