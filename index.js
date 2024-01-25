function getDay(){
    let offset = 0
    let day = new Date();
    let currentDate = day.getDate()
    const compareDate = new Date("January 8, 2024 00:00:00").getDate();
    let weekday;

    if (day.getDay() == 6) {
        currentDate = currentDate + 2
    } else if (day.getDay() == 0) { 
        currentDate = currentDate + 1
    } else {
        weekday = true
    }

    let daydiff = currentDate - compareDate;
    let weekspassed = Math.floor(daydiff / 7);
    let weekends = weekspassed * 2;
    daydiff = daydiff - weekends;

    let schoolday = (daydiff % 4) + 1;
    schoolday = schoolday + offset
    if (weekday == true){
        document.getElementById("day").innerHTML = "Il est jour " + schoolday;
    } else{
        document.getElementById("day").innerHTML = "Il sera jour " + schoolday + " lundi.";
    }
}