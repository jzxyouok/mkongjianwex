/**
 * Created by banzhe on 2016/7/19.
 */

    /*$.qs = function(str) {
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

    //请求业绩列表
    function acquire(){
        $.ajax({
            url:'../../sale.php?act=sale_list&user_id='+id,
            type:'POST',
            dataType:'json',
            success:function(data){
                console.log(data);
                vm = data
            }
        });

    }
    acquire();*/

    var demo = new Vue({
        el: '#performanceSearch',
        data: {
            items:{}
        },
        ready : function (){
            this.acquire();
        },
        methods: {
            acquire:function() {
                var vm = this;
                //获取url参数
                (function (str){
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
                    id = params.user_id
                }) ();
                //ajax请求
                $.ajax({
                    url:'../../sale.php?act=sale_list&user_id='+id,
                    type:'POST',
                    success:function(data){
                        vm.items=JSON.parse(data);
                    }
                });
            },
            backPage:function(){
                history.go(-1)
            }
        }
    });

