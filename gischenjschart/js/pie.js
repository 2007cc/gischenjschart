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
        text: ''
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
        height: 300,
        width:150,
        itemWidth:100,
        itemMarginTop:10,
        itemMarginBottom:10,
        floating: true,
        align: 'right',
        x: -270, 
        y:100,
        itemWidth: 70,
        borderWidth: 1,
        verticalAlign: 'bottom',
    },

    credits: {
        enabled: false
    },

  plotOptions: {
        pie: {
            shadow: false,
            center: ['50%', '70%'],
            showInLegend: true
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

        series: [{
            type: 'pie',    
            name: 'Versions',
            data: [
                ['Firefox',   44.2],
                ['IE7',       26.6],
                ['IE6',       20],
                ['Chrome',    3.1],
                ['Chrome',    3.1],
                ['Chrome',    3.1],
                ['Chrome',    3.1],
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
        }]
    });

    
});             