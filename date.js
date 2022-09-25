let dateElementList = document.querySelectorAll("._date");
let monthElementList = document.querySelectorAll("._month");
let yearElementList = document.querySelectorAll("._year");
let regLinks = document.querySelectorAll(".reg-cstm-link");
let timeLinks = document.querySelectorAll("._time");

let len = dateElementList.length;
// console.log(regLinks);

for (let i = 0; i < regLinks.length; i++) {
  let m = moment();
  let hours = m.hours();
  let minutes = m.minutes();
  // console.log(hours, minutes);

  if (hours >= 11 && hours <= 20) {
    regLinks[i].setAttribute(
      "href",
      "https://event.webinarjam.com/register/76/8q8lvb1p"
    );
  } else {
    regLinks[i].setAttribute(
      "href",
      "https://event.webinarjam.com/register/76/8q8lvb1p"
    );
  }
}

for (let i = 0; i < timeLinks.length; i++) {
  let m = moment();
  let hours = m.hours();
  let minutes = m.minutes();

  if (hours >= 11 && hours <= 20) {
    timeLinks[i].innerHTML = "8:00 PM";
  } else {
    timeLinks[i].innerHTML = "11:00 AM";
  }
}

function redirect1() {
  let m = moment();
  let hours = m.hours();
  let minutes = m.minutes();
  // console.log(hours, minutes);

  if (hours >= 11 && hours <= 20) {
    window.location.href = "https://event.webinarjam.com/register/76/8q8lvb1p";
  } else {
    window.location.href = "https://event.webinarjam.com/register/76/8q8lvb1p";
  }
}

for (let i = 0; i < len; i++) {
  let dateElement = dateElementList[i];
  let monthElement = monthElementList[i];
  let yearElement = yearElementList[i];

  // console.log(dateElement, monthElement, yearElement);

  let m = moment();

  let hours = m.hours();
  let minutes = m.minutes();
  // console.log(hours, minutes);
  if (hours >= 20 && hours <= 23) {
    if (hours === 20 && minutes > 0) {
      m.add({
        days: 1,
      });
    } else if (hours > 20) {
      m.add({
        days: 1,
      });
    }
  }

  let weekDay = m.format("dddd");
  let month = m.format("MMMM");
  let day = m.format("Do");
  let year = m.format("YYYY");

  function myFunction(x) {
    if (x.matches) {
      // If media query matches
      month = month.slice(0, 3);
      let sup = day[day.length - 2] + day[day.length - 1];
      let dayString = "";

      for (let i = 0; i < day.length - 2; i++) {
        dayString += day[i];
      }

      dateElement.innerHTML = `<span class = "._date">${dayString}<sup>${sup}</sup></span>`;
      monthElement.textContent = month;
      yearElement.textContent = year;
    } else {
      month = month;
      let sup = day[day.length - 2] + day[day.length - 1];
      let dayString = "";

      for (let i = 0; i < day.length - 2; i++) {
        dayString += day[i];
      }

      dateElement.innerHTML = `<span class = "._date">${dayString}<sup>${sup}</sup></span>`;
      monthElement.textContent = month;
      yearElement.textContent = year;
    }
  }

  var x = window.matchMedia("(max-width: 700px)");
  myFunction(x); // Call listener function at run time
  x.addListener(myFunction); // Attach listener function on state changes
}

// console.log(weekDay, month, day, year);
