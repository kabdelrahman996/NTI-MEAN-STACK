function eventMaker() {
  var eventName = document.getElementById("event-name").value;
  var eventTime = document.getElementById("event-time").value;
  var output = document.getElementById("output");
  var timer = document.getElementById("timer");

  var timeLeft = Number(eventTime);

  timer.innerHTML = "00:00";
  output.innerHTML = "";

  if (!eventName || isNaN(timeLeft) || timeLeft <= 0) {
    output.innerHTML = "⚠️ الرجاء إدخال اسم ايفينت صحيح والوقت بالثواني!";
    return;
  }

  function formatTime(sec) {
    var minutes = Math.floor(sec / 60);
    var seconds = sec % 60;
    if (minutes < 10) minutes = "0" + minutes;
    if (seconds < 10) seconds = "0" + seconds;
    return minutes + ":" + seconds;
  }

  timer.innerHTML = formatTime(timeLeft);

  var counter = setInterval(function () {
    timeLeft--;

    if (timeLeft >= 0) {
      timer.innerHTML = formatTime(timeLeft);
    } else {
      clearInterval(counter);
      timer.innerHTML = "00:00";
      output.innerHTML =
        "⏰ انتهى الوقت! الايفينت '" + eventName + "' بدأ الآن!";
    }
  }, 1000);
}
