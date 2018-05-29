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
        self.userInfo = ko.computed({
            read: function () { 
                return self.username() + '-' + self.age(); // 或写成this代替self也一样
            }, 
            write: function (value) { // 写属性执行的节点是，a、当修改了表单内的值后，b、表单失去焦点时，ab均满足就会执行写属性回掉
                console.log(value);
                var splitPos = value.indexOf('-');
                if (splitPos > 0) { // 下面的修改是可直接修改并渲染到页面上的
                    self.username(value.substring(0, splitPos)) // 计算属性的括号里面是可以对属性值就行设置的
                    self.age(value.substring(splitPos+1, value.length))
                }
            },
            owner: self // 或this均可，因为这里跳出了computed句柄函数外面，获取到的是构造函数里面的this也就是实例对象
        }); 
    }
    ko.applyBindings(new Person());
})


 