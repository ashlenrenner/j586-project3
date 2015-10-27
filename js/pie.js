//pie chart

$(function () {

//$(document).ready(function () {

// Build the chart
$('#pie').highcharts({
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
    title: {
        text: 'Improvement Methods'
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage}%</b>'
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: false
            },
            showInLegend: true
        }
    },
    series: [{
        name: "Percent",
        colorByPoint: true,
        data: [{
            name: "Transformation",
            y: 74,
            color: "#3c6698"
        }, {
            name: "Restart",
            y: 4,
            color:"#59651E"

        }, {
            name: "Turnaround",
            y: 20,
            color: '#CB723C'
        }, {
            name: "Closure",
            y: 2,
            color: "#861B13"
        }]
      }]
}); //end of highcharts function

});


//pie chart info acordion
function toggleChevron(e) {
    $(e.target)
        .prev('.panel-heading')
        .find("i.indicator")
        .toggleClass('glyphicon-chevron-down glyphicon-chevron-up');
}
$('#accordion').on('hidden.bs.collapse', toggleChevron);
$('#accordion').on('shown.bs.collapse', toggleChevron);
