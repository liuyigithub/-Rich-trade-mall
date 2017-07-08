$(function(){
	//二手页面点击《更多》的代码1
	function ListPageClick(selector){
		this.ele=$(selector).get(0);
		this.heighten();
	}
	ListPageClick.prototype.heighten=function(){
			var oSlef=this;
			
			$(oSlef.ele).find('span').on({
				'click':function(){
					
					if($(oSlef.ele).css('height')=='25px'){
						
						$(oSlef.ele).css('height','50px');
						$(this).html('收起');
					}else{
						$(oSlef.ele).css('height','25px');
						$(this).html('更多');
					}
					
				}
	
			})
						
	}	
	var clickSpen1=new  ListPageClick('.li-text1');
	
	//二手页面点击《更多》的代码2
	function ListPageClick1(selector){
		this.ele=$(selector).get(0);
		this.heighten1();
		this.heighten2();
	}
	ListPageClick1.prototype.heighten1=function(){
			var oSlef=this;
			
			$(oSlef.ele).find('.more').on({
				'click':function(){
					
					if($(oSlef.ele).css('height')=='25px'){
						$(this).html('收起');
						$(oSlef.ele).css('height','661px');
					}else{
						$(oSlef.ele).css('height','25px');
						$(this).html('更多');
					}
					
				}
	
			})
						
	}	
	
	ListPageClick1.prototype.heighten2=function(){
			var oSlef=this;
			
			$(oSlef.ele).find('.choice').on({
				'click':function(){
					
					if($(oSlef.ele).css('height')=='25px'){
						$(oSlef.ele).find('.list-bom1 li input').show();
						$(oSlef.ele).find('.more').css('visibility','hidden')
						$(oSlef.ele).css('height','700px');
					}else{
						$(oSlef.ele).css('height','25px');
						$(oSlef.ele).find('.list-bom1 li input').toggle();
						$(oSlef.ele).find('.more').css('visibility','visible')
					}
					
				}
	
			})
						
	}
	
	
	
	
	var clickSpen2=new  ListPageClick1('.li-text2')
	
	
	//点击《大图》和《列表》的切换
	
	function ListPageClick2(selector){
		this.ele=$(selector).get(0);
		this.toggleClick();
	}
	
	ListPageClick2.prototype.toggleClick=function(){
		var oSlef=this;
		$(oSlef.ele).find('.option span').click(function(){
			$(this).addClass('big_pic').siblings().removeClass();
			
		})
		
		$(oSlef.ele).find('.option #span-left').click(function(){
			$(oSlef.ele).next('.main3').find('.list-goods').show();
			$(oSlef.ele).next('.main3').find('.Layer-goods').hide();
		})
		$(oSlef.ele).find('.option #span-right').click(function(){
			$(oSlef.ele).next('.main3').find('.Layer-goods').show();
			$(oSlef.ele).next('.main3').find('.list-goods').hide();
		})
		
	}
	
	var clickSpen3=new ListPageClick2('.main2');
	
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
		$(oSelf.ele).find('.goods').click(function(){
			location.href='../../DetailsPage/html/DetailsPage.html';
		})
		$(oSelf.ele).find('.Layer-goods li').click(function(){
			location.href='../../DetailsPage/html/DetailsPage.html';
		})
		
	}

	var clickObject1=new Chaining('.section-top');
	var clickObject2=new Chaining('.header-inner');
	var clickObject2=new Chaining('.main3');

	
	function  FilterShooping(selector){
		this.ele=$(selector).get(0);
		this.FilterAction()
	}
	
	FilterShooping.prototype.FilterAction=function(){
		var oSelf=this;
		$(oSelf.ele).find('.list-top1 li a').click(function(){
			$(oSelf.ele).find('.list-goods li').filter('.selected').toggle()
		})
		
		$(oSelf.ele).find('.confirm span').click(function(){
			$(oSelf.ele).find('.list-goods li').filter('.selected').toggle()
		})
	}
	
	
	var filterShooping=new FilterShooping('.main-inner');
	
	
	
})
