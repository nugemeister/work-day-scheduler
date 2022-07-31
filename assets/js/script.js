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
    if (document.getElementById("8,9,10,11,12,1,2,3,4,5,6,7") < currentHour) {
        document.getElementById("8,9,10,11,12,1,2,3,4,5,6,7").classList.add('past');
        tense = "past";
    } else if (document.getElementById("textArea") == currentHour) {
        document.getElementById("textArea").classList.add('present');
        tense = "present";
    } else {
        document.getElementById("textArea").classList.add('future');
        tense = "future";
        console.log(tense)
    }
}


// Click event for button that saves each time slot's data, displays temporary notice of schedule being saved.
containerEl.on("click", "i, button", function(event) {
    var buttonHour = $(event.target).data("hour");
    localStorage.setItem(("hour-" + buttonHour), $("#" + buttonHour).val());
    infoEl.text((moment(buttonHour, "H").format("hA")) + " schedule saved to Local Storage.")
    setTimeout(textClear, 1000);
    console.log("saved to local storage!")
});
