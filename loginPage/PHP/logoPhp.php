<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2017/6/13 0013
 * Time: 下午 9:57
 */
header('Content-Type:text/json;charset=utf-8');
//读取本地JSON文件
echo  file_get_contents('../../RegisterPage/JSON/user.json');
