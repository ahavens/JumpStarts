$(document).ready(function() {
    $.ajax({
        type: "GET",
        //should go to this URL
        url: 'http://54.201.62.39/php/user.php',
        data:"{}",
        success: function(data)
        {
            if (data === 'got user') {

               $('#fname').replaceWith('<u>' + data.fname + '</u>');
               $('#fname').replaceWith('<u>' + data.fname + '</u>');
               $('#fname').replaceWith('<u>' + data.fname + '</u>');
               $('#fname').replaceWith('<u>' + data.fname + '</u>');
            }
            else {
                alert(data);
            }
        }
    });

});