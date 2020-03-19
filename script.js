
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

                '<li class="list-group-item d-flex justify-content-between align-items-center">' + 
                    
                    '<span style="margin-right: 2rem; font-size: 1rem; font-weight: bold; color: #37474F">' +
                        value['title'] +
                    '</span>' +

                    '<span style="margin-right: 2rem; font-size: rem; font-weight: bold; color: #37474F">' +
                        value['artist'] +
                    '</span>' +

                    '<span class="">' +
                        value['top genre'] +
                    '</span>' +

                    '<span class=" ">' + 
                        value['year'] +
                    '</span>' +

                    '<span class="  ">' +
                        value['bpm'] +
                    '</span>' +

                    '<span class="  ">' +
                    value['nrgy'] +
                    '</span>' +

                    '<span class="  ">' +
                    value['dnce'] +
                    '</span>' +

                    '<span class=" ">' +
                    value['dB'] +
                    '</span>' +

                    '<span class=" ">' +
                    value['live'] +
                    '</span>' +

                    '<span class="  ">' +
                    value['val'] +
                    '</span>' +

                    '<span class="  ">' +
                    value['dur'] +
                    '</span>' +

                    '<span class=" ">' +
                    value['acous'] +
                    '</span>' +

                    '<span class=" ">' +
                    value['spch'] +
                    '</span>' +

                    '<span class="  ">' +
                    value['pop'] +
                    '</span>' +
                '</li>'
            );

        });

    } // end: Ajax success API call

}); // end: of Ajax call

});//end document on ready 