function secToMils(seconds)
{
    return seconds * 1000;
}

function printTime()
{
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
}

var delayTimerID = setInterval(printTime, secToMils(1))