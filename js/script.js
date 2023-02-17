$(document).ready(function () {
  // Get the current day and display it at the top of the page
  var currentDay = moment().format("dddd, MMMM Do");
  $("#currentDay").text(currentDay); // gets current date / time using moment.js, "dddd, MMMM Do" format, sets text of the #currentDay element to the formatted date.

  // Present timeblocks for standard business hours when the user scrolls down
  var businessHours = [
    "9:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "1:00 PM",
    "2:00 PM",
    "3:00 PM",
    "4:00 PM",
    "5:00 PM",
  ];

  // Create timeblocks for each hour of standard business hours
  for (var i = 0; i < businessHours.length; i++) {
    // Create a row element for each timeblock
    var rowEl = $("<div>").addClass("row time-block");

    // Create an hour element for each timeblock
    var hourEl = $("<div>").addClass("col-md-1 hour").text(businessHours[i]);

    // Create a textarea element for each timeblock
    var descriptionEl = $("<textarea>")
      .addClass("col-md-10 description")
      .addClass(getTimeblockClass(businessHours[i]))
      .val(getEventFromLocalStorage(businessHours[i]));

    // Create a save button element for each timeblock
    var saveBtnEl = $("<button>")
      .addClass("col-md-1 saveBtn")
      .html("<i class='fas fa-save'></i>");

    // Append the hour, description, and save button elements to the row element
    rowEl.append(hourEl, descriptionEl, saveBtnEl);

    // Append the row element to the container element
    $(".container").append(rowEl);
  }

  // Update the class of each timeblock textarea based on the current time
  function updateTimeblockClasses() {
    $(".time-block").each(function () {
      var timeblockHour = $(this).find(".hour").text();
      $(this).find(".description").removeClass("past present future");
      $(this).find(".description").addClass(getTimeblockClass(timeblockHour));
    });
  }

  // This is where the colour coding comes in as function takes in time argument and initialises moment.js objects currentTime and timeblockTime, then uses moment.js isBefore and isAfter to compare both current and block
  // Get the class to use for a given timeblock based on whether it is in the past, present, or future
  function getTimeblockClass(time) {
    var currentTime = moment();
    var timeblockTime = moment(time, "h:mm A");
    if (currentTime.isBefore(timeblockTime, "hour")) {
      return "future";
    } else if (currentTime.isAfter(timeblockTime, "hour")) {
      return "past";
    } else {
      return "present";
    }
  }

  // Get the event for a given timeblock from local storage
  function getEventFromLocalStorage(time) {
    var event = localStorage.getItem(time);
    if (event) {
      return event;
    } else {
      return "";
    }
  }

  // Save the event for a given timeblock to local storage when the save button is clicked
  $(".saveBtn").on("click", function () {
    var timeblockHour = $(this).siblings(".hour").text();
    var event = $(this).siblings(".description").val();
    localStorage.setItem(timeblockHour, event);
  });

  // Call updateTimeblockClasses every 15 minutes to keep the timeblock classes up-to-date
  setInterval(updateTimeblockClasses, 15 * 60 * 1000);
});
