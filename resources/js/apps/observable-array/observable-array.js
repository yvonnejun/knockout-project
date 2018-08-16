/*
    author：junyang9
    time：2018/6/09
*/
require.config(requireConfig); 
require([
    'jquery', 
    'layui', 
    'ko', 
    'utils'
], function($, layui, ko, utils) {
    var layer = layui.layer;
    var form = layui.form;
    var country = document.getElementById("country");
    // var element = layui.element();
    //Demo
    // layui.use('form', function(){
    //     var form = layui.form;
        
    //     //监听提交
    //     form.on('submit(formDemo)', function(data){
    //         layer.msg(JSON.stringify(data.field));
    //         return false;
    //     });
    // });
    var vm = {
        countries: ko.observableArray([
            {country:'China', value: 0},
            {country:'England', value: 1},
            {country:'USA', value: 2}
        ]), // 注意：ko.observableArray这样的写法都是带返回值的方法，要执行一遍才能返回这个observable()里面的赋值作为返回值返回出去
        event: {
            add: function (event) {
                layer.msg('add');
                this.countries.push({country:'gender', value: 3});
                console.log(this.countries());
                utils.renderSelect(country, form, this.countries());
            },
            del: function () {
                layer.msg('del');
                this.countries.pop();
                utils.renderSelect(country, form, this.countries());
            },
            modify: function () {
                // layer.msg('modify');
                // var modifyStr = '<form class="layui-form" action=""><div class="layui-form-item">'+
                // '<label class="layui-form-label">国家</label>'+
                // '<div class="layui-input-block">'+
                //   '<input type="text" name="title" required  lay-verify="required" placeholder="请输入国家" autocomplete="off" class="layui-input">'+
                // '</div>'
                // '</div></form>'  //直接写layui的input框到弹出框中会出现错位的坑，不推荐，推荐使用模板
                var dialogModefyId = layer.open({
                    type: 1, 
                    title: '提示', // 标题
                    //time自动关闭
                    //id唯一id
                    shadeClose: false, // 是否点击遮罩关闭
                    closeBtn: 1, // 关闭按钮的皮肤1--常规的叉叉； 皮肤2--一个
                    btn: ['确定', '取消'], // 按钮组
                    offset: ['80px', '270px'], // 设置默认弹出坐标[top,left]
                    area: ['500px', '300px'], // 宽高
                    // skin: 'layui-layer-molv',
                    // content: '传入任意的文本或html' //这里content是一个普通的String
                    content: '<div style="margin-top:83px;margin-left:30px;">国家：<input type="text" style="width:384px;height: 36px;" placrholder="请输入修改内容" value="' + this.countries()[1].country + '"></div>', //这里content是一个普通的String
                    // content: modifyStr, //这里content是一个普通的String
                    yes: function(index, layero){
                        //确认按钮的回调方法yes
                        console.log('你点了确定按钮');
                        layer.close(dialogModefyId); // 点击确定后，关闭对话框
                    },
                    cancel: function(){ 
                        //右上角关闭回调
                        console.log('你点了关闭按钮');
                        //return false 开启该代码可禁止点击该按钮关闭
                    }
                });
            },

            /**
             * 按钮组这一块详解：
             * btn: ['按钮一', '按钮二', '按钮三']
             * yes回调对应按钮一，后面的btn2和3对应后面的按钮二和三
             * 右上角的叉叉关闭按钮对应cancel回调
            */
            //             ,btn: ['按钮一', '按钮二', '按钮三']
            //   ,yes: function(index, layero){
            //     //按钮【按钮一】的回调
            //   }
            //   ,btn2: function(index, layero){
            //     //按钮【按钮二】的回调
                
            //     //return false 开启该代码可禁止点击该按钮关闭
            //   }
            //   ,btn3: function(index, layero){
            //     //按钮【按钮三】的回调
                
            //     //return false 开启该代码可禁止点击该按钮关闭
            //   }
            //   ,cancel: function(){ 
            //     //右上角关闭回调
                
            //     //return false 开启该代码可禁止点击该按钮关闭
            //   }
            query: function () {
                layer.msg('query');
            },
        }
    }
    // console.log(vm.countries());
    // layui模式下解决select动态添加数据的问题，相当于用js原生解决，ko的data-bind="options:countries"方式渲染不出来
    
    // for(var i = 0, len = vm.countries().length; i < len; i++) {
    //     var option = document.createElement('option');
    //     option.setAttribute('value', vm.countries()[i].value);
    //     option.innerHTML = vm.countries()[i].country;
    //     country.appendChild(option);
    //     form.render('select');
    // }
    utils.renderSelect(country, form, vm.countries());
    ko.applyBindings(vm);

    // function renderSelect(context, form, data) {
    //     country.innerHTML = '';
    //     for(var i = 0, len = data.length; i < len; i++) {
    //         var option = document.createElement('option');
    //         option.setAttribute('value', data[i].value);
    //         option.innerHTML = data[i].country;
    //         context.appendChild(option);
    //         form.render('select');
    //     }
    // }
})


 