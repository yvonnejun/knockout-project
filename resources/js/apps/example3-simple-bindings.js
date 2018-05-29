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
    function Users() {
        this.FirstName = 'mery'
        this.user = {
            name: 'Lucy',
            age: 25,
            do: 'Lucy do something'
        }
        this.LastName = 'ling'
    }
    ko.applyBindings(new Users());
})


 