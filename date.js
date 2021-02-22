//establish updated variables; array of names
//accounts for location/timezone etc
const today = new Date();
const date = today.getDate();
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

//function to build current date display
const displayDate = () => {
  const dayName       = days[today.getDay()] + ", ";
  const monthName     = months[today.getMonth()]+ " ";
  const ordinalSuffix = toOrdinalSuffix(date)+ " ";
  const year          = today.getFullYear();
  
  const display = dayName + monthName + ordinalSuffix + year;
  document.getElementById("date").textContent = display;
}

const toOrdinalSuffix = (number) => {
  if (number < 10 || number > 20) {
    switch (number % 10) {
      case 1:
        return number + 'st';
      case 2:
        return number + 'nd';
      case 3:
        return number + 'rd';
    }
    return number + 'th';
  }
};
displayDate();