
var csv_file_API = './2019top10.csv';

$(document).ready(function () {



// read csv file and convert to json format
$.ajax({

    type: 'GET', 

    url: csv_file_API,

    dataType: 'text',

    error: function (e) {
        alert('An error occurred while processing API calls');
        console.log("API call Failed: ", e);
    },

    success: function (data) {

        var jsonData = $.csv.toObjects(data);

        console.log(jsonData);

        $.each(jsonData, function (index, value) {

            $('#showCSV').append(

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

                    '<td>' +
                    value['nrgy'] +
                    '</td>' +

                    '<td>' +
                    value['dnce'] +
                    '</td>' +

                    '<td>' +
                    value['dB'] +
                    '</td>' +

                    '<td>' +
                    value['live'] +
                    '</td>' +

                    '<td>' +
                    value['val'] +
                    '</td>' +

                    '<td>' +
                    value['dur'] +
                    '</td>' +

                    '<td>' +
                    value['acous'] +
                    '</td>' +

                    '<td>' +
                    value['spch'] +
                    '</td>' +

                    '<td>' +
                    value['pop'] +
                    '</td>' +
                '</tr>'
            );

        });

    } // end: Ajax success API call

}); // end: of Ajax call

});//end document on ready 