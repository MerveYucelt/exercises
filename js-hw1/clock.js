function showTime() {
    const today = new Date();
    let hr = today.getHours();
    let min = today.getMinutes();
    let sec = today.getSeconds();
    let days = [
        "Pazar",
        "Pazartesi",
        "Salı",
        "Çarşamba",
        "Perşembe",
        "Cuma",
        "Cumartesi"
    ]
    min = checkTime(min);
    sec = checkTime(sec);
    day = days[today.getDay()]
    document.getElementById("myClock").innerHTML = `${hr} : ${min} : ${sec} ${day}` 
    setTimeout(showTime, 1000);
}
function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
  }
  showTime()