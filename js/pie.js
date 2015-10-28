//pie chart

$(function () {

//$(document).ready(function () {

// Build the chart
$('#pie').highcharts({
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        height: 400,
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
            color: "#CFA4A1"
        }, {
            name: "Restart",
            y: 4,
            color:"#E7D1D0"

        }, {
            name: "Turnaround",
            y: 20,
            color: '#AA5F5A'
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
