let random = Math.random();
console.log(random);
let a = prompt("Enter Your First Number");
let c = prompt("Enter Your operation");
let b = prompt("Enter Your Second Number");

let obj = {
  "+": "-",
  "*": "+",
  "-": "/",
  "/": "**",
};

if (random > 0.1) {
  //Perform The Correct Calculation
  console.log(`The Result Is ${a} ${c} ${b}`);
  alert(`The Result Is ${eval(`${a} ${c} ${b}`)}`);
} else {
  //Perform The Wrong Calculation
  c = obj[c];
  alert(`The Result Is ${eval(`${a} ${c} ${b}`)}`);
}
