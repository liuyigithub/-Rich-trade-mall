$(function(){
	//支付方式的点击
	function DetailsPageClick(selector){
		this.ele=$(selector).get(0);
		this.ActionObj();
	}
	DetailsPageClick.prototype.ActionObj=function(){
		var oSelf=this;
		$(oSelf.ele).find('a').click(function(){
			if($(oSelf.ele).next('.position-pay').css('display')=='none'){
				$(oSelf.ele).next('.position-pay').toggle();
				$(this).find('.iconfont').html('&#xe698;');
			}else{
				$(oSelf.ele).next('.position-pay').toggle();
				$(this).find('.iconfont').html('&#xe600;');
			}
			
		})
		
	}
	var clickAp=new DetailsPageClick('.payment');
	
	//详细信息与交易记录的切换
	function DetailsPageClick1(selector){
		this.ele=$(selector).get(0);
		this.ActionObject();
	}
	DetailsPageClick1.prototype.ActionObject=function(){
		var oSelf=this;
		$(oSelf.ele).find('span').click(function(){
			$(this).addClass('select').siblings().removeClass();
		})
		
		$(oSelf.ele).find('#span-left').click(function(){
			$(oSelf.ele).next('.content-innnr').find('.picpage').show();
			$(oSelf.ele).next('.content-innnr').find('.record').hide();
		})
		
		$(oSelf.ele).find('#span-right').click(function(){
			$(oSelf.ele).next('.content-innnr').find('.record').show();
			$(oSelf.ele).next('.content-innnr').find('.picpage').hide();
		})
	}
	
	var clickspan1=new DetailsPageClick1('.title-span');
	
	
		//采购数量的增加删减
		
	function PurchaseQuantity(selector){
		this.ele=$(selector).get(0);
		this.addPurchase();
		this.reducePurchase();
	}
	PurchaseQuantity.prototype.reducePurchase=function(){
		var oSelf=this;
		$(oSelf.ele).find('.table-div .min').click(function(){
			var oldVal=parseInt($(oSelf.ele).find('.count').html());
			
				if($(oSelf.ele).find('.count').html()>0){
					oldVal--;
					$(oSelf.ele).find('.count').html(oldVal);
					if($(oSelf.ele).find('.count').html()<1){
						$(oSelf.ele).find('.price-td').css('color','#333')
						$(oSelf.ele).find('.lead-time').css({
							color:'#333',
							fontWeight:100
						})
						$(oSelf.ele).find('.change').hide();						
					}
					
					$(oSelf.ele).find('.Total-Count').html($(oSelf.ele).find('.count').html())
					$(oSelf.ele).find('.Total-Money').html('¥'+$(oSelf.ele).find('.count').html()*189999);
					$(oSelf.ele).find('.total').html($(oSelf.ele).find('.Total-Money').html()+'.00');
				}			

		})
				
	}
	PurchaseQuantity.prototype.addPurchase=function(){
		var oSelf=this;
		$(oSelf.ele).find('.table-div .max').click(function(){
			var oldVal=parseInt($(oSelf.ele).find('.count').html());			
			oldVal++;
			$(oSelf.ele).find('.count').html(oldVal);
			
			if($(oSelf.ele).find('.count').html()>0){
				$(oSelf.ele).find('.price-td').css('color','red')
				$(oSelf.ele).find('.lead-time').css({
					color:'#3683EC',
					fontWeight:'bold'
				})
				$(oSelf.ele).find('.change').show();
				$(oSelf.ele).find('.Total-Count').html($(oSelf.ele).find('.count').html())
				$(oSelf.ele).find('.Total-Money').html('¥'+$(oSelf.ele).find('.count').html()*189999);
				$(oSelf.ele).find('.total').html($(oSelf.ele).find('.Total-Money').html()+'.00');
			}

		})
				
	}
		
	var changeData=new PurchaseQuantity('.main2-inner');
	
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
		$(oSelf.ele).find('.div-btn .btn1').click(function(){
			location.href='../../ShoppingCartPage/html/ShoppingCart.html';
		})
		
	}

	var clickObject1=new Chaining('.section-top');
	var clickObject2=new Chaining('.header-inner');
	var clickObject3=new Chaining('.mian1-inner');
})
