// console.log('hello from file');

// Universal Variables
var textAreaTest = document.getElementsByTagName("textarea");
var timeBlocks = $("#timeblocks");
var jumbotronEl = $(".jumbotron");
var infoEl = $("#info")

// DECLARE Current Time (in hour format)
var currentHour = moment().format("H");
console.log(currentHour)

// SHOW Current Time (at top of page)
function showTime() {
    setInterval(function () {
        let today = moment();
        $("#H-Time").text(today.format("[It is ] MMMM Do YYYY, h:mm:ss a"));
    });
}

showTime();

// DECLARE Current Day Element
var currentDayEl = $("#currentDay");

// DECLARE Time Entries Container Element
var containerEl = $("#container");

// Render a block for each hour of the day
generateSchedule();

// Function for generating the schedule layout
function generateSchedule() {
    for (i = 0; i < schedulerArray.length; i++) {
        blockTime = moment(schedulerArray[i], "H").format("hA");
        addTimeBlock();
        determineTense();
    }
}

    // Function for adding the time block 
    function addTimeBlock() {
        var existingEntry
    }

    // Determine if the time block is past, present, or future
    function determineTense() {
        if (schedulerArray[i] < currentHour) {
            tense = "past";
        } else if (schedulerArray[i] == currentHour) {
            tense = "present";
        } else {
            tense = "future";
        }
    }

// Save an hour to local storage


