// console.log('hello from file');

// Universal Variables
var textArea = document.getElementsByTagName("textarea");
var timeBlocks = $("#timeblocks");
var jumbotronEl = $(".jumbotron");
var infoEl = $("#info")

console.log(textArea);

// Variables for hour array table
var schedulerArray = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17];
var blockTime = 0;
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

// Function for generating the schedule layout

    // RUN the function
    // generateSchedule();

    //DEFINE the function
    // function generateSchedule() {
    //     for (i = 0; i < schedulerArray.length; i++) {
    //         blockTime = moment(schedulerArray[i], "H").format("hA");
    //         determineTense();
    //         updateTimeBlock();
    //     }
    // }

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
        console.log(tense)

        // Function for adding the actual time block 
        // do not append, target textarea to update
        function updateTimeBlock() {
            var existingEntry = localStorage.getItem("hour-" + schedulerArray[i]);
            if (existingEntry === null) {
                existingItem = "";
            }
            containerEl.append(`
            <div class="row time-block">
            <div class ="hour col-md-2 d-flex justify-content-center align-items-center">${blockTime}</div>

            <textarea class="col-11 col-md-9 ${tense}" id="${schedulerArray[i]}">${existingEntry}</textarea>

            <button data-hour="${schedulerArray[i]}" class="saveBtn col-1 d-flex justify-content-center align-items-center"><i class="fas fa-save" data-hour="${schedulerArray[i]}"></i></button>

            </div>
            `)
            console.log(schedulerArray);
            console.log(existingEntry);

        }


    // Display the schedule layout


// Save an hour to local storage

// Event listener (saving the data)
containerEl.on("click", "i, button", function(event) {
    var buttonHour = $(event.target).data("hour");
    localStorage.setItem(("hour-" + buttonHour), $("#" + buttonHour).val());
    infoEl.text((moment(buttonHour, "H").format("hA")) + " schedule saved to Local Storage.")
    setTimeout(textClear, 1000);
});
// console.log(buttonHour)