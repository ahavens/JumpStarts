function toggle_subscription() {
    $.ajax({
      method: "POST",
      url: 'http://54.201.62.39/php/????????????????????.php',
      data: { } //Some cookie shit
    })
   success: function(data) {
        if(data.success == true){ // if callback is good
            location.reload(); // then reload the page.
        }
    }
}

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
        toggle_subscription();
    });

});