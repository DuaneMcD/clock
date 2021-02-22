//clock with hours:minutes:seconds
// hours converted to 12hr type
// setInterval is essentially a refresh every 1sec
const clockDisplay = () => {
    let date = new Date();
    const hours = addLeadingZero(((date.getHours() + 24) % 12 || 12));
    const minutes = addLeadingZero(date.getMinutes());
    const seconds = addLeadingZero(date.getSeconds());
    const meridiem = date.getHours() > 12 ? "PM" : "AM";
    
    display = hours + ":" + minutes + ":" + seconds + " " + meridiem;
    document.getElementById("clock").textContent = display;
};

const addLeadingZero = (number) => {
    return number < 10 ? '0' + number : number;
};

clockDisplay();
setInterval(clockDisplay, 1000)