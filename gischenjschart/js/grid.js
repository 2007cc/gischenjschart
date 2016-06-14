$(function () {
    
    
    /**
 * Grid-light theme for Highcharts JS
 * @author Torstein Honsi
 */



Highcharts.theme = {
    global: {                                                               
                useUTC: false                                                       
            } ,
    colors: ["#7cb5ec", "#f7a35c", "#90ee7e", "#7798BF", "#aaeeee", "#ff0066", "#eeaaee",
        "#55BF3B", "#DF5353", "#7798BF", "#aaeeee"],
    chart: {
        backgroundColor: null,
        style: {
            fontFamily: "Dosis, sans-serif"
        },
        type: 'area'
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
        borderWidth: 0,
        backgroundColor: 'rgba(219,219,216,0.8)',
        shadow: false,
        formatter:function(){
            return Highcharts.dateFormat('%H:%M', this.x)+'     +'+this.y;
        }
    },
    legend:{
        enabled:false
    },
    xAxis: {
        gridLineWidth: 1,
        labels: {
            style: {
                fontSize: '12px'
            },
            align: 'left',
            formatter:function(){
                // var date=new Date(this.value);
                // return date.getHours()+':'+date.getMinutes();
                return Highcharts.dateFormat('%H:%M', this.value);
            } 
        },
        tickmarkPlacement:'between',
        type:'datetime',
        tickLength:0,
        showFirstLabel: true,
        showLastLabel:false,
        tickPixelInterval: 80,

    },
    yAxis: {
        // minorTickInterval: 'auto',
        title: {
            style: {
                textTransform: 'uppercase'
            },
            text: '数量'
        },
        labels: {
            step: 2,
            style: {
                fontSize: '12px'
            }
        },
        endOnTick:true,
        min:0,
        tickInterval:100
    },

    credits: {
        enabled: false
    },
    // General
    background2: '#F0F0EA'
    
};

    // Apply the theme
    Highcharts.setOptions(Highcharts.theme);
    

    
    var highcharts=$('#container').highcharts({
        chart: {                                                                
                                                  
            events: {                                                           
                load: function() {                                              
                                                                                
                    // set up the updating of the chart each second             
                    var series = this.series[0];                                
                    setInterval(function() {                                    
                        var x = ((new Date()).getTime())-1*1000 // current time         
                            y = Math.random()*800;                                  
                        series.addPoint([x, y], true, true);                    
                    }, 1000);                                                   
                }                                                               
            }                                                                   
        },            

        xAxis: {
            // categories: [
            //     '8:00',
            //     '8:30',
            //     '9:00',
            //     '9:30',
            //     '10:00',
            //     '10:30',
            //     '11:00'
            // ],

        },
        yAxis: {
            

        },


        series: [{
            name: 'Jane',
            data: (function() {                                                 
                    // generate an array of random data                             
                    var data = [],                                                  
                        time = (new Date()).getTime(),                              
                        i;                                                          
                                                                                    
                    for (i = -100; i <= 0; i++) {                                    
                        data.push({                                                 
                            x: time + i * 1000,                                     
                            y: Math.random() *800                                       
                        });                                                         
                    }                                                               
                    return data;                                                    
                })()    
        }]
    });


});             