//performance chart

//var $xml = $(xml);
var score = [];
var year = [];
var sigAwd = [];
var sigElig = [];
var nonSig = [];

$(document).ready(function() {

  $.ajax({
      type: 'GET',
      url: 'data.xml',
      dataType: 'xml',
      success: parseData
    });



function parseData(xml){

  $(xml).find("score").each(function(){
    var $score = $(this);
    year.push(parseInt($score.find("year").text()));
    sigAwd.push(parseInt($score.find("sigAwd").text()));
    sigElig.push(parseInt($score.find("sigElig").text()));
    nonSig.push(parseInt($score.find("nonSig").text()));
  })

  buildChart();
} //closes parseData function


function buildChart(xml) {
  var chart = new Highcharts.Chart({
    chart: {
      renderTo: 'performanceChart',
      type: 'line'
    },
    title: {
        text: 'Mean Percentage of Students Performing Below Average in Math 2009-2013',
        x: -20 //center
    },
    subtitle: {
        text: 'Source: Council of the Great City Schools',
        x: -20
    },
    xAxis: {
        categories: year
    },
    yAxis: {
        title: {
            text: 'Percentage of Students'
        },
        plotLines: [{
            min: 0,
            value: 0,
            width: 1,
            color: '#808080'
        }]
    },
    tooltip: {
        valueSuffix: '%'
    },
    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle',
        borderWidth: 0
    },
    series: [{
        name: 'SIG-Awarded',
        data: sigAwd,


    }, {
        name: 'SIG-Eligible',
        data: sigElig
    }, {
        name: 'SIG Non-Eligible',
        data: nonSig
    }]


  });



  $('#performanceChart').highcharts({
          title: {
              text: 'Mean Percentage of Students Performing Below Average in Math 2009-2013',
              x: -20 //center
          },
          subtitle: {
              text: 'Source: Council of the Great City Schools',
              x: -20
          },
          xAxis: {
              categories: year
          }, //debugging
          yAxis: {
              title: {
                  text: 'Percentage of Students'
              },
              plotLines: [{
                  min: 0,
                  value: 0,
                  width: 1,
                  color: '#808080'
              }]
          },
          tooltip: {
              valueSuffix: '%'
          },
          legend: {
              layout: 'horizontal',
              align: 'center',
              verticalAlign: 'bottom',
              borderWidth: 0
          },
          series: [{
              name: 'SIG-Awarded',
              data: sigAwd,
              color: '#0971B2'
          }, {
              name: 'SIG-Eligible',
              data: sigElig,
              color: '#960104'
          }, {
              name: 'SIG Non-Eligible',
              data: nonSig,
              color: '#59651E'
          }]
        });

      }

}); // end doc ready
