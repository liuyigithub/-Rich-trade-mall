/**
 * Created by Administrator on 2017/6/13 0013.
 */
$(function () {
    $('input[type="button"]').on({
        click:function(){
            //发起Ajax请求

                $.ajax({
                    url:'../PHP/Register.php',
                    //只要返回JSON数据的情况下，才需要设置这个属性
                    dataType:'json',
                    data:{
                        username:$('.username').val(),
                        password:$('.password').val()
                    },
                    success:function(data){
                        //显示后台返回的结果
                        alert(data.content);
                    },
                    error:function(xhr){
                        console.log(xhr.responseText);
                    }
                })

        }
    })
})




