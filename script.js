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

    $("#9").on("click", function(){
        hourNine = JSON.stringify($(".inputNine").val());
        localStorage.setItem("hourNine", hourNine);
    })
    $("#10").on("click", function(){
        hourTen = JSON.stringify($(".inputTen").val());
        localStorage.setItem("hourTen", hourTen);
    })
    $("#11").on("click", function(){
        hourEleven = JSON.stringify($(".inputEleven").val());
        localStorage.setItem("hourEleven", hourEleven);
    })
    $("#12").on("click", function(){
        hourTwelve = JSON.stringify($(".inputTwelve").val());
        localStorage.setItem("hourTwelve", hourTwelve);
    })
    $("#13").on("click", function(){
        hourThirteen = JSON.stringify($(".inputThirteen").val());
        localStorage.setItem("hourThirteen", hourThirteen);
    })
    $("#14").on("click", function(){
        hourFourteen = JSON.stringify($(".inputFourteen").val());
        localStorage.setItem("hourFourteen", hourFourteen);
    })
    $("#15").on("click", function(){
        hourFifteen = JSON.stringify($(".inputFifteen").val());
        localStorage.setItem("hourFifteen", hourFifteen);
    })
    $("#16").on("click", function(){
        hourSixteen = JSON.stringify($(".inputSixteen").val());
        localStorage.setItem("hourSixteen", hourSixteen);
    })
    $("#17").on("click", function(){
        hourSeventeen = JSON.stringify($(".inputSeventeen").val());
        localStorage.setItem("hourSeventeen", hourSeventeen);
    })