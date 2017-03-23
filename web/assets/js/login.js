$(document).ready(function() {

    $('#loginForm').click(function() {

        $.ajax({
            type: "POST",
            //should go to this URL
            url: 'http://54.201.62.39/php/login.php',
            data: {
                username: $("#username").val(),
                password: $("#password").val()
            },
            success: function(data)
            {
                if (data === 'Correct') {
                    location.href("userdashboard_2.0.html");
                    //window.location.replace('admin/admin.php');
                }
                else {
                    alert(data);
                }
            }
        });

    });

});