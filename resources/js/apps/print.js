/*
    author：junyang9
    createtime：2018/6/01
*/
require.config(requireConfig); 
require([
    'jquery', 
    'layui', 
    'ko', 
    'utils'
], function(
        $, 
        layui, 
        ko, 
        utils
    ) {
    var layer = layui.layer;
    var vm = {
        projectName: 'knockout项目'
    };
    // layer.msg('hello');
    ko.applyBindings(vm);
     
    // 加载主区域内容
    init();
    function init() {
        var LODOP; //声明为全局变量    
	    
        function getSelectedPageSize(){
            if (document.getElementById("Radio4").checked) 
            return document.getElementById("PagSizeList").value;
            else return ""; 		
        };	
        function CreatePrinterList(){
            if (document.getElementById('PrinterList').innerHTML!="") return;
            LODOP=getLodop(); 
            var iPrinterCount=LODOP.GET_PRINTER_COUNT();
            for(var i=0;i<iPrinterCount;i++){
                console.log(iPrinterCount[i]);
    
                   var option=document.createElement('option');
                   option.innerHTML=LODOP.GET_PRINTER_NAME(i);
                   option.value=i;
                document.getElementById('PrinterList').appendChild(option);
            };	
        };
        function Print5() {		
            LODOP=getLodop();  
            LODOP.PRINT_INIT("");	
            // LODOP.SET_PRINT_PAGESIZE(1,2100,2970,"A4");
            AddPrintContent("10101010101010","郭德强");
              LODOP.PRINT();	
            // LODOP.PRINT_INIT("");	  	
            // LODOP.SET_PRINT_PAGESIZE(1,document.getElementById('W1').value,document.getElementById('H1').value,"A3");
            // AddPrintContent("10101010101012","于谦");
              // LODOP.PRINT();		
        };		
        function getSelectedPrintIndex(){ // 选中的打印机的值返回出去，供默认打印机重新设置
            if (document.getElementById("Radio2").checked) 
                return document.getElementById("PrinterList").value;
            else 
                return -1; 		
        };
        function SetPrint7() {		
            LODOP=getLodop();  
            LODOP.PRINT_INIT("");
            if (LODOP.CVERSION) CLODOP.On_Return=function(TaskID,Value){alert(Value);};
            var strResult=LODOP.SET_PRINT_MODE("WINDOW_DEFPRINTER",getSelectedPrintIndex()); // getSelectedPrintIndex()执行后就是上面下拉框选中的打印机对应的value值
            if (!LODOP.CVERSION) alert(strResult);
        };
    
    
    
        function prn4_preview() { // 调用打印html的方法Prnt_Oneform
            LODOP=getLodop();  	
            Prnt_Oneform("div1");	
            // Prnt_Oneform("div2");	
            // Prnt_Oneform("div3");			
        };
        function Prnt_Oneform(strID) {	 // 打印html的函数
            LODOP.PRINT_INIT("打印控件功能演示_Lodop功能_分页输出四");
            LODOP.ADD_PRINT_HTM(88,200,350,600,document.getElementById(strID).innerHTML);
            LODOP.PRINT();	
        };
        function prn6_design() {
            LODOP=getLodop();  	
            LODOP.PRINT_INIT("打印控件功能演示_Lodop功能_分页输出六");
            LODOP.ADD_PRINT_HTM(88,150,450,150,"<!DOCTYPE html>"+document.getElementsByTagName("html")[0].innerHTML);
            LODOP.SET_PRINT_STYLEA(0,"TableRowThickNess",25);
            LODOP.PRINT_DESIGN();	
        };
    }
    
})


 