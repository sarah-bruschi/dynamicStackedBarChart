<script>
var csv_file_API = './top10s.csv';

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
                        value['FIRST NAME'] +
                    '</span>' +

                    '<span style="margin-right: 2rem; font-size: 2rem; font-weight: bold; color: #37474F">' +
                        value['LAST NAME'] +
                    '</span>' +

                    '<span class="badge badge-primary badge-pill">' +
                        value.CITY +
                    '</span>' +

                    '<span class="badge warning-color-dark badge-pill">' + 
                        value['PHONE NUMBER'] +
                    '</span>' +

                    '<span class="badge success-color-dark badge-pill">' +
                        value['EMAIL ADDRESS'] +
                    '</span>' +

                '</li>'
            );

        });

    } // end: Ajax success API call

}); // end: of Ajax call
</script>