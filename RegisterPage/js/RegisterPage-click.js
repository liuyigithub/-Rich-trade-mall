$(function(){
		
	
	function RegisterPageClick(selector){
		this.ele=$(selector).get(0);
		this.ActionObject();
		this.checkUsername();
		this.checkPhoneNumber();
		this.checkCode();
		this.checkCompanyName();
		this.checkPassword();
		this.checkMailbox();
		this.submitPage();
		this.logoPage()				
	}
	//企业用户注册与个人用户注册切换
	RegisterPageClick.prototype.ActionObject=function(){
		var oSelf=this;
		$(oSelf.ele).find('.title-p').find('a').click(function(){
			$(this).addClass('select').siblings().removeClass();
			
		})
		
		$(oSelf.ele).find('#personage').click(function(){			
			$(oSelf.ele).find('.input .input-4').hide();
			$(this).css({
				borderRight:'1px solid #ccc',
				borderLeft:0
			});

		});
		
		$(oSelf.ele).find('#enterprise').click(function(){	
			$(this).siblings().css('border-right',0);
			$(oSelf.ele).find('.input .input-4').show();
 
		})
		
		
	}
	//验证用户名
	RegisterPageClick.prototype.checkUsername=function(){
		var oSelf=this;
		
		$(oSelf.ele).find('.input-1 input').on({
			'focus':function(){
				$(this).css({
					borderColor:'green',
					background:''
				});
				$(oSelf.ele).find('.input-1 p').css('opacity',0)
			},
			'blur':function(){
				var pattern1= /^[a-z0-9A-Z]{6,20}$/;
				if($(this).val()==''){
					$(this).css({
						borderColor:'red',
						background:'url(../image/image_03.png)  no-repeat right center'
					});
					$(oSelf.ele).find('.input-1 p').html('用户名不能为空');
					$(oSelf.ele).find('.input-1 p').css('opacity',1)
					
				}else if($(this).val().length<6){
					$(this).css({
						borderColor:'red',
						background:'url(../image/image_03.png)  no-repeat right center'
					});
					$(oSelf.ele).find('.input-1 p').html('用户名的长度必须大于或等于6');
					$(oSelf.ele).find('.input-1 p').css('opacity',1)
					
				}else if(!pattern1.test($(this).val())){
					$(this).css({
						borderColor:'red',
						background:'url(../image/image_03.png)  no-repeat right center'
					});
					$(oSelf.ele).find('.input-1 p').html('用户名只能是字母、数字自由组合，请重新输入');
					$(oSelf.ele).find('.input-1 p').css('opacity',1)
					
				}else{
					$(this).css('border-color','#ccc');
					$(this).css('background','url(../image/image_07.png)  no-repeat right center');
					$(oSelf.ele).find('.input-1 p').css('opacity',0);
					
				}
				
				
			}
		})
	}
	//验证手机号
	RegisterPageClick.prototype.checkPhoneNumber=function(){
		var oSelf=this;
		$(oSelf.ele).find('.input-2 .phone').on({
			'focus':function(){
				$(this).css({
					borderColor:'green',
					background:''
				});
				$(oSelf.ele).find('.input-2 p').css('opacity',0)
			},
			'blur':function(){
				var pattern2= /^((13[0-9])|(14[5|7])|(15([0-3]|[5-9]))|(18[05-9]))\d{8}$/;
				if($(this).val()==''){
					$(this).css({
						borderColor:'red',
						background:'url(../image/image_03.png)  no-repeat right center'
					});
					$(oSelf.ele).find('.input-2 p').html('手机不能为空');
					$(oSelf.ele).find('.input-2 p').css('opacity',1);
					
				}else if(!pattern2.test($(this).val())){
					$(this).css({
						borderColor:'red',
						background:'url(../image/image_03.png)  no-repeat right center'
					});
					$(oSelf.ele).find('.input-2 p').html('手机号码格式不正确，请重新输入');
					$(oSelf.ele).find('.input-2 p').css('opacity',1);
					
				}else{
					$(this).css('border-color','#ccc');
					$(this).css('background','url(../image/image_07.png)  no-repeat right center');
					$(oSelf.ele).find('.input-2 p').css('opacity',0);
					
				}
				
				
			}
		})
		
	}
	//验证手机验证码
	RegisterPageClick.prototype.checkCode=function(){
		var oSelf=this;
		$(oSelf.ele).find('.input-3 input').on({
			'focus':function(){
				$(this).css({
					borderColor:'green',
					background:''
				});
				$(oSelf.ele).find('.input-3 p').css('opacity',0)
			},
			'blur':function(){
				var pattern3= /^\d{6}$/;
				
				if($(this).val()==''){
					$(this).css({
						borderColor:'red',
						background:'url(../image/image_03.png)  no-repeat right center'
					});
					$(oSelf.ele).find('.input-3 p').html('验证码不能为空');
					$(oSelf.ele).find('.input-3 p').css('opacity',1)
				}else if(!pattern3.test($(this).val())){
					$(this).css({
						borderColor:'red',
						background:'url(../image/image_03.png)  no-repeat right center'
					});
					$(oSelf.ele).find('.input-3 p').html('验证码的长度必须大于或等于6');
					$(oSelf.ele).find('.input-3 p').css('opacity',1)
				}else{
					$(this).css('border-color','#ccc');
					$(this).css('background','url(../image/image_07.png)  no-repeat right center');
					$(oSelf.ele).find('.input-3 p').css('opacity',0)
				}
				
				
			}
		})
	}
	
	//验证公司名字
	RegisterPageClick.prototype.checkCompanyName=function(){
		var oSelf=this;
		$(oSelf.ele).find('.input-4 input').on({
			'focus':function(){
				$(this).css({
					borderColor:'green',
					background:''
				});
				$(oSelf.ele).find('.input-4 p').css('opacity',0)
			},
			'blur':function(){
				var pattern4= /^(([\u4e00-\u9fff]{2,50})|([a-z\.\s\,]{2,50}))$/i;
				
				if($(this).val()==''){
					$(this).css({
						borderColor:'red',
						background:'url(../image/image_03.png)  no-repeat right center'
					});
					$(oSelf.ele).find('.input-4 p').html('公司名称不能为空');
					$(oSelf.ele).find('.input-4 p').css('opacity',1)
				}else if(!pattern4.test($(this).val())){
					$(this).css({
						borderColor:'red',
						background:'url(../image/image_03.png)  no-repeat right center'
					});
					$(oSelf.ele).find('.input-4 p').html('请输入合法的公司中文名(可含字母)');
					$(oSelf.ele).find('.input-4 p').css('opacity',1)
				}else{
					$(this).css('border-color','#ccc');
					$(this).css('background','url(../image/image_07.png)  no-repeat right center');
					$(oSelf.ele).find('.input-4 p').css('opacity',0)
				}
				
				
			}
		})
	}
	
	//验证用户密码
	RegisterPageClick.prototype.checkPassword=function(){
		var oSelf=this;
		
		$(oSelf.ele).find('.input-5 input').on({
			'focus':function(){
				$(this).css({
					borderColor:'green',
					background:''
				});
								
			},
			'keyup':function(){
				
				$(oSelf.ele).find('.input-5 .icon-rank').css('opacity',1);
				
				if($(this).val().length>=1&&$(this).val().length<6){
					$(oSelf.ele).find('.input-5 .icon-rank').css('background','url(../image/icon-rank.png) no-repeat')
				}else if($(this).val().length>=6&&$(this).val().length<=10){
					$(oSelf.ele).find('.input-5 .icon-rank').css('background','url(../image/icon-rank.png) no-repeat 0 -17px')
				}else if($(this).val().length>10&&$(this).val().length<=15){
					$(oSelf.ele).find('.input-5 .icon-rank').css('background','url(../image/icon-rank.png) no-repeat 0 -33px')
				}else if($(this).val().length>15&&$(this).val().length<=20){
					$(oSelf.ele).find('.input-5 .icon-rank').css('background','url(../image/icon-rank.png) no-repeat 0 -49px')
				}																
			},						
			'blur':function(){
				var pattern5=/^[a-z0-9_-]{6,20}$/;
				if($(this).val()==''){
					$(this).css({
						borderColor:'red',
						background:'url(../image/image_03.png)  no-repeat right center'
					});
					$(oSelf.ele).find('.input-5 p').html('密码不能为空');
					$(oSelf.ele).find('.input-5 p').css('opacity',1)
				}else if($(this).val().length<6){
					$(this).css({
						borderColor:'red',
						background:'url(../image/image_03.png)  no-repeat right center'
					});
					$(oSelf.ele).find('.input-5 p').html('登录密码的长度必须大于或等于6');
					$(oSelf.ele).find('.input-5 p').css('opacity',1)
				}else if(!pattern5.test($(this).val())){
					$(this).css({
						borderColor:'red',
						background:'url(../image/image_03.png)  no-repeat right center'
					});
					$(oSelf.ele).find('.input-5 p').html('请输入合法的密码');
					$(oSelf.ele).find('.input-5 p').css('opacity',1)
				}else{
					$(this).css('border-color','#ccc');
					$(this).css('background','url(../image/image_07.png)  no-repeat right center');
					$(oSelf.ele).find('.input-5 p').css('opacity',0)
				}
				
				
			}
		})
	}
	//验证邮箱
	RegisterPageClick.prototype.checkMailbox=function(){
		var oSelf=this;
		$(oSelf.ele).find('.input-6 input').on({
			'focus':function(){
				$(this).css({
					borderColor:'green',
					background:''
				})
			},
			'blur':function(){
				var pattern6=/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
				if($(this).val()==''){
					$(this).css('border-color','#ccc');
					$(this).css('background','url(../image/image_07.png)  no-repeat right center');
					$(oSelf.ele).find('.input-6 p').css('opacity',0)
				}else if(!pattern6.test($(this).val())){
					$(this).css({
						borderColor:'red',
						background:'url(../image/image_03.png)  no-repeat right center'
					});
					$(oSelf.ele).find('.input-6 p').html('电子邮箱的格式不正确');
					$(oSelf.ele).find('.input-6 p').css('opacity',1)
				}else{
					$(this).css('border-color','#ccc');
					$(this).css('background','url(../image/image_07.png)  no-repeat right center');
					$(oSelf.ele).find('.input-6 p').css('opacity',0)
				}
			}
		})
		
	}
	RegisterPageClick.prototype.submitPage=function(){
		var oSelf=this;
		
		
		$(oSelf.ele).find('.input-8 .btn').click(function(){
			var pattern1= /^[a-z0-9A-Z]{6,20}$/;
			var pattern2= /^((13[0-9])|(14[5|7])|(15([0-3]|[5-9]))|(18[05-9]))\d{8}$/;	
			var pattern3= /^\d{6}$/;
			var pattern4= /^(([\u4e00-\u9fff]{2,50})|([a-z\.\s\,]{2,50}))$/i;
			var pattern5=/^[a-z0-9_-]{6,20}$/;
			
			if(pattern1.test($('.username').val())&&pattern2.test($('.phone').val())&&
				pattern3.test($('.phoneCode').val())||pattern4.test($('.company1').val())
				&&pattern5.test($('.password').val())
			){
				location.href = '../../loginPage/html/loginPage.html';
			}else{
				if($('.username').val()==''){
					$('.username').css({
						borderColor:'red',
						background:'url(../image/image_03.png)  no-repeat right center'
					});
					$(oSelf.ele).find('.input-1 p').html('用户名不能为空');
					$(oSelf.ele).find('.input-1 p').css('opacity',1)
				}else if($('.phone').val()==''){
					$('.phone').css({
						borderColor:'red',
						background:'url(../image/image_03.png)  no-repeat right center'
					});
					$(oSelf.ele).find('.input-2 p').html('手机号码不能为空');
					$(oSelf.ele).find('.input-2 p').css('opacity',1)
				}else if($('.phoneCode').val()==''){
					$('.phoneCode').css({
						borderColor:'red',
						background:'url(../image/image_03.png)  no-repeat right center'
					});
					$(oSelf.ele).find('.input-3 p').html('验证码不能为空');
					$(oSelf.ele).find('.input-3 p').css('opacity',1);
				}else if($('.company1').val()==''){
					$('.phoneCode').css({
						borderColor:'red',
						background:'url(../image/image_03.png)  no-repeat right center'
					});
					$(oSelf.ele).find('.input-4 p').html('公司名称不能为空');
					$(oSelf.ele).find('.input-4 p').css('opacity',1);
				}else if($('.password').val()==''){
					$('.password').css({
						borderColor:'red',
						background:'url(../image/image_03.png)  no-repeat right center'
					});
					$(oSelf.ele).find('.input-5 p').html('密码不能为空');
					$(oSelf.ele).find('.input-5 p').css('opacity',1);
				}
			}
			
		})
		
	}
	RegisterPageClick.prototype.logoPage=function(){
		var oSelf=this;
		$(oSelf.ele).find('.span-a a').click(function(){
			location.href = '../../loginPage/html/loginPage.html';
		})
		
		$(oSelf.ele).find('.logo1').click(function(){
			location.href = '../../loginPage/html/loginPage.html';
		})
	}
	
	var clickpa=new RegisterPageClick('.content-right');
	var clickpa1=new RegisterPageClick('.top-inner');
	
})
