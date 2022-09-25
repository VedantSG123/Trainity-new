var date = new Date();
var day = date.getDate();
var month = date.getMonth();
var year = date.getFullYear();
var weekDay = date.getDay();
var hour = date.getHours();
var min = date.getMinutes();
var ampm = hour >= 12 ? "pm" : "am";
var mon = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
var week = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
document.getElementById("date-and-time").innerHTML =
  day + " " + mon[month] + ", ";
var tens;
if (hour < 11) {
  tens = "Today";
} else {
  tens = "Tommorow";
}
document.getElementById("tod-tom").innerHTML = tens;
var tomorrow = new Date();
tomorrow.setDate(tomorrow.getDate() + 1);
tomorrow.setHours(11, 0, 0, 0);
var countDownDate = new Date(tomorrow).getTime();
var x = setInterval(function () {
  var now = new Date().getTime();
  var distance = countDownDate - now;
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  var finalHours = hours > 10 ? hours : "0" + hours;
  var finalMins = minutes > 10 ? minutes : "0" + minutes;
  var finalSecs = seconds > 10 ? seconds : "0" + seconds;
  document.getElementById("hours").innerHTML = finalHours;
  document.getElementById("minutes").innerHTML = finalMins;
  document.getElementById("secs").innerHTML = finalSecs;

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("hours").innerHTML = "00";
    document.getElementById("minutes").innerHTML = "00";
    document.getElementById("secs").innerHTML = "00";
  }
}, 1000);
