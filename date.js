var today = new Date();
        var days = ["Sunday", "Monday", "Tueday", "Wedday", "Thuday", "Friday", "Satday"];
        var dayName = days[today.getDay()];
        var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        var monthName = months[today.getMonth()];
        var dd = String(today.getDate()).padStart(2, "0");
        const toOrdinalSuffix = num => {
                const int = parseInt(num),
                  digits = [int % 10, int % 100],
                  ordinals = ['st', 'nd', 'rd', 'th'],
                  oPattern = [1, 2, 3, 4],
                  tPattern = [11, 12, 13, 14, 15, 16, 17, 18, 19];
                return oPattern.includes(digits[0]) && !tPattern.includes(digits[1])
                  ? int + ordinals[digits[0] - 1]
                  : int + ordinals[3];
              };
        var ordinalSuffix = toOrdinalSuffix(dd)
        var yyyy = today.getFullYear();

        today = dayName + ", " + monthName + " " + ordinalSuffix + " " + yyyy;
        document.getElementById("date").innerHTML = today;