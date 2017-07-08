/**
 * Created by Administrator on 2017/6/13 0013.
 */
$(function () {
    $('input[type="submit"]').on({

        click:function(){
            //发起Ajax请求

            $.ajax({
                type:'get',
                url:'../PHP/logoPhp.php',
                data:{
                    username:$('.username').val(),
                    password:$('.password').val()
                },
                success:function(data){
                    //显示后台返回的结果
                    console.log(data);
                    for(var i=0;i<data.length;i++){
                        if(data[i].username==$('.username').val()&&data[i].password==$('.password').val()){
                            // alert('登陆成功');
                      $('.loginbox').find('.hint').css({
                          display:'block',
                          opacity:1,
                          backgroundColor:'#69b3f2',
                          borderColor:'blue',
                          color:'#fff'
                      });
                            $('.hint').html('登陆成功')
                            return;
                        }else {
                            // alert('用户名或密码错误');
                            $('.loginbox').find('.hint').css({
                                display:'block',
                                opacity:1
                            });
                            $('.hint').html('用户名或密码错误');
                        }
                    }

                },
                error:function(xhr){
                    console.log(xhr.responseText);
                }
            })
        }
    })
})