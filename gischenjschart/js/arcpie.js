$(function () {
    

    Highcharts.theme = {
    global: {                                                               
                useUTC: false                                                       
            } ,
    colors: ["rgba(225,163,163,0.3)", "#f7a35c", "#90ee7e", "#7798BF", "#aaeeee", "#ff0066", "#eeaaee",
        "#55BF3B", "#DF5353", "#7798BF", "#aaeeee"],
        plotBackgroundColor:"#CA5556",
    chart: {
        backgroundColor: null,
        style: {
            fontFamily: "Dosis, sans-serif"
        },
        type: 'pie'
    },
    title: {
        style: {
            fontSize: '16px',
            fontWeight: 'bold',
            textTransform: 'uppercase'
        },
        text: '统计图'
    },
    tooltip: {
        style:{
          color: '#ffffff',
          fontSize: '18px',
          padding: '5px',
          fontWeight:'bold'
        },
        borderWidth: 0,
        backgroundColor: 'rgba(201,92,91,0.9)',
        borderRadius:6,
        shadow: false,
        formatter:function(){
            return Highcharts.dateFormat('%H:%M', this.x)+'     +'+this.y.toFixed();
        },


    },
    legend:{
        enabled:false
    },

    credits: {
        enabled: false
    },

  plotOptions: {
        pie: {
            shadow: false,
            center: ['50%', '50%'],
            startAngle: -90,
            endAngle:90,  
            center: ['50%', '70%']
        }
    },
    // General
    background2: '#F0F0EA'
    
};

// Apply the theme
    Highcharts.setOptions(Highcharts.theme);
    


    // Create the chart
    $('#container').highcharts({

        yAxis: {
            
        },

        series: [ {
            type: 'pie',    
            name: 'Versions',
            data: [
                ['Firefox',   44.2],
                ['IE7',       26.6],
                ['IE6',       20],
                ['Chrome',    3.1],
                ['Other',    5.4]
            ],
            size: '60%',
            innerSize: '50%',
            center: ['15%', '70%'],  
            dataLabels: {
                formatter: function() {
                    // display only if larger than 1
                    return this.y > 1 ? '<b>'+ this.point.name +':</b> '+ this.y +'%'  : null;
                }
            }
        },

        {
            type: 'pie',    
            name: 'Versions',
            data: [
                ['Firefox',   44.2],
                ['IE7',       26.6],
                ['IE6',       20],
                ['Chrome',    3.1],
                ['Other',    5.4]
            ],
            size: '60%',
            innerSize: '50%',
            center: ['50%', '70%'],  
            dataLabels: {
                formatter: function() {
                    // display only if larger than 1
                    return this.y > 1 ? '<b>'+ this.point.name +':</b> '+ this.y +'%'  : null;
                }
            }
        },
        {                                                              
            type: 'pie',                                                  
            name: 'Total consumption',                                    
            data: [{                                                      
                name: 'Jane',                                             
                y: 13,                                                    
                color: Highcharts.getOptions().colors[0] // Jane's color  
            }, {                                                          
                name: 'John',                                             
                y: 23,                                                    
                color: Highcharts.getOptions().colors[1] // John's color  
            }, {                                                          
                name: 'Joe',                                              
                y: 19,                                                    
                color: Highcharts.getOptions().colors[2] // Joe's color   
            }],                                                                           
            size: '60%',
            innerSize: '50%',
            center: ['85%', '70%'],                                                              
            showInLegend: false,                                          
            dataLabels: {                                                 
                enabled: true                                            
            }                                                             
        }

        ]
    });

    
});             