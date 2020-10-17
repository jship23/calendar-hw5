//get and display current date & time
var currentDay = $("#currentDay").text(moment().format("dddd, MMMM Do h:mm A"));




//create function to loop through each hour and check for past,present,future
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



//store text that is saved
$(".saveBtn").on("click", function(){
    //get values from textarea
    var value = $(this).siblings(".description").val();
    var saveTime = $(this).parent().attr("id")
    //save to local storage
    localStorage.setItem(saveTime, value);
   
    
    
})
//get values from storage
$("#9 .description").val(localStorage.getItem("9"));
$("#10 .description").val(localStorage.getItem("10"));
$("#11 .description").val(localStorage.getItem("11"));
$("#12 .description").val(localStorage.getItem("12"));
$("#13 .description").val(localStorage.getItem("13"));
$("#14 .description").val(localStorage.getItem("14"));
$("#15 .description").val(localStorage.getItem("15"));
$("#16 .description").val(localStorage.getItem("16"));
$("#17 .description").val(localStorage.getItem("17"));