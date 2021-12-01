const dob = document.querySelector("#date");
const luckyNum = document.querySelector("#lucky-num");
const check = document.querySelector(".check");
const res = document.querySelector("#res");

check.addEventListener("click", function main() {
  if (dob.value === "" && luckyNum.value === "") {
    res.innerHTML = "Please enter both the fields";
  } else if (dob.value === "") {
    res.innerHTML = "Please enter a date to proceed";
  } else if (luckyNum.value === "") {
    res.innerHTML = "Please enter your lucky number to proceed";
  } else {
    // console.log(luckyNum.value);
    // console.log(dob.value);
    const date = new Date(dob.value);
    let sum = 0;
    // sum += date.getDate() + date.getMonth() + date.getFullYear;
    let dt = singleDigitSum(date.getDate());
    // console.log(date.getDate());
    // console.log(dt);
    let month = singleDigitSum(date.getMonth() + 1);
    // console.log(date.getMonth()+1);
    // console.log(month);
    let yr = singleDigitSum(date.getFullYear());
    // console.log(yr);
    sum += dt + month + yr;
    console.log("Date of Birth: " + dob.value);
    console.log("luckyNum: " + luckyNum.value);
    console.log(sum);
    if (sum % luckyNum.value === 0) {
      res.innerHTML = luckyNum.value + " is lucky";
    } else {
      res.innerHTML = luckyNum.value + " is not lucky";
    }
  }
});

function singleDigitSum(num) {
  let sum1 = 0;
  while (num !== 0) {
    sum1 += num % 10;
    num = Math.floor(num / 10);
  }
  return sum1;
}
