AOS.init();
const dateFuture = new Date("mar 05,2025 19:00:00");
const timeStampEvent = dateFuture.getTime();
const countingTheHours = setInterval(function() {
    const now = new Date();
    const timeStampCurrent = now.getTime();
    const timeToEvent = timeStampEvent - timeStampCurrent;
    const dayIsMs = 86400000;
    const hoursIsMs = 3600000;
    const minutesIsMs = 60000;
    const secondsIsMs = 1000;
    const daysToEent = Math.floor(timeToEvent / dayIsMs);
    const hoursToEvent = Math.floor(timeToEvent % dayIsMs / hoursIsMs);
    const minutesToEvent = Math.floor(timeToEvent % hoursIsMs / minutesIsMs);
    const secondsToEvent = Math.floor(timeToEvent % minutesIsMs / secondsIsMs);
    console.log(daysToEent);
    console.log(hoursToEvent);
    console.log(minutesToEvent);
    console.log(secondsToEvent);
    document.getElementById("timer").innerHTML = `${daysToEent}D ${hoursToEvent}H ${minutesToEvent}M ${secondsToEvent}S`;
    if (timeToEvent < 0) {
        clearInterval(countingTheHours);
        document.getElementById("timer").innerHTML = `Conteudo expirado!`;
    }
}, 1000);

//# sourceMappingURL=index.f75de5e1.js.map
