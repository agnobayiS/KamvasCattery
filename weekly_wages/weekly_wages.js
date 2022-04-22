function weeklyWage(band, weeklyHours) {

    let weeklyHours2 = weeklyHours.split(',')
    

    let totalHours = 0

    for (var i = 0; i < weeklyHours2.length; i++) {
        totalHours += parseInt(weeklyHours2[i])
    }
    console.log(totalHours)
    if (weeklyHours2.length < 7) {
        return "missing day"
        
    } else if (band == "A") {
        return 23 * totalHours

    } else if (band == "B") {
        return 37 * totalHours

    }
    else if (band == "C") {
        return 51 * totalHours
    }
    else if (band !== "A" || band !== "B" || band !== "C") {
        return 0
    }


};
