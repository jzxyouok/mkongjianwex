new Vue({
    el: '#remarkDetail',
    data: {
        items:{},
        order:''
    },
    ready : function (){
        this.acquire();
        this.remarkSave();
    },
    methods: {
        remarkSave:function(){
            $("#remarkTxt").bind('input propertychange', function () {
               if($("#remarkTxt").val().length>0){
                    $("#remarkSave").removeAttr('disabled').addClass('remarkSave')
               }else {
                   $("#remarkSave").attr('disabled','disabled').removeClass('remarkSave')
               }
            });
        },
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
                id = params.client_id
            }) ();
            //ajax请求
            $.ajax({
                url:'../../sale.php?act=client_info&client_id='+id,
                type:'POST',
                success:function(data){
                    vm.items = JSON.parse(data);

                }
            });
        },
        backPage:function(){
            history.go(-1)
        },
        //编辑备注
        save:function(value){
            console.log(value)
            $.ajax({
                url:'../../sale.php?act=client_remarks&client_id='+id,
                data:{remarks:value},
                type:'POST',
                success:function(data){
                    this.items = JSON.parse(data);
                    history.go(-1);
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
