$(document).ready(function(){

    /*
    ** Toggle show/hide the "edit user details" form
    */
    $("#change_profile").hide();  
    $("#change_profile_button").click(function(){
        $("#change_profile").show();
        $("#change_profile_button_container").hide(); //I know it's gross but it works
    });

    $("#cancel_changes").click(function(){
        $("#change_profile").hide();
        $("#change_profile_button_container").show(); //I know it's gross but it works
    });


    /*
    ** Populate user data into the "edit user details" form
    */
    

});