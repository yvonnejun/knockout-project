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
    function Person() {
        var self = this; // 将this存入self是安全的做法
        self.username = ko.observable('Jack');
        self.age = ko.observable(21);
        self.userInfo = ko.computed(function () { // 注意：computed方法里面的几个坑
            return this.username() + '----' + this.age(); // 坑1：调用上面的属性时，要写成带小括号的形式，但并不是方法
        }, self); // 上面的this是指向后面这第二个参数self的，也就是说self指导了上下文环境，被this调用
    }
    ko.applyBindings(new Person());
})


 