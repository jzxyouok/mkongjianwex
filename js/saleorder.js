new Vue({
    el: '#saleOrder',
    data: {
        items:{},
        order:'',
        isA:true,
        isB:false
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
                url:'../../sale.php?act=client_list&sale_id='+id,
                type:'POST',
                success:function(data){
                    console.log(data);
                    vm.items = JSON.parse(data);

                }
            });
        },
        backPage:function(){
            history.go(-1)
        },
        clientMessage:function(value){
            location.href = 'saleremark.html?client_id='+value;
        },
        orders:function(id){
            var vm = this;

                $.ajax({
                    url:'../../sale.php?act=client_to_top&client_id='+id,
                    type:'POST',
                    success:function(){
                        location.reload()
                    }
                });
        }
    }
});
//过滤器
Vue.filter('payStatus', function (value) {
    if(value==2){
        return '已付款'
    }
});


