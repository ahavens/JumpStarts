//Convert Day from string to integer value 0-7
function convertDay(day) {
    //Ensure that input variable is a string
    if (typeof myVar === 'string' || myVar instanceof String) {
        var converted_day = 6;

        //Check days to find correct number to use
        if (day === "Sunday"){
            converted_day = 0;
        } else if (day === "Monday") {
            converted_day = 1;
        } else if (day === "Tuesday") {
            converted_day = 2;
        } else if (day === "Wednesday") {
            converted_day = 3;
        } else if (day === "Thursday") {
            converted_day = 4;
        } else if (day === "Friday") {
            converted_day = 5;
        }

        return converted_day;
    }
    else {
        alert(typeof day);
    } 
}

//Find the date object of the next Jumpstart send date
function getNextDeliveryDate(day) {
    var converted_delivery_day = convertDay(day);

    //Generate Today's Date
    var today = new Date();
    var day_of_week = today.getDay();

    //Generate date (assume today is delivery day)
    var date_of_delivery = new Date();

    //To hold the difference between today and the next delivery date (start = 0 because we assume that today is delivery date)
    var offset = 0;
    if (day_of_week != converted_delivery_day) {
        if (day_of_week > converted_delivery_day) {
            offset = day_of_week - converted_delivery_day;
            offset = 7 - offset;
        } else {
            offset = converted_delivery_day - day_of_week;
        }
    }

    //Create date of next jumpstart delivery by adding offset to today's date
    date_of_delivery.setDate(date_of_delivery.getDate() + offset);
    return date_of_delivery;
}

//Generate a String Array of delivery dates for calendar population
function getDeliveryDates(day) {
    //Get the date of the next jumpstart as a seed value
    var next_delivery_date = getNextDeliveryDate(day);
    
    var delivery_dates = [];
    var temp_date = new Date();
    var i, dd, mm;
    var offset = -14; //Jumpstart from 2 weeks ago = 14 days ago

    //Using the seed value, calculate previous jumpstart dates (negative offset), next jumpstart date (no offset), and future dates (positive offset) 
    for (i = 0; i < 6; i++){
        temp_date.setDate(next_delivery_date.getDate() + offset);
        dd = temp_date.getDate();
        mm = temp_date.getMonth()+1; //January is 0!
    
        if(dd<10) {
            dd='0'+dd
        } 

        delivery_dates.push(mm+'/'+dd);
        offset += 7;
    }
    return delivery_dates;
}


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

               //Populate Calendar
               var delivery_dates = getDeliveryDates(data.day);
               $('#calendar_0').text(delivery_dates[0]);
               $('#calendar_1').text(delivery_dates[1]);
               $('#calendar_2').text(delivery_dates[2]);
               $('#calendar_3').text(delivery_dates[3]);
               $('#calendar_4').text(delivery_dates[4]);
               $('#calendar_5').text(delivery_dates[5]);

            }
            else {
                alert(data);
            }
        }
    });

});