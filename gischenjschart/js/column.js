$(function () {                                                                
    $('#container').highcharts({                                           
        chart: {                                                           
            type: 'bar'                                                    
        },                                                                 
        title: {                                                           
            text: '综合监管'                    
        },                                                                  
        xAxis: {     
            tickLength:0,  
            lineWidth:0,                                                 
            categories: ['广告审批', '河道保洁', '管网维护', 
            '积水点', '公众上报', '巡查上报', '感知上报'],
            labels: {                                                      
                overflow: 'justify',
                align:'right',
                formatter:function(){
                    return this.value+'12%';
                }                                    
            },                                                          
        },                                                                 
        yAxis: {  
            tickLength:0,
            gridLineWidth: 0,                                                         
            labels:{
                enabled:false,
            },                                                                                                             

            title:{
                text:''
            }
        },                                                                 
        tooltip: {                                                         
            valueSuffix: ' millions'                                       
        },                                                                 
        plotOptions: {                                                     
            bar: {                                                         
                dataLabels: {                                              
                    enabled: true                                          
                }                                                          
            }                                                              
        },                                                                 
        legend: {                                                          
           enabled:false                                                   
        },                                                                 
        credits: {                                                         
            enabled: false                                                 
        },                                                                 
        series: [{                                                               
            name: 'Year 2008',                                             
            data: [973, 914, 454, 732, 340,400,517]                                
        }]                                                                 
    }); 



    $('#containerSpline').highcharts({
        chart: {
            type: 'areaspline'
        },
        title: {
            text: '事件'
        },
        legend: {
            layout: 'horizontal',
            align: 'right',
            verticalAlign: 'top',
            floating: true,
            borderWidth: 1,
            backgroundColor: '#FFFFFF',
        },
        xAxis: {
            tickLength:0,
            lineWidth:0,
            labels:{
                enabled:false,
            },
            categories: [
                'Monday',
                'Tuesday',
                'Wednesday',
                'Thursday',
                'Friday',
                'Saturday',
                'Sunday'
            ],
            title:{
                text:''
            }
        },
        yAxis: {
            gridLineWidth: 0,
            tickLength:0,
            labels:{
                enabled:false,
            },
            title:{
                text:''
            }
        },
        tooltip: {
            shared: true,
            valueSuffix: ' units'
        },
        credits: {
            enabled: false
        },
        plotOptions: {

        }, 
        series: [ {
            name: '上报事件',
            data: [0,3, 4, 3, 5, 4, 10, 12]
        },{
            name: '工作事项',
            data: [5,1, 3, 4, 3, 3, 5, 4]
        }]
    });

});                                                                     