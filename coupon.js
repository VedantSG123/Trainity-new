const couponCode = document.querySelector("#coupon");
const newerror = document.querySelector("#error");
const pay = document.querySelector("#pay");
// console.log(newerror);
pay.addEventListener("click", () => {
  if (couponCode.value === "TRAINITY20")
    window.location.href = "https://rzp.io/l/wts5UZM";
  else {
    alert("Referral code not valid");
  }
});
