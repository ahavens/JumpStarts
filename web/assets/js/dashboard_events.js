$(document).ready(function(){

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

    $(".sub_toggle").click(function(){
        //Toggle subscription status
    });

     $("#subscription_status").replaceWith("You are currently <b>subscribed</b> to weekly Jumpstarts. Don't want to be? <u class=\"sub_toggle\">Click here.</u>");

});