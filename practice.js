var timeBlocks = $("#timeblocks");
var currentHour = moment();

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

// Create hour of day (adjusts for AM/PM), text area for tasks, and save button

// making the schedule
function createSchedule() {
  for (i = 9; i < 18; i++) {
    if (i > 12) {
      var newAdd = `
                <div id="${i}" class= "row schedule_input">
                    <div class="hour col-1">${i - 12 + "PM"}</div>
                    <textarea name="" id="" class="description col-10" placeholder"Available"></textarea>
                    <button type="button" class="btn btn-primary col-1 saveBtn">${saveIcon}</button>
                </div>`;

      $("#timeblocks").append(newAdd);
    } else {
      var newAdd = `
                <div id="${i}" class= "row schedule_input">
                    <div class="hour col-1">${i + "AM"}</div>
                    <textarea name="" id="" class="description col-10"></textarea>
                    <button type="button" class="btn btn-primary col-1 saveBtn">${saveIcon}</button>
                </div>`;

      $("#timeblocks").append(newAdd);
    }
  }
}
createSchedule();

// setting key and value for local storage
$(".saveBtn").on("click", function () {
  var notes = $(this).siblings(".description").val();
  var hour = $(this).parent().attr("id");
  localStorage.setItem(hour, notes);
  console.log(hour, notes);
});

//  this function highlights specific divs for the time of day.
// function changeColors() {

// }

$(".schedule_input").each(function () {
  
  if ($(this).attr('id') === showTime) {
    $(this).addClass("present");
  } else if ($(this).attr('id') < showTime) {
    $(this).addClass("future");
  } else {
    $(this).addClass("past");
  }
});

// changeColors();

// todo -----add local storage

$(".description").each(function () {
  var scheduledNotes = localStorage.getItem($(this).parent().attr("id"));
  $(this).val(scheduledNotes);
});
