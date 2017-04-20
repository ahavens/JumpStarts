function populateManifesto(){
    /*
    ** Submit changes to user's account
    */
    $.ajax({
      type: "POST",
            //should go to this URL
            url: 'http://54.201.62.39/php/edit_user_details.php',
            data: {
              project_name: $("#project_name").val(),
              pnumber: $("#pnumber").val(),
              email: $("#email").val(),
              day: $("#day").val(),
              time: $("#time").val()
            },
            success: function(data)
            {
              if (data === 'idk what the response for this would be') {
                location.href("userdashboard_2.0.html");
              }
              else {
                alert(data);
              }
            }
          });

    return;
}


$(document).ready(function(){

    populateManifesto();

    /*
    ** Toggle show/hide the "edit user details" form
    */
    $("#change_profile").hide();  
    $("#change_profile_button").click(function(){
        $("#change_profile").show();
        $("#change_profile_button_container").hide();
    });

    $("#cancel_changes").click(function(){
        $("#change_profile").hide();
        $("#change_profile_button_container").show();
    });

   /*
    ** Log Out
    ** Probably some weird cookie shit happens here idk
    */  
    $("#logout").click(function(){
        //Logout somehow
    });


});