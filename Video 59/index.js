console.log("Hello, World!");
let a = "HAYATE";
console.log(a[0], a[1], a[2], a[3], a[4], a[5]);

console.log(a[0]);
console.log(a[1]);
console.log(a[2]);
console.log(a[3]);
console.log(a[4]);
console.log(a[5]);

console.log(a.length); /* Count The Length Of String */

let real_name = "HAYATE";
let friend = "KAZUMA";
console.log(
  "His Name Is " + real_name + " And His Friend Is " + friend
); /* Concatenate String */

console.log(
  `His Name Is ${real_name} And His Friend Name Is ${friend}`
); /* Template String */

let b = "kisame" 
console.log(b.toUpperCase());
console.log(b.toLowerCase()); /* Convert To Uppercase And Lowercase */
console.log(b.length);
console.log(b.slice(0,3,4));
console.log(b.slice(2));
/* Slice The String */

console.log(b.replace("sa", "09")); /* Replace The String */
console.log(b.concat(a)); /* Concatenate The String */

