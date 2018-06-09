/*
    author：junyang9
    time：2018/6/08
*/
require.config(requireConfig); // require配置对象写在了require.js库文件的最后，在这里也需要用config配置方法引用一下
require([
    'jquery', 
    'layui', 
    'ko', 
    'utils',
    'hammer'
], function($, layui, ko, utils, Hammer) {
    var layer = layui.layer;
    // 先要对监听的DOM进行一些初始化
    var hammer = new Hammer(document.getElementById("container"));
    
    // 然后加入相应的回调函数即可
    hammer.ondragstart = function(ev) { 
        alert('开始拖动');
    };  // 开始拖动
    hammer.ondrag = function(ev) { 
        alert('拖动中');
    }; // 拖动中
    hammer.ondragend = function(ev) { }; // 拖动结束
    hammer.onswipe = function(ev) { }; // 滑动
    
    hammer.ontap = function(ev) { }; // 单击
    hammer.ondoubletap = function(ev) { }; //双击
    hammer.onhold = function(ev) { }; // 长按
    
    hammer.ontransformstart = function(ev) { }; // 双指收张开始
    hammer.ontransform = function(ev) { }; // 双指收张中
    hammer.ontransformend = function(ev) { }; // 双指收张结束
    
    hammer.onrelease = function(ev) { }; // 手指离开屏幕
})


 