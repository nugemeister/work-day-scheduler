// console.log('hello from file');

// Universal Variables
var textArea = document.getElementsByTagName("textarea");
var timeBlocks = $("#timeblocks");
var jumbotronEl = $(".jumbotron");
var infoEl = $("#info")

console.log(textArea);

// Variables for hour array (may not need this anymore)
var tense = "";
var i = 0;

// DECLARE Current Time (in hour format - need this for tense determination later!)
var currentHour = moment().format("H");
console.log(currentHour);

// SHOW Current Time (at top of page)
function showTime() {
    setInterval(function () {
        let today = moment();
        $("#large-time").text(today.format("[It is ] MMMM Do YYYY, h:mm:ss a"));
    });
}

showTime();

// DECLARE Current Day Element
var currentDayEl = $("#currentDay");

// DECLARE Time Entries Container Element
var containerEl = $("#container");


// Determine if the time block id is past, present, or future
function determineTense() {
    for (i = 8; i < 18; i++) {
        if (i < currentHour) {
            document.getElementById(i).classList.add('past');
            tense = "past";
        } else if (i == currentHour) {
            document.getElementById(i).classList.add('present');
            tense = "present";
        } else {
            document.getElementById(i).classList.add('future');
            tense = "future";
            console.log(tense)
        }
    // LOCAL STORAGE - Click event for button that saves each time slot's data
    $("#"+i+"-button").on("click", function(event) {
        var buttonHour = $(event.target).data("hour");
        localStorage.setItem(("hour-" + buttonHour), $("#" + buttonHour).val());
        console.log("saved to local storage!")
    });
    $("#"+i).val(localStorage.getItem("hour-" + i))
    }
}
determineTense();


