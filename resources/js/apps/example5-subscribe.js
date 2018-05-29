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
    var vm = { // 把对象写在外面的做法
        name: ko.observable('Lucy'), // 注意点1：被监控属性一定要用ko.observable()来绑定属性值
        age: 25,
        doSomeThing: 'do something'
    }
    var obj = vm;
    // vm.name.subscribe(function (newValue) {
    //     console.log(newValue);
    // });
    vm.name.subscribe(function(newValue) {alert("The person's new name is " + newValue);}, null, 'change'); // 注意点2：第二个参数null是上下文对象，'change是触发事件,默认是change，可省'
    ko.applyBindings(vm);
})


 