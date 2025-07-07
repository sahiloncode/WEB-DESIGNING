let arr= [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let newArr = arr.map((e)=>{
  return e**2;
})
console.log(newArr);


const greaterThanseven=(e)=>{
  if (e > 7){
    return true;
  }
  return false;
}
newArr.filter(greaterThanseven)
console.log(arr.filter(greaterThanseven));

let arr4 = [1,2,3,4,5]
const red = (a,b)=>{
  return a+b
}
console.log(arr4.reduce(red));