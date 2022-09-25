const navBar = document.querySelector(".my-nav-bar");
const navMobile = document.querySelector(".mobile");
const navLaptop = document.querySelector(".laptop");

console.log("HELLO");
// console.log(navBar);

const heroSection = document.querySelector(".hero-section");
const someElement = document.querySelector(".test-head");
const stickyBar = document.querySelector(".sticky-bar");
const testimonial = document.querySelector(".testimonial-container");

let newContent = document.querySelector(".new-content");
let newContent2 = document.querySelector(".new-content-2");

// let flag = window.matchMedia("(min-width: 768px");
// myFunction2(flag);
// flag.addListener(myFunction2);

// function myFunction2(flag) {
//   if (flag.matches) {
//     newContent.innerHTML = `<div class="inner-row2">
//               <div class="grid-cell" id="cell-1">
//                 <h4 class="grid-head">78%</h4>
//                 <p class="grid-content">Job Placement rate of our students</p>
//               </div>
//               <div class="grid-cell" id="cell-2">
//                 <h4 class="grid-head">&#x20B9 6 lacs</h4>
//                 <p class="grid-content">Average CTC</p>
//               </div>
//               <div class="grid-cell" id="cell-3">
//                 <h4 class="grid-head">140+</h4>
//                 <p class="grid-content">Hiring Companies</p>
//               </div>
//               <div class="grid-cell" id="cell-4">
//                 <h4 class="grid-head">12 weeks</h4>
//                 <p class="grid-content">On the Job Training</p>
//               </div>
//             </div>`;
//     newContent2.innerHTML = ``;
//   } else {
//     newContent2.innerHTML = `<div class="inner-row2">
//               <div class="grid-cell" id="cell-1">
//                 <h4 class="grid-head">78%</h4>
//                 <p class="grid-content">Job Placement rate of our students</p>
//               </div>
//               <div class="grid-cell" id="cell-2">
//                 <h4 class="grid-head">&#x20B9 6 lacs</h4>
//                 <p class="grid-content">Average CTC</p>
//               </div>
//               <div class="grid-cell" id="cell-3">
//                 <h4 class="grid-head">140+</h4>
//                 <p class="grid-content">Hiring Companies</p>
//               </div>
//               <div class="grid-cell" id="cell-4">
//                 <h4 class="grid-head">12 weeks</h4>
//                 <p class="grid-content">on the Job training</p>
//               </div>
//             </div>`;
//     newContent.innerHTML = ``;
//   }
// }

// Certificate section

console.log("HELLO WORLD");

const internList = document.querySelector("#intern");
const trainList = document.querySelector("#train");
// const lorList = document.querySelector("#lor");
const certiImage = document.querySelector(".certi-actual-image");

internList.classList.add("certi-active-list");

console.log(internList, trainList);

internList.addEventListener("click", (e) => {
  console.log("CLICKED");
  e.preventDefault();
  internList.classList.add("certi-active-list");
  trainList.classList.remove("certi-active-list");
  // lorList.classList.remove("certi-active-list");
  certiImage.setAttribute(
    "src",
    "./assets/img/trainity/certificates/Internship Certificate.png"
  );
});

trainList.addEventListener("click", (e) => {
  console.log("CLICKED");
  e.preventDefault();
  internList.classList.remove("certi-active-list");
  // lorList.classList.remove("certi-active-list");
  trainList.classList.add("certi-active-list");
  certiImage.setAttribute(
    "src",
    "https://trainity.in/assets/img/trainity/training/1.png"
  );
});
// lorList.addEventListener("click", (e) => {
//   console.log("CLICKED");
//   e.preventDefault();
//   internList.classList.remove("certi-active-list");
//   trainList.classList.remove("certi-active-list");
//   lorList.classList.add("certi-active-list");
//   certiImage.setAttribute("src", "./LOR.png");
// });

// var scrollEventHandler = function () {
//   window.scroll(0, window.pageYOffset);
// };

// window.addEventListener("scroll", scrollEventHandler, false);

const skillContent = document.querySelector(".skills-content");

function myFunction(x) {
  if (x.matches) {
    // If media query matches
    skillContent.style.display = "none";
  } else {
    skillContent.style.display = "block";
  }
}

var x = window.matchMedia("(max-width: 700px)");
myFunction(x); // Call listener function at run time
x.addListener(myFunction); // Attach listener function on state changes
