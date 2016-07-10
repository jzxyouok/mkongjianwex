$(document).ready(function(){
   //验证提交按钮
    var $phone = $(".phone"),
        $password = $(".password");
    $phone.bind('input propertychange', function () {
        loginTap()
    });
    $password.bind('input propertychange', function () {
        loginTap()
    });
    function loginTap(){
        if ($phone.val() && $password.val()){
            $(".login-button").addClass("login-can");
            $(".tips").css({'visibility':'hidden'})
        }else{
            $(".login-button").removeClass("login-can");
        }
    }
    $(".login-button").tap(function(){
        if($phone.val() && $password.val()){
            $(this).addClass("login-tap");
            setTimeout(function(){
                $(".login-button").removeClass("login-tap")
            },300);
        }else {
            $(".tips").html("请输入手机号码和密码").css({'visibility':'visible'});
        }
    });
    //显示密码
    $(".show-ico").click(function(){


    })
});
