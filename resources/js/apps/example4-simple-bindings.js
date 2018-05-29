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
    var user = { // 把对象写在外面的做法
        name: 'Lucy',
        age: 25,
        doSomeThing: 'do something'
    }
    ko.applyBindings(user);
})


 