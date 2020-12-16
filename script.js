$(document).ready(function(){
   
    var hour = moment().hour();
    var hourNine = "";
    var hourTen = "";
    var hourEleven = "";
    var hourTwelve = "";
    var hourThirteen = "";
    var hourFourteen = "";
    var hourFifteen = "";
    var hourSixteen = "";
    var hourSeventeen = "";

    
    $("#currentDay").text(moment().format('MMMM Do YYYY, h:mm a'));

   
    function checkHour(){
        if (hour == 9){
            $(".nine").addClass("present");
        }
        if (hour > 9){
            $(".nine").addClass("past");
        }
        if (hour == 10){
            $(".ten").addClass("present");
        }
        if (hour > 10){
            $(".ten").addClass("past");
        }
        if (hour == 11){
            $(".eleven").addClass("present");
        }
        if (hour > 11){
            $(".eleven").addClass("past");
        }
        if (hour == 12){
            $(".twelve").addClass("present");
        }
        if (hour > 12){
            $(".twelve").addClass("past");
        }
        if (hour == 13){
            $(".one").addClass("present");
        }
        if (hour > 13){
            $(".one").addClass("past");
        }
        if (hour == 14){
            $(".two").addClass("present");
        }
        if (hour > 14){
            $(".two").addClass("past");
        }
        if (hour == 15){
            $(".three").addClass("present");
        }
        if (hour > 15){
            $(".three").addClass("past");
        }
        if (hour == 16){
            $(".four").addClass("present");
        }
        if (hour > 16){
            $(".four").addClass("past");
        }
        if (hour == 17){
            $(".five").addClass("present");
        }
        if (hour > 17){
            $(".five").addClass("past");
        }
    }
    
    checkHour();
