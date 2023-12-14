const button = document.getElementById("calcbutn");
const input = document.getElementById("input");
const result = document.getElementById("claculated");
button.addEventListener("click", function () {
  const inputamount = input.value;

  if (inputamount < 600) {
    result.innerHTML = "You Don't Have To Pay Tax";
  } else if (inputamount <= 1650) {
    let netsalary = inputamount - inputamount * 0.1;
    result.innerHTML = netsalary;
  } else if (inputamount <= 3200) {
    netsalary = inputamount - inputamount * 0.15;
    result.innerHTML = netsalary;
  } else if (inputamount <= 5250) {
    netsalary = inputamount - inputamount * 0.2;
    result.innerHTML = netsalary;
  } else if (inputamount <= 7800) {
    netsalary = inputamount - inputamount * 0.25;
    result.innerHTML = netsalary;
  } else if (inputamount <= 10900) {
    netsalary = inputamount - inputamount * 0.3;
    result.innerHTML = netsalary;
  } else if (inputamount > 10000) {
    netsalary = inputamount - inputamount * 0.35;
    result.innerHTML = netsalary;
  } else {
    alert("You have Entered Unknown Salary Please Try Again");
  }
});
