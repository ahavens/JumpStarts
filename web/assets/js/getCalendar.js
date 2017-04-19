$(document).ready(function() {
    $.ajax({
        type: "GET",
        //should go to this URL
        url: 'http://54.201.62.39/php/videos.php',
        data:"{}",
        success: function(data)
        {
            if (data === '?????????????????????????????????') {

              /* 
              ** These lines replace data fields with that of the user's data from the db
              ** Self Memo: Not sure if this is functional, idk how to use the cookies with this. (Gavin)
              ** Also: this query confuses me. Am I just getting the videos in total, with like a total viewcount? idk.
              */

              //Populate Calendar
              $('#calendar_0').text(data.calendar[0]);
              $('#calendar_1').text(data.calendar[1]);
              $('#calendar_2').text(data.calendar[2]);
              $('#calendar_3').text(data.calendar[3]);
              $('#calendar_4').text(data.calendar[4]);
              $('#calendar_5').text(data.calendar[5]);

              //Populate Badges
              var total_views = 0;
              data = $.parseJSON(data.calendar);
              $.each(data, function(i, item) {
                alert(item);
              });
            
            }
            else {
                alert(data);
            }
        }
    });

});