// //DataTables
// var table = $('#sigData').DataTable( {
//     ajax: 'data.json'
// } );


$(document).ready(function() {
    $('#sigDataTable').DataTable( {
        "ajax": "sig-data.txt",
      });
    });
