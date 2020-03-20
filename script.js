
var csv_file_API = './2019top10.csv';

$(function() {

    var titles =  [];
    var artist =  [];
    var bpm =  [];

// read csv file and convert to json format
$.ajax({

    type: 'GET', 

    url: csv_file_API,

    dataType: 'text',

    error: function (e) {
        alert('An error occurred while processing API calls');
        // console.log("API call Failed: ", e);
    },

    success: function (data) {

        var jsonData = $.csv.toObjects(data);

        // console.log(jsonData);

        $.each(jsonData, function (index, value) {

            $('#showExcel').append(

                '<tr>' + 
                    '<td>' +
                        value['title'] +
                    '</td>' +

                    '<td>' +
                        value['artist'] +
                    '</td>' +

                    '<td>' +
                        value['top genre'] +
                    '</td>' +

                    '<td>' + 
                        value['year'] +
                    '</td>' +

                    '<td>' +
                        value['bpm'] +
                    '</td>' +
                '</tr>'
            );
            titles.push(value['title'],);
            artist.push(value['artist'],);
            bpm.push(value['bpm'],);
        });
    } // end: Ajax success API call

}); // end: of Ajax call

let totalTitles = totalTitles.push(titles);
let totalArtist = totalArtist.push(artist);
let totalBPM = totalBPM.push(bpm);

console.log(titles);
console.log(artist);
console.log(bpm);
console.log(totalTitles.length);
console.log(totalArtist.length);
console.log(totalBPM.length);


var colors = ['##FF6633', '##4D80CC', '##FF33FF', '##FFFF99', '##00B3E6',
'##E6B333', '##3366E6', '##999966', '##99FF99', '##B34D4D',
  '##80B300', '##809900', '##E6B3B3', '##6680B3', '##66991A',
'##FF99E6', '##CCFF1A', '##FF1A66', '##E6331A', '##33FFCC',
  '##66994D', '##B366CC', '##4D8000', '##B33300', '##CC80CC',
'##66664D', '##991AFF', '##E666FF', '##4DB3FF', '##1AB399',
  '##E666B3', '##33991A', '##CC9999', '##B3B31A', '##00E680',
'##4D8066', '##809980', '##E6FF80', '##1AFF33', '##999933',
  '##FF3380', '##CCCC00', '##66E64D', '##4D80CC', '##9900B3',
'##E64D66', '##4DB380', '##FF4D4D', '##99E6E6', '##6666FF'];

arrTrace = [];


for (i = 0; i < titles.length; i++) {
  var  trace   = {
                x: [titles[i]],
                y: [bpm[i]],
                name: [artist[i]],
                type:'bar',
                marker: {
                    color: 'colors[i]',
                        opacity: 0.7
                    }
            };
 arrTrace[i] = trace; 
};

var data = arrTrace;

layout = {
    title: {
        text:'Top 100 songs bpm',
        font: {
            family: 'Helvetica Neue, Helvetica, Arial, sans-serif',
            size: 24
        },
        xref: 'paper',
        x: 0
    },
    legend: {
        x: 0,
        y: 1.15,
        "orientation": "h"},
    barmode: 'stack',
    xaxis: {tickangle: 0,
        showgrid: false,
        zeroline: false,
        showline: false
    },
    yaxis: {
        showticklabels: false,
        showgrid: false,
        zeroline: false,
        showline: false

    }

};

var config = {responsive: true};


Plotly.newPlot('plot', data, layout, {displaylogo: false}, config);
  




});//end document on ready 