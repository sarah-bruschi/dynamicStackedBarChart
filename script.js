
var csv_file_API = './2019top10.csv';

$(document).ready(function () {



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

        });

    } // end: Ajax success API call

}); // end: of Ajax call

var titles =  [jsonData.title];
var bpm =  [jsonData.bpm];

console.log(titles);
console.log(bpm);
});//end document on ready 