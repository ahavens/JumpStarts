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
               $('#manifesto_project_name').text(data.project_name);
               $('#manifesto_time').text((data.time).toString());
               $('#manifesto_day').text(data.day);

               //Populate Edit User Details (Can't set time placeholder so ignore that field)
               $('#project_name').attr("placeholder", data.project_name);
               $('#pnumber').attr("placeholder", data.pnumber);
               $('#email').attr("placeholder", data.email);
               $('#day').attr("placeholder", data.day);
            }
            else {
                alert(data);
            }
        }
    });

});