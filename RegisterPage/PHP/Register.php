<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2017/6/13 0013
 * Time: 下午 7:16
 */


header('Content-Type:text/json;charset=utf-8');

$username = $_GET['username'];
$password = $_GET['password'];

if($username&&$password!==''){

    //保存注册的信息,判断是否已经存在该用户名

//判断文件是否存在
    if(!file_exists('../JSON/user.json')){
        $arr = array();
    }else{
        $arr = json_decode( file_get_contents('../JSON/user.json') );
    }

    class Person{
        public $username;
        public $password;
    }

    $person = new Person();
    $person->username = $username;
    $person->password = $password;


    $exist = false;
//判断数组中是否能存在用户名
    foreach($arr as $item){
        if($item->username == $username){
            $exist = true;
            //程序到此结束
            die( json_encode(array('content'=>'用户名存在')) );

        }
    }

//说明不存在
    if($exist == false){
        //加入到数组
        array_push($arr,$person);
    }

//保存到本地
    if(file_put_contents('../JSON/user.json', json_encode($arr))){

        echo json_encode(array('content'=>'注册成功'));
    }else{
        echo json_encode(array('content'=>'数据保存失败'));
    }

}else{
    echo('请输入用户名和密码');
}


