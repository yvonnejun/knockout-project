/*
    author：junyang9
    time：2018/5/20
*/
require.config(requireConfig); // require配置对象写在了require.js库文件的最后，在这里也需要用config配置方法引用一下
require([
    'jquery', 
    'layui', 
    'ko', 
    'utils'
], function($, layui, ko, utils) {
    var layer = layui.layer;
    function Compute() {
        var self = this; // 将this存入self是安全的做法
        this.name = ko.observable('Dell 笔记本');
        this.price = ko.observable(6500);
        this.goodInfo = ko.computed({
            read: function () { 
                return this.name() + '-' + this.price(); // 实测这样写的this是指向的new Compute()对象
            }, 
            write: function (value) { // 写属性执行的节点是，a、当修改了表单内的值后，b、表单失去焦点时，ab均满足就会执行写属性回掉
                console.log(value);
                var splitPos = value.indexOf('-');
                if (splitPos > 0) { // 下面的修改是可直接修改并渲染到页面上的
                    this.name(value.substring(0, splitPos)) // 计算属性的括号里面是可以对属性值就行设置的
                    var floatNumber = value.substring(splitPos+1, value.length);
                    this.price(utils.kilobit(floatNumber));// 格式化价格为逗号分隔
                }
            },
            owner: self
        })
    }
    ko.applyBindings(new Compute());
})


 