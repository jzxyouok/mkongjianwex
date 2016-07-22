/**
 * Created by banzhe on 2016/7/20.
 */
new Vue({
    el: '#listForm',
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
                id = params.order_id
            }) ();
            //ajax请求
            $.ajax({
                url:'../../sale.php?act=goods_info&order_id='+id,
                type:'POST',
                success:function(data){
                    vm.items = JSON.parse(data);

                }
            });
        },
        backPage:function(){
            history.go(-1)
        }
    }
});
//过滤器
Vue.filter('size', function (value) {
        console.log(value)
        arr = value.split();
         console.log(arr)
    })
Vue.filter('room', function(value){
        /*switch (value){
            case 1:
                return '卧室';
                break;
            case 8:
                return '客厅';
                break;
        }*/
        if(value==1) return '卧室';
        if (value==8) return '客厅'
    })