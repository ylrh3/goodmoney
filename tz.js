//"https://ylrh3.github.io/zhifu/";
<?php
$conf['qqjump']=1;
if(strpos($_SERVER['HTTP_USER_AGENT'], 'QQ/')!==false && $conf['qqjump']==1){
$a='http://'.$_SERVER['SERVER_NAME'].':'.$_SERVER["SERVER_PORT"].$_SERVER["REQUEST_URI"];
echo '<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<title>正在跳转系统默认浏览器</title>
<script src="https://open.mobile.qq.com/sdk/qqapi.js?_bid=152"></script>;
<script type="text/javascript"> mqq.ui.openUrl({ target: 2,url: "'.$a.'"}); </script>
</head>
<body>
</body>
</html>';
exit; } ?>
//前面的部分为跳转到默认浏览器的代码
//下面部分为自动跳转到其他网址的代码
<html>
<head>
<title>正在跳转</title>
<meta http-equiv="Content-Language" content="zh-CN">
<meta HTTP-EQUIV="Content-Type" CONTENT="text/html; charset=gb2312">
<meta http-equiv="refresh" content="0.2;url=https://ylrh3.github.io/zhifu/ ">    //此处的域名改为需要跳转的域名
</head>
<body>
</body>
</html>
