//clock with hours:minutes:seconds
// hours converted to 12hr type
// setInterval is essentially a refresh every 1sec
setInterval(timer, 1000)
function timer(){
    var clock = new Date();
    var hh = String((clock.getHours() + 24) % 12 || 12).padStart(2, "0");
    var mm = String(clock.getMinutes()).padStart(2, "0");
    var ss = String(clock.getSeconds()).padStart(2, "0");
    var meridiem = String(clock.getHours()) > 12 ? "PM" : "AM";
    
    clock = hh + ":" + mm + ":" + ss + " " + meridiem;
    document.getElementById("clock").innerHTML = clock;
}