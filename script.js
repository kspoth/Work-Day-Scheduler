
//Variables for the functions
var currentDay = $("#currentDay");
var scheduleArea = $(".schedule");
var timeRow = $(".time-row");
var currentDate = moment().format("dddd, MMMM Do");
var currentHour = moment().format("H");
var toDoItems = [];

// Function that starts the schecduler
function startSchedule(){

    timeRow.each(function(){
    var thisRow = $(this);
    var thisRowHr = parseInt(thisRow.attr("data-hour"));

    var todoObj = {
      hour: thisRowHr,
      text: "",
    }
    toDoItems.push(todoObj);
  });
  
  //Saves to local storage.
  localStorage.setItem("todos", JSON.stringify(toDoItems)); 
};

function saveIt(){
  var hourToUpdate = $(this).parent().attr("data-hour");
  var itemToAdd = (($(this).parent()).children("textarea")).val(); 
  for (var j = 0; j < toDoItems.length; j++){
    if (toDoItems[j].hour == hourToUpdate){
     
      toDoItems[j].text = itemToAdd;
    }
  }
  localStorage.setItem("todos", JSON.stringify(toDoItems));
  renderSchedule();
}

//Function that allows the rows to change color.
function setUpRows(){
  timeRow.each(function(){
  var thisRow = $(this);
  var thisRowHr = parseInt(thisRow.attr("data-hour"));

  if (thisRowHr == currentHour) {
    thisRow.addClass("present").removeClass("past future");
  }
  if (thisRowHr < currentHour) {
    thisRow.addClass("past").removeClass("present future");
  }
  if (thisRowHr > currentHour) {
    thisRow.addClass("future").removeClass("past present");
  }
});
}

//Function that renders the scheduler.
function renderSchedule(){
  
  toDoItems = localStorage.getItem("todos");
  toDoItems = JSON.parse(toDoItems);
    
  for (var i = 0; i < toDoItems.length; i++){
    var itemHour = toDoItems[i].hour;
    var itemText = toDoItems[i].text; 
   
    $("[data-hour=" + itemHour + "]").children("textarea").val(itemText);
  }
}
$(document).ready(function(){
  setUpRows();

if(!localStorage.getItem("todos")){
  
  startSchedule();
} 

//Displays today's date.
currentDay.text(currentDate);


renderSchedule();

scheduleArea.on("click", "button", saveIt);

});