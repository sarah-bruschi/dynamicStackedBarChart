
var csv_file_API = './top10s.csv';

// $(document).ready(function () {



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
                    
                    '<span style="margin-right: 2rem; font-size: 2rem; font-weight: bold; color: #37474F">' +
                        value['Title'] +
                    '</span>' +

                    '<span style="margin-right: 2rem; font-size: 2rem; font-weight: bold; color: #37474F">' +
                        value['Artist Name'] +
                    '</span>' +

                    '<span class="badge badge-primary badge-pill">' +
                        value['Top Genre'] +
                    '</span>' +

                    '<span class="badge warning-color-dark badge-pill">' + 
                        value['Year'] +
                    '</span>' +

                    '<span class="badge success-color-dark badge-pill">' +
                        value['BPM'] +
                    '</span>' +

                    '<span class="badge success-color-dark badge-pill">' +
                    value['NRGY'] +
                    '</span>' +

                    '<span class="badge success-color-dark badge-pill">' +
                    value['dnce'] +
                    '</span>' +

                    '<span class="badge success-color-dark badge-pill">' +
                    value['dB'] +
                    '</span>' +

                    '<span class="badge success-color-dark badge-pill">' +
                    value['live'] +
                    '</span>' +

                    '<span class="badge success-color-dark badge-pill">' +
                    value['val'] +
                    '</span>' +

                    '<span class="badge success-color-dark badge-pill">' +
                    value['dur'] +
                    '</span>' +

                    '<span class="badge success-color-dark badge-pill">' +
                    value['acous'] +
                    '</span>' +

                    '<span class="badge success-color-dark badge-pill">' +
                    value['spch'] +
                    '</span>' +

                    '<span class="badge success-color-dark badge-pill">' +
                    value['pop'] +
                    '</span>' +
                '</li>'
            );

        });

    } // end: Ajax success API call

}); // end: of Ajax call

// });//end document on ready 