//map

$(function () {

    // State info
    var data = [
        {
            "hc-key": "us-ma",
            "value": 42
        },
        {
            "hc-key": "us-wa",
            "value": 27
        },
        {
            "hc-key": "us-ca",
            "value": 128
        },
        {
            "hc-key": "us-or",
            "value": 18
        },
        {
            "hc-key": "us-wi",
            "value": 21
        },
        {
            "hc-key": "us-me",
            "value": 10
        },
        {
            "hc-key": "us-mi",
            "value": 51
        },
        {
            "hc-key": "us-nv",
            "value": 17
        },
        {
            "hc-key": "us-nm",
            "value": 18
        },
        {
            "hc-key": "us-co",
            "value": 33
        },
        {
            "hc-key": "us-wy",
            "value": 5
        },
        {
            "hc-key": "us-ks",
            "value": 12
        },
        {
            "hc-key": "us-ne",
            "value": 15
        },
        {
            "hc-key": "us-ok",
            "value": 16
        },
        {
            "hc-key": "us-mo",
            "value": 55
        },
        {
            "hc-key": "us-il",
            "value": 32
        },
        {
            "hc-key": "us-in",
            "value": 18
        },
        {
            "hc-key": "us-vt",
            "value": 10
        },
        {
            "hc-key": "us-ar",
            "value": 13
        },
        {
            "hc-key": "us-tx",
            "value": 101
        },
        {
            "hc-key": "us-ri",
            "value": 8
        },
        {
            "hc-key": "us-al",
            "value": 21
        },
        {
            "hc-key": "us-ms",
            "value": 16
        },
        {
            "hc-key": "us-nc",
            "value": 59
        },
        {
            "hc-key": "us-va",
            "value": 26
        },
        {
            "hc-key": "us-ia",
            "value": 9
        },
        {
            "hc-key": "us-md",
            "value": 15
        },
        {
            "hc-key": "us-de",
            "value": 11
        },
        {
            "hc-key": "us-pa",
            "value": 92
        },
        {
            "hc-key": "us-nj",
            "value": 20
        },
        {
            "hc-key": "us-ny",
            "value": 120
        },
        {
            "hc-key": "us-id",
            "value": 8
        },
        {
            "hc-key": "us-sd",
            "value": 5
        },
        {
            "hc-key": "us-ct",
            "value": 18
        },
        {
            "hc-key": "us-nh",
            "value": 14
        },
        {
            "hc-key": "us-ky",
            "value": 21
        },
        {
            "hc-key": "us-oh",
            "value": 79
        },
        {
            "hc-key": "us-tn",
            "value": 47
        },
        {
            "hc-key": "us-wv",
            "value": 20
        },
        {
            "hc-key": "us-dc",
            "value": 15
        },
        {
            "hc-key": "us-la",
            "value": 21
        },
        {
            "hc-key": "us-fl",
            "value": 101
        },
        {
            "hc-key": "us-ga",
            "value": 45
        },
        {
            "hc-key": "us-sc",
            "value": 25
        },
        {
            "hc-key": "us-mn",
            "value": 26
        },
        {
            "hc-key": "us-mt",
            "value": 7
        },
        {
            "hc-key": "us-nd",
            "value": 2
        },
        {
            "hc-key": "us-az",
            "value": 29
        },
        {
            "hc-key": "us-ut",
            "value": 13
        },
        {
            "hc-key": "us-hi",
            "value": 1
        },
        {
            "hc-key": "us-ak",
            "value": 11
        },
        {
            "value": 51
        }
    ];

    // Initiate the map
    $('#map').highcharts('Map', {

        title : {
            text : 'Number of SIG-Awarded Schools by State'
        },

        subtitle : {
            text : 'This map shows the number of schools that have received improvement grants from 2010-2014. Hover over the map to learn more.'
        },

        mapNavigation: {
            enabled: true,
            buttonOptions: {
                verticalAlign: 'bottom'
            }
        },

        colorAxis: {
              min: 1,
              max: 150,
              minColor: '#F3E8E7',
              maxColor: '#8E1710'

        },

        series : [{
            data : data,
            mapData: Highcharts.maps['countries/us/us-all'],
            joinBy: 'hc-key',
            name: 'Total schools',
            states: {
                hover: {
                    color: '#6C160F'
                }
            },
            dataLabels: {
                enabled: true,
                format: '{point.name}'
            }
        }, {
            name: 'Separators',
            type: 'mapline',
            data: Highcharts.geojson(Highcharts.maps['countries/us/us-all'], 'mapline'),
            color: 'silver',
            showInLegend: false,
            enableMouseTracking: false
        }]
    });
});
