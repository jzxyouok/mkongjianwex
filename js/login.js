$(document).ready(function(){
   //验证提交按钮
    var $phone = $(".phone"),
        $password = $(".password");
    loginTap();
    $phone.bind('input propertychange', function () {
        loginTap()
    });
    $password.bind('input propertychange', function () {
        loginTap()
    });
    function loginTap(){
        if ($phone.val() && $password.val()){
            $(".login-button").addClass("login-can").removeAttr('disabled');
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
            $(".tips").html("请输入正确的手机号码和密码").css({'visibility':'visible'});
        }
    });
    //显示密码
   /* $(".show-ico").click(function(){


    });*/
    //登录

    $('.login-button').click(function(){
        var name = $(".phone").val(),
            passwords = $(".password").val();
        $.ajax({
            url: "../login.php?act=wx_login",
            type: "POST",
            data: {username :name,password:passwords},
            dataType:'json',
            success:function(data){
                if (data.status==1){
                    skip(data)
                }else {
                    $(".tips").css({'visibility':'visible'})
                }

            }
        })
    });
    //跳转页面
    function skip(res){

        var level = parseInt(res.level);
        var  user_id = parseInt(res.user_id);
        switch (level){
            case 1:
                location.href = "html/sale.html?user_id="+user_id;
                break;
        }
    }
});
