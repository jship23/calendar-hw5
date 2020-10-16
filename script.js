
//get and display current time
$("#currentDay").text(moment().format("dddd, MMMM Do h:mm A"));

//store text that is saved
$(".saveBtn").on("click", function(){
    //get values from textarea
    var value = $(this).siblings(".description").val();
  
    //save to local storage
    localStorage.setItem("Value", value);
    //get value from storage
    localStorage.getItem("Value");
   
})


//if hour is past

//if hour is current

//if hour is future

