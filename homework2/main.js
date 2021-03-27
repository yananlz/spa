$(function() {
       let    xData=[], 
      yData=[];
  var data = [
    [ 'Java', '1', '降', '-0.01%'],
    ['C', '2', '升', '+2.44%'],
    ['Python', '3', '升', '+1.41%'],
    ['C++', '4', '降', '-2.58%'],
    ['C#', '5', '升', '+2.07%'],
    ['Visual Basic.NET', '6', '降', '-1.17%'],
    ['JavaScript', '7', '降', '-0.85%'],
    
  ];

  var container = $('.main');
  var myChart = echarts.init(document.getElementById('main2'));
    
    /* global Handsontable: true */
  var hot = new Handsontable(container.get(0), {
          data:data,
          contextMenu: true,          // 启用快捷菜单
          manualRowResize : true,     // 允许行拖动  
          manualColumnResize : true,  // 允许列拖动 
          rowHeaders: false,
          className:"htCenter   htMiddle",
          colWidths: 170,
          //colHeaders: true
          colHeaders: [
                    '语言名称',
                   '排名',
                   '升或降',
                   '变化幅度',
          ]
           });
function changeName(a,b) {
  for(var i=0;i<hot.countRows();i++){
           for(var j=0;j<hot.countCols();j++){
               if(i!==a && j!==b){
                 hot.setCellMeta(i,j,'className','htCenter  htMiddle');
                hot.render();
                //console.log(hot.getCellMeta(i,j).className);
           }
              
              if(i===a && j!==b){
                hot.setCellMeta(i,j,'className','htCenter htMiddle');
                hot.render();
              }
              if(i!==a && j===b){
                hot.setCellMeta(i,j,'className','htCenter htMiddle');
                hot.render();
              }

       // console.log(hot.getCellMeta(i,j).className);
    }
  }
}
  hot.addHook('afterSelectionEnd', function(){
    changeName(arguments[0],arguments[1]);
    hot.setCellMeta(arguments[0],arguments[1],'className','htLeft htMiddle');
   // changeName(arguments[0],arguments[1]);
    hot.render();
});
         
           for(i=2000;i<=2020;i=i+5){
                xData.push(i);
               yData.push(h(i));
           }
           function h(p){
               if(p===2000 || p===2005){
                return 0.6*p-1194;
             }
             if(p===2010){
               return -0.2*p+410;
             }
             if(p===2015){
               return 8;
             }
             if(p===2020){
               return -0.2*p+411;
             }

           }

          var option = {
                           title: {
                     text: 'JavaScript语言排名变化'
                },
                              tooltip: {
                           trigger: 'axis',
                           axisPointer: {
                                               type: 'line',
                                          lineStyle: {
                                          color: 'light gray'
                                                                            
                                          }
                          },
                           formatter:function(params){
                             return "排名"+"<br/>"+params[0].axisValue+":"+params[0].data;
                        
                           }

                        },
                legend: {
                        //  data:['H(x)']
                 },
                        xAxis: {
                           data: xData                            
                         },
                  yAxis: {},
                  series: [{
                               name:"",
                              type: 'line',
                              smooth:false,
                              data: yData                                                                               
                  }]
                       // 使用刚指定的配置项和数据显示图表。
                             };

           var option2=myChart.setOption(option);
            return {hot, option2};


           });
