$(document).ready(function() {
    $.ajax({
        type: "GET",
        //should go to this URL
        url: 'http://54.201.62.39/php/user.php',
        data:"{}",
        success: function(data)
        {
            if (data === 'got user') {

                /* 
                ** These lines replace data fields with that of the user's data from the db
                ** Self Memo: Not sure if this is functional, idk how to use the cookies with this. (Gavin)
                */

                //Populate Manifesto
               $('#fname_1').text(data.fname);
               $('#project_name').text(data.project_name);
               $('#fname_2').text(data.fname);
               $('#time').text((data.time).toString());
               $('#day').text(data.day);
            }
            else {
                alert(data);
            }
        }
    });

});