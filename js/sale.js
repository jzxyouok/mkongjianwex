/**
 * Created by banzhe on 2016/7/19.
 */
$(document).ready(function(){
//获取userid
    $.qs = function(str) {
        var query, vars, params = {};
        query = window.location.search;
        if(str){
            query = str;
        }
        if (!query) {
            return params;
        }
        query.replace(new RegExp("([^?=&]+)(=([^&]*))?", "g"),
            function($0, $1, $2, $3) {params[$1] = $3;}
        );

        return params;
    };
    var id= parseInt($.qs().user_id);
//请求
    $.ajax({
        url: "../../sale.php?act=sale_index&user_id="+id,
        type: "POST",
        dataType:'json',
        success:function(data){
            $(".performance-money").html(data.money_total);
            $(".sale-name").html(data.user_name);
        }
    });
    //跳转业绩查询和预约
    $("#performance-searchs").click(function(){
        location.href = 'saleperformance.html?user_id='+id;
    });
    $("#orderClient").click(function(){
        location.href = 'saleorder.html?user_id='+id;
    });
});