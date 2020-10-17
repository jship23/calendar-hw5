//get and display current date & time
var currentDay = $("#currentDay").text(moment().format("dddd, MMMM Do h:mm A"));


//store text that is saved
$(".saveBtn").on("click", function(){
    //get values from textarea
    var value = $(this).siblings(".description").val();
    var saveTime = $(this).parent().attr("id")
    //save to local storage
    localStorage.setItem(saveTime, value);
    //get value from storage
    localStorage.getItem(saveTime)
})



function updateHour() {
    //current hour
    var currentHour = moment().hours();
    //loop over each time block
    $(".time-block").each(function() {
        var hourBlock = parseInt($(this).attr("id"))

        //if hour is past
        if(hourBlock < currentHour){
            $(this).addClass("past")
        }
        //if hour is current
        else if(hourBlock === currentHour) {
            $(this).addClass("present")
        }
        //if hour is future
        else {
            $(this).addClass("future")
        }
    });
}
updateHour();


