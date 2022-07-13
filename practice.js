var timeBlocks = $("#timeblocks");
var currentHour = (moment());
var today = $("currentDay");
var saveIcon = `<i class="fas fa-save"></i>`;
var textAreaTest = document.getElementsByTagName("textarea");

// prints the current time on the header
function showTime() {
  setInterval(function () {
    let today = moment();
    $("#H-Time").text(today.format("[It is ]  MMMM Do YYYY, h:mm:ss a"));
  });
}

showTime();

// // Create hour of day (adjusts for AM/PM), text area for tasks, and save button

// making the schedule
function createSchedule() {
  for (i = 9; i < 18; i++) {
    if (i > 12) {
      var hourRow = `
                <div id="${i}" class= "row time-block">
                    <div class="hour col-1">${i - 12 + " PM"}</div>
                    <textarea name="" id="" class="description col-10"></textarea>
                    <button type="button" class="btn btn-primary col-1 saveBtn">${saveIcon}</button>
                </div>`;

      $("#timeblocks").append(hourRow);
    } else {
      var hourRow = `
                <div id="${i}" class= "row time-block">
                    <div class="hour col-1">${i + " AM"}</div>
                    <textarea name="" id="" class="description col-10"></textarea>
                    <button type="button" class="btn btn-primary col-1 saveBtn">${saveIcon}</button>
                </div>`;

      $("#timeblocks").append(hourRow);
    }
  }
}

createSchedule();


//  this function highlights specific divs for thw time of day. 
function changeColors() {
  
  // being that the var is localized, i can change the value to utilize within this function.

  $(".time-block").each(function () {

    

    if ($(this)< currentHour) {
        $(this).addClass('future');
        
        

    } else if ($(this) > currentHour) {
        
        $(this).addClass('past');
    } else {
    
      $(this).addClass('present');
     
    }
  });
}

changeColors();

// todo -----add local storage


